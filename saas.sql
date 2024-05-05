CREATE TABLE gallery (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(50) NOT NULL,
    image_url VARCHAR(100),
    create_time DATE NOT NULL,
    status VARCHAR(50)
);

INSERT INTO gallery (user_id, image_url, create_time, status)
VALUES ('user123', 'http://example.com/image1.jpg', '2023-05-04', 'active');

CREATE TABLE user (
    id INT PRIMARY KEY,
    credit INT,
    username VARCHAR(50),
    fullName VARCHAR(50),
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    imageUrl VARCHAR(100),
    emailAddresses VARCHAR(50),
    createdAt DATE NOT NULL,
    updatedAt DATE NOT NULL
);