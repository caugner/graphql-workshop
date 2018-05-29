-- Up
CREATE TABLE Category (id INTEGER PRIMARY KEY, name TEXT);
CREATE TABLE Post (id INTEGER PRIMARY KEY, categoryId INTEGER, title TEXT, content TEXT, CONSTRAINT Post_fk_categoryId FOREIGN KEY (categoryId) REFERENCES Category (id));
CREATE INDEX Post_ix_categoryId ON Post (categoryId);
INSERT INTO Category (id, name) VALUES (1, 'Business');
INSERT INTO Category (id, name) VALUES (2, 'Technology');

INSERT INTO Post (id, title, content, categoryId) VALUES (1, 'My first blog post', "A big title\n===\n\My main content", 1);
INSERT INTO Post (id, title, content, categoryId) VALUES (2, 'How use GraphQL', "How use GraphQL\n===\n\GraphSQL FTW", 2);

-- Down
DROP INDEX Post_ix_categoryId;
DROP TABLE Post;
DROP TABLE Category;