// import defaultPages from '../models/Pages'
// import defaultUsers from '../models/Users'
import seed from '../models/seed';
import _ from 'lodash'

import low from 'lowdb'
import fileAsync from 'lowdb/lib/storages/file-async'

export function initDb(db) {
	// db.defaults(_.merge(defaultUsers, defaultPages)).write()
	db.defaults(seed).write()
}

const db = low('./core/db/.index.json', { storage: fileAsync });

export default db;