
CREATE TABLE contact_messages (
    message_id   NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    full_name    VARCHAR2(100) NOT NULL,
    email        VARCHAR2(100) NOT NULL,
    subject      VARCHAR2(200),
    message      CLOB NOT NULL,
    created_date DATE DEFAULT SYSDATE
);

CREATE INDEX idx_contact_created ON contact_messages(created_date);


GRANT INSERT, SELECT ON contact_messages TO Dev_sinthu_26ai;

