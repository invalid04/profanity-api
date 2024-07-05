import fs from 'fs'

interface Row {
    text: string
}

async function parseCSV(filepath: string): Promise<Row[]> {
    return new Promise((resolve, reject) => {
        const rows: Row[] = []


    })
}