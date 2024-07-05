import fs from 'fs'
import csv from 'csv-parser'

interface Row {
    text: string
}

async function parseCSV(filePath: string): Promise<Row[]> {
    return new Promise((resolve, reject) => {
        const rows: Row[] = []

        fs.createReadStream(filePath)
            .pipe(csv({separator: ","}))
            .on("data", (row) => {
                rows.push(row)
            })
            .on("error", (err) => {
                reject(err)
            })
            .on("end", () => {
                resolve(rows)
            })
    })
}