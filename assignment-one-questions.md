# Node.js and Version Control Class Questions for Week One Assignment

## Class One - Node.js Fundamentals

### Basic Understanding

1. What is Node.js and how does it differ from traditional server-side technologies?
2. Explain the relationship between Node.js and the V8 JavaScript engine.
3. What are the key features that make Node.js suitable for modern web applications?

### Architecture Questions

1. How does Node.js handle multiple concurrent connections despite being single-threaded?
2. Explain the concept of non-blocking I/O in Node.js and provide an example of when it's beneficial.
3. What is the event-driven architecture in Node.js and how does it contribute to its efficiency?

### Conceptual Questions

1. What is NPM and what role does it play in Node.js development?
2. Why is Node.js considered cross-platform, and what are the benefits of this feature?
3. What are built-in modules in Node.js, and why are they important?

## Class Two - Version Control

### Git Fundamentals

1. Explain the difference between Git and other version control systems.
2. What is the purpose of a repository in version control?
3. How does Git track changes in your codebase?

### Branching and Merging

1. What is the purpose of branching in Git?
2. What is the difference between merging and rebasing? When would you use each?
3. How do merge conflicts occur, and what are the general steps to resolve them?

### Collaborative Workflow

1. Explain the purpose and process of creating a pull request.
2. What is the difference between forking and cloning a repository?
3. How would you use Git to collaborate with other developers on the same project?

### Advanced Git Operations

1. When and how would you use Git stash?
2. Explain the purpose of Git tags and how to create them?
3. How do you manage remote repositories in Git?

## Discussion Questions

### Node.js

1. How does Node.js's single-threaded nature affect its performance and scalability?
2. What are the advantages and disadvantages of using an event-driven architecture?
3. How does Node.js's non-blocking I/O model benefit web applications?

### Version Control

1. Why is version control important in software development?
2. How does version control help in team collaboration?
3. What are the best practices for organizing a Git repository?

### Combined Concepts

1. How would you explain the relationship between Node.js and version control in a development workflow?
2. What are the key considerations when setting up a new Node.js project with version control?
3. How can version control help in managing Node.js dependencies?

---

## Instructions for Submitting Solutions to GitHub

### Initial Setup

1. **Create a GitHub Account**

   - Go to https://github.com
   - Click "Sign up" and follow the registration process

2. **Install Git**

   - For macOS: Install via Homebrew (`brew install git`)
   - For Windows: Download from https://git-scm.com/download/win
   - For Linux: Use your package manager (e.g., `sudo apt-get install git`)

3. **Configure Git**
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

## Creating and Pushing Your Solutions

1. **Create a New Repository**

   - Go to GitHub.com
   - Click the "+" icon in the top right
   - Select "New repository"
   - Name it "be-assignment-one-solutions"
   - Add a description (optional)
   - Choose "Public"
   - Click "Create repository"

2. **Initialize Local Repository**

   ```bash
   # Create a new directory for your solutions
   mkdir be-assignment-one-solutions
   cd be-assignment-one-solutions

   # Initialize git repository
   git init

   # Create a README.md file
   echo "# BE Week One Assignment Solutions" > README.md
   ```

3. **Create Solution Files**

   - Create a new file for each question's answer
   - Use clear file names (e.g., `nodejs-basic-understanding.md`, `git-fundamentals.md`)
   - Write your answers in markdown format

4. **Commit and Push Your Solutions**

   ```bash
   # Add all files to git
   git add .

   # Commit your changes
   git commit -m "Initial commit: Adding class solutions"

   # Add the remote repository
   git remote add origin https://github.com/YOUR-USERNAME/be-assignment-one-solutions.git

   # Push to GitHub
   git push -u origin main
   ```

## Best Practices for Submitting Solutions

1. **File Organization**

   - Create separate files for different topics
   - Use clear, descriptive file names
   - Include a README.md with an overview of your solutions

2. **Commit Messages**

   - Write clear, descriptive commit messages
   - Use present tense ("Add solution" not "Added solution")
   - Keep messages concise but informative

3. **Documentation**

   - Include comments in your markdown files
   - Explain your thought process
   - Reference any resources you used

4. **Regular Updates**
   - Commit and push regularly
   - Keep your repository up to date
   - Use branches for different topics or versions

## Troubleshooting Common Issues

1. **Authentication Issues**

   - If you get authentication errors, set up SSH keys or use a personal access token
   - For SSH setup: [Setting Up SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

2. **Push Rejected**

   - If push is rejected, pull first: `git pull origin main`
   - Resolve any conflicts
   - Then try pushing again

3. **Large Files**
   - If you get errors about large files, use Git LFS or remove the files
   - Add large files to .gitignore

## Additional Resources

- [GitHub Documentation](https://docs.github.com)
- [Git Documentation](https://git-scm.com/doc)
- [Markdown Guide](https://www.markdownguide.org)
