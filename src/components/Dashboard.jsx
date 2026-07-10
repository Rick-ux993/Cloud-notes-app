function Dashboard() {
  return (
    <div className="dashboard">
      <header>
        <h1>☁ Cloud Notes</h1>
        <button id="logoutBtn">Logout</button>
      </header>

      <section className="search-section">
        <input
          type="text"
          placeholder="Search Notes..."
        />
        <button>Search</button>
      </section>

      <section className="create-note">
        <input
          type="text"
          placeholder="Note Title"
        />

        <textarea
          placeholder="Write your note..."
        ></textarea>

        <button>Create Note</button>
      </section>

      <section>
        <h2>Your Notes</h2>

        <div id="notesContainer">
          <div className="note-card">
            <h3>Welcome!</h3>
            <p>Your notes will appear here after connecting the AWS backend.</p>

            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;