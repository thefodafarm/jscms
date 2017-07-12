import seed from '../models/seed';
import _ from 'lodash'

import low from 'lowdb'
import fileAsync from 'lowdb/lib/storage/file-async'

export function initDb(db) {
	db.defaults(seed).write()
}

const db = low('./core/db/.index.json', {storage: fileAsync});

export default db;




