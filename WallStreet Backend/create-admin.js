const bcrypt = require('bcrypt');

async function createHash() {
  const password = 'wallstreet2024';
  const hash = await bcrypt.hash(password, 10);
  console.log('Password:', password);
  console.log('Hash:', hash);
  console.log('\nRun this SQL:');
  console.log(`DELETE FROM users WHERE username = 'admin';`);
  console.log(`INSERT INTO users (username, password_hash, role) VALUES ('admin', '${hash}', 'admin');`);
}

createHash();