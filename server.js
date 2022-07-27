// This is mock server for login feature
const express = require('express');
const cors = require('cors');

const MOCK_DATA = {
  ID: 'user123',
  PW: 'password123',
  JWT: 'jwt',
  USER: { id: 'user123', name: 'Min' },
};
const PORT = 4000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const handleLogin = (req, res) => {
  const { id, pw } = req.body;
  if (id === MOCK_DATA.ID && pw === MOCK_DATA.PW) {
    res.status(200);
    res.json({
      msg: 'success',
      payload: { user: MOCK_DATA.USER, token: MOCK_DATA.JWT },
    });
  } else {
    res.status(400);
    res.json({ msg: 'fail', payload: null });
  }
};

app.get('/', (req, res) => {
  res.send('login mock server');
});
app.post('/login', handleLogin);

app.listen(PORT, () => {
  console.log(`mock server open on port ${PORT}`);
});
