import React from "react";
import { useState } from "react";
import { submit } from "../../api/subscribe";
import SearchIconsList from "../../components/searchIconsList/index";
import SearchItems from "../../components/searchItems/index";

const Home = () => {
  const [showNotif, setShowNotif] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showNotifMsg, setShowNotifMsg] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  return (
    <div id="content">
      <h1 style={{ fontWeight: 500 }}>Mediabeauties</h1>
      <p id="p1">Coming Soon</p>
      <div id="search">
        <SearchIconsList />
        <SearchItems />
        <span className="search-item" style={{ padding: 0, display: "block" }}>
          <span>... and more</span>
          <span id="tip"> | </span>
        </span>
      </div>
      <p className="website-status">Our website is under construction,</p>
      <p className="website-status">follow us for update now!</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit(name, email, setIsLoading, setShowNotif, setShowNotifMsg);
        }}
      >
        <div className="wrap-input">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            data-validate="Name is required"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="wrap-input">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            data-validate="Email is required : ex@abc.xyz "
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <button type="submit" className={`${isLoading ? "btn-loading" : ""}`}>
          {isLoading ? <span id="spinner"></span> : <span>Get Updates</span>}
        </button>
      </form>
      {showNotif && (
        <div id="submit-created">
          <span id="success-submit" className="material-icons">
            check_circle
          </span>
          <span id="success-submit-text">{showNotifMsg}</span>
          <span
            id="submit-created-close"
            onClick={() => {
              setShowNotif(false);
            }}
          >
            &#10005;
          </span>
        </div>
      )}
    </div>
  );
};

export default Home;
