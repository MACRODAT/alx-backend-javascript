const fs = require('fs');

const CountStudents = (db) => {
	if (!fs.existsSync(db))
	{
		throw new Error('Cannot load the database');
	}
	const data = fs.readFileSync(db, encoding='utf-8').toString().trim();
	const lines = data.split('\n');
	const columns = lines[0].split(',');
	const groups = {};
  let nbr = 0;
  for (const line in lines.slice(1)) {
    const data = line.split(',');
    if (data == []) {
      continue;
    }
    nbr = nbr + 1;
    const field = data[columns.length - 1];
    if (!Object.keys(groups).includes(field)) {
      groups[field] = [data[0]];
    } else {
      groups[field].push(data[0]);
    }
	}
  console.log('Number of students: ' + nbr);
  for (const [group, students] in groups) {
    let s = 'Number of students in ' + String(group) + '. List: ' + students.join(', ');
    console.log(s);
  }
}

module.exports = CountStudents;
