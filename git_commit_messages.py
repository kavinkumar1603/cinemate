
# Cinemate - Professional Git Commit Messages
# This script prints 25 professional commit messages tailored for the Cinemate project.

commit_messages = [
    "feat: initialize cinemate project with core react structure",
    "feat: add react-router-dom and configure main navigation routes",
    "feat: implement MovieList component to fetch and display trending movies",
    "feat: create MovieDetail page to show extended movie information",
    "feat: implement search functionality for real-time movie filtering",
    "feat: add PageNotFound component for improved user experience",
    "feat: develop custom useFetch hook to centralize API requests",
    "feat: integrate Tailwind CSS for responsive and modern UI styling",
    "feat: implement dark mode support using system preferences and toggle",
    "fix: resolve potential memory leak in useFetch cleanup function",
    "fix: handle API failure cases with user-friendly error messages",
    "fix: ensure consistent layout of movie cards on mobile devices",
    "fix: correct movie release date formatting across different locales",
    "docs: update README with installation steps and API key instructions",
    "docs: add JSDoc comments to hooks and utility functions",
    "style: refine transition animations between movie pages",
    "style: apply consistent padding and margin across the application",
    "refactor: extract MovieCard into a standalone reusable component",
    "refactor: move API configuration into separate environment variables",
    "refactor: optimize state management for search results",
    "perf: implement image lazy loading to reduce initial payload",
    "perf: add React.memo to MovieCard to prevent unnecessary re-renders",
    "test: add unit tests for fetch logic and data transformation",
    "chore: update package.json with the latest dependency versions",
    "chore: configure .gitignore to exclude sensitive environment files"
]

def display_messages():
    print("=" * 60)
    print("      PROFESSIONAL COMMIT MESSAGES FOR CINEMATE")
    print("=" * 60)
    for i, msg in enumerate(commit_messages, 1):
        print(f"{i:2d}. {msg}")
    print("=" * 60)

if __name__ == "__main__":
    display_messages()
