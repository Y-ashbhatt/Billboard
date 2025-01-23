USE Billboard_AI;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fullname VARCHAR(255) NOT NULL,
    mobile_number VARCHAR(15) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    pass VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE campaign (
    id INT AUTO_INCREMENT PRIMARY KEY,
    addedBy INT NOT NULL,
    billboard_image TEXT NOT NULL,
    segmented_image VARCHAR(255) NOT NULL,
    banner_image VARCHAR(255),
    final_image VARCHAR(255),
    title VARCHAR(255),
    description TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(addedBy) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE actions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    campaign_id INT NOT NULL,
    x_coordiante FLOAT NOT NULL,
    y_coordinate FLOAT NOT NULL,
    action_type VARCHAR(50) NOT NULL,
    action_data JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (campaign_id) REFERENCES campaign(id) ON DELETE CASCADE
);

CREATE INDEX idx_users_email ON users (email);
CREATE INDEX idx_campaign_addedBy ON campaign (addedBy);
CREATE INDEX idx_actions_campaign_id ON actions (campaign_id);