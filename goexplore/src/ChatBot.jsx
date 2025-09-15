import React, { useMemo, useState } from "react";
import "./ChatBot.css";

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const messages = useMemo(() => ([
    { id: 1, user: "Aarav", location: "Goa", text: "Beach vibes are amazing!" },
    { id: 2, user: "Mia", location: "New York", text: "Times Square was dazzling tonight." },
    { id: 3, user: "Ravi", location: "India", text: "Taj Mahal was breathtaking." },
    { id: 4, user: "Ken", location: "Tokyo", text: "Sushi and temples—perfect day." },
    { id: 5, user: "Luna", location: "Goa", text: "Sunset at Anjuna is a must!" },
  ]), []);

  const filtered = useMemo(() => {
    return messages.filter(m => (filter === "All" || m.location === filter) &&
      (query.trim() === "" || m.text.toLowerCase().includes(query.toLowerCase())));
  }, [messages, filter, query]);

  return (
    <div className="chatbot-container">
      <button
        className="chatbot-icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        title={isOpen ? "Close chat" : "Open chat"}
      >
        <span className="chatbot-badge">TC</span>
      </button>

      {isOpen && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <h3>Travel Chat</h3>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ✖
            </button>
          </div>

          <div className="chatbot-body">
            <label>Filter by location:</label>
            <select value={filter} onChange={e => setFilter(e.target.value)}>
              <option>All</option>
              <option>Goa</option>
              <option>New York</option>
              <option>India</option>
              <option>Tokyo</option>
            </select>

            <label>Search in messages:</label>
            <input value={query} onChange={e => setQuery(e.target.value)} type="text" placeholder="Search..." />

            <div style={{ marginTop: 10, maxHeight: 180, overflowY: 'auto' }}>
              {filtered.map(m => (
                <div key={m.id} style={{ padding: 8, borderBottom: '1px solid #eee' }}>
                  <strong>{m.user}</strong> • <em>{m.location}</em>
                  <div>{m.text}</div>
                </div>
              ))}
              {filtered.length === 0 && <div>No messages match.</div>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBot;

