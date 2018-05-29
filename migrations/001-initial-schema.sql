-- Up
CREATE TABLE Category (id INTEGER PRIMARY KEY, name TEXT);
INSERT INTO Category (id, name) VALUES (1, 'Business');
INSERT INTO Category (id, name) VALUES (2, 'Technology');

CREATE TABLE Post (id INTEGER PRIMARY KEY, categoryId INTEGER, title TEXT, content TEXT, CONSTRAINT Post_fk_categoryId FOREIGN KEY (categoryId) REFERENCES Category (id));
CREATE INDEX Post_ix_categoryId ON Post (categoryId);
INSERT INTO Post (id, title, content, categoryId) VALUES (1, 'My first blog post', "A big title\n===\n\My main content", 1);
INSERT INTO Post (id, title, content, categoryId) VALUES (2, 'How use GraphQL', "How use GraphQL\n===\n\GraphSQL FTW", 2);

CREATE TABLE Comment (id INTEGER PRIMARY KEY, postId INTEGER, content TEXT, CONSTRAINT Comment_fk_postId FOREIGN KEY (postId) REFERENCES Post (id));
CREATE INDEX Comment_fk_postId ON Comment (postId);
INSERT INTO Comment (id, content, postId) VALUES (1, "Congrats for this new blog", 1);
INSERT INTO Comment (id, content, postId) VALUES (2, "You new blog is so cool", 1);
INSERT INTO Comment (id, content, postId) VALUES (3, "Really nice first technical blog post", 2);

-- Down
DROP INDEX Comment_fk_postId;
DROP TABLE Comment;

DROP INDEX Post_ix_categoryId;
DROP TABLE Post;

DROP TABLE Category;