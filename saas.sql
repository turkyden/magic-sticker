CREATE TABLE gallery (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(50) NOT NULL,
    image_url VARCHAR(255),
    create_time TIMESTAMP NOT NULL,
    status VARCHAR(50)
);

INSERT INTO gallery (user_id, image_url, create_time, status)
VALUES ('user_2fwn7vlP1Sq8E486Wh0zAzxeR1T', 'https://replicate.delivery/pbxt/fbZmddodNLwmNKXTK5UPQaDwsPyDrzFfBkzGyLBdTt91hAxSA/ComfyUI_00001_.webp', '2024-05-04T15:37:33.524000Z', 'active');

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