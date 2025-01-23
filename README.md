# Supplier web scrapping

### **Descripción**
Imagina que trabajas en una institución financiera y necesitas desarrollar una herramienta automatizada que realice búsquedas en línea para identificar entidades en listas de alto riesgo, como sanciones internacionales, listas de vigilancia y otras bases de datos relevantes. Tu tarea es crear un proceso de “web scraping” que extraiga la información necesaria y la presente de manera legible para su revisión.

### **Requerimientos**
1. Buscar el nombre de la entidad en por lo menos una de las fuentes propuestas, haciendo uso de “web scraping”.

    * [Offshore Leaks Database](https://offshoreleaks.icij.org)
    * [The World Bank](https://projects.worldbank.org/en/projects-operations/procurement/debarred-firms)
    * [OFAC](https://sanctionssearch.ofac.treas.gov/)

2. La búsqueda debe retornar:
    * El número de hits encontrados por el buscador
    * Un arreglo con los diferentes elementos, considerando los atributos de las fuentes propuestas.

3. Considerar validaciones para su uso, así como mensajes relevantes de error, entre las que se considerarán (deseable):
    * Número máximo de llamadas por minuto: 20 (rate limit)
    * Autenticación del REST API (API KEY)

### **Tecnologías**

Para la resolución de este ejercicio elegí NodeJS con el framework express usando como lenguaje Typescript. Express es un framework minimalista y flexible que junto a Typescript es una buena opción para desarrollar un proyecto escalable y de fácil mantenimiento.

### **Requisitos**

1. Instalación de [NodeJS LTS](https://nodejs.org/en)
2. Archivo `.env` basado en el archivo `env.template`

### **Setup**

1. Descarga de las dependencias
```
(npm | pnpm) install
```

2. Inicia en modo desarrollo
```
(npm | pnpm) run dev
```

