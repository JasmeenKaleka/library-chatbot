# Library Chatbot — AI-Powered Library Assistant

A Flask-based library assistant that answers questions about library services using a structured knowledge base and Cohere's embedding and chat APIs. The interface supports English and Punjabi responses.

**Maintainer:** [JasmeenKaleka](https://github.com/JasmeenKaleka)

## Features

- Semantic retrieval: Cohere `embed-english-v3.0` matches questions to entries in `university_data.json`.
- Context-based answers: Cohere `command-a-03-2025` generates concise answers from retrieved library information for high-confidence matches.
- English / Punjabi interface and response options.
- Responses for library hours, services, catalogue access, and other topics represented in the knowledge base.
- Flask web UI with session-based conversation history.

## Project background

The author reports that a library chatbot she developed was deployed on Punjabi University's website. **This repository is a related public implementation, not a verified copy of the university's deployed version.** The university deployment is historical context, not a claim of official endorsement or that this repository is currently deployed there.

## Tech stack

Python, Flask, Flask-WTF, NumPy, Cohere API, HTML/CSS/JavaScript, and Gunicorn.

## Local setup

1. Clone this repository and enter the project directory.
2. Create and activate a Python virtual environment.
3. Install dependencies: `pip install -r requirements.txt`.
4. Copy `.env.example` to `.env` and set `COHERE_API_KEY` to your own Cohere API key.
5. Export the variable into your shell or load the `.env` file with your chosen environment manager. **The current code uses `os.getenv` and does not automatically load `.env`.**
6. Run `python app.py` and open `http://127.0.0.1:5000`.

For a shell that supports `export`, you can set the key with `export COHERE_API_KEY="your-key"`. On Windows PowerShell, use `$env:COHERE_API_KEY="your-key"` for the current session.

> The app calls Cohere during startup to build document embeddings, so a valid key and API connectivity are required even to start the application.

## Knowledge base

The `university_data.json` file contains library-specific informational records and links. To adapt this for another institution, replace these entries with information that you have permission to publish, and check all URLs and opening hours for accuracy. Some existing links refer to institution-specific resources and may not work outside that network.

## Security and limitations

- Never commit a real API key or `.env` file. Rotate any key previously published in Git history.
- Chat history is stored in a Flask session. The current app generates a new secret key when the process starts, which means sessions can be invalidated by restarts or multiple workers. For production, use a stable server-side secret and review session data handling.
- Low-similarity queries currently use a general academic-assistant fallback; these answers are **not** necessarily grounded in library documentation.
- The app does not currently provide a dedicated test suite, rate limiting, or formal deployment security review. Additional security and reliability work is recommended before public production deployment.

## Contributing

Bug reports, documentation suggestions, and proposed improvements are welcome through GitHub Issues and pull requests. Please describe the problem or proposed change and include steps to reproduce bugs. Do not submit private university data or API credentials.

## License

No open-source license has been selected yet. Public visibility alone does **not** grant permission for others to reuse or redistribute the source code. The maintainer should choose a license before presenting this as a reusable open-source package.
