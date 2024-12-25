-- ORGANIZATION TABLE
CREATE TABLE organization (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    short_name VARCHAR(255) NOT NULL,
    status BOOLEAN NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- USER TABLE
CREATE TABLE orgUser (
    id SERIAL PRIMARY KEY,
    login VARCHAR(50) NOT NULL, 
    password VARCHAR(255) NOT NULL,
    employee_id BIGINT REFERENCES employee(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- DEPARTMENT TABLE
CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    short_name VARCHAR(255) NOT NULL,
    organization_id BIGINT REFERENCES organization(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- FACULTY TABLE
CREATE TABLE faculty (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    short_name VARCHAR(255) NOT NULL,
    organization_id BIGINT REFERENCES organization(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- KAFEDRA TABLE
CREATE TABLE kafedra (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    short_name VARCHAR(255) NOT NULL,
    faculty_id BIGINT REFERENCES faculty(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- EMPLOYEE TABLE
CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    middle_name VARCHAR(100),
    last_name VARCHAR(100) NOT NULL,
    kafedra_id BIGINT REFERENCES kafedra(id),
    department_id BIGINT REFERENCES department(id),
    rate DECIMAL(5, 2) NOT NULL CHECK (rate > 0 AND rate <= 1),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
