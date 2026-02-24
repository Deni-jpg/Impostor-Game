Impostor Word Game 🕵️‍♂️
=========================

A simple web game to play with friends, built with HTML, JavaScript, Tailwind CSS, and Supabase. Now powered by **Vite**.

You can play it <a href="http://jogodogc.netlify.app" target="_blank" rel="noopener noreferrer">here</a>!

This project was inspired by my group of friends at church. We used to play this game with paper, and they suggested I create a website for it. That's how this idea came to life! Feel free to contribute to the game :)

How to Play
-----------

1.  The host creates a room in `criar-sala.html` by choosing:

    -   The secret word

    -   Number of players

    -   Number of impostors

2.  Players join the room using `entrar-sala.html` with the room code.

3.  Each player sees either the secret word or that they are an impostor.

4.  Players play the game **in person** by describing the word.

5.  The host can see a **list of players entering the room**, along with their role (impostor or word holder), updated from the Supabase database.

6.  Use the **Restart Game** button in `jogo.html` to reset the room and play again.

🛠️ Setup & Development
-----------------------

Since the project now uses **Vite**, follow these steps to run it locally:

1.  **Install dependencies:**

    Bash

    ```
    npm install

    ```

2.  **Environment Variables:** Create a `.env` file in the root folder and add your keys:

    Fragmento do código

    ```
    VITE_SUPABASE_URL=your_supabase_url
    VITE_SUPABASE_KEY=your_supabase_anon_key

    ```

3.  **Run local server:**

    Bash

    ```
    npm run dev

    ```

🌐 Deploy (Netlify)
-------------------

-   **Build Command:** `npm run build`

-   **Publish directory:** `dist`

-   **Important:** Add `SECRETS_SCAN_ENABLED=false` in Netlify's environment variables to prevent build errors due to the Supabase keys being exposed in the final JS bundle.

Files
-----

-   `index.html` -- Landing page with "Create Room" and "Join Room" options

-   `criar-sala.html` -- Create a new game room and see players joining (powered by Supabase)

-   `entrar-sala.html` -- Join a room with a code

-   `jogo.html` -- Player view showing the word or impostor

-   `js/supabaseClient.js` -- Supabase configuration using `import.meta.env`

Technologies
------------

-   HTML / CSS / JavaScript (ES Modules)

-   [Vite](https://vitejs.dev/)

-   [Tailwind CSS](https://tailwindcss.com/)

-   [Supabase](https://supabase.com/) for realtime room/player data

Notes
-----

-   Better experience if played in person.

-   Player and room data are stored in **Supabase**, allowing multiple devices to see updates.

-   No traditional backend is required beyond Supabase.
