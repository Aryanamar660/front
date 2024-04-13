import React from 'react';
import Home from './components/Home';
import Feed from './components/Feed';
import Post from './components/postitemform';
import History from './components/history';
import Message from './components/Messages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
 <Router>
<Routes>
<Route exact path="/" element={<Home />} />
<Route exact path="/feed" element={<Feed />} />
<Route exact path="/post-new" element={<Post />} />
<Route exact path="/history" element={<History />} />
<Route exact path="/messages" element={<Message />} />
</Routes>
</Router>
  );
}

export default App;
