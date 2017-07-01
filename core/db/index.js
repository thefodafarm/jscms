import defaultdb from '../models/Pages'

export function initDb(db) {
	db.defaults(defaultdb).write()
}




