import { chromium } from "playwright"
import { ItemResult } from "../types"
import db from "../db"

export const executeScrapping = async () => {
  console.log('Scrapping....')

  const browser = await chromium.launch({
    headless: true
  })

  const page = await browser.newPage()

  await page.goto('https://projects.worldbank.org/en/projects-operations/procurement/debarred-firms')

  await page.waitForSelector("tbody[role='rowgroup']")

  const results: ItemResult[] = await page.$$eval(
    "tr[role='row']",
    (result) => (
      result
        .slice(2)
        .map(el => {
          const [firmName, _, address, country, fromDate, toDate, grounds] = Array.from(el.childNodes)

          return {
            firmName: firmName.textContent,
            address: address.textContent,
            country: country.textContent,
            fromDate: fromDate.textContent,
            toDate: toDate.textContent,
            grounds: grounds.textContent
          }
        })
    ))


  const stmt = db.prepare('INSERT OR IGNORE INTO suppliers (firmName, address, country, fromDate, toDate, grounds) VALUES (?,?,?,?,?,?)')

  try {
    db.transaction(() => {
      results.forEach(({ firmName, address, country, fromDate, toDate, grounds }) => stmt.run(firmName, address, country, fromDate, toDate, grounds))
    })()

    console.log('Scrapping completed')
  } catch (error) {
    console.log(error)
  }

}