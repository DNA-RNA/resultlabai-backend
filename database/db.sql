CREATE DATABASE resultlabai;

CREATE TABLE users
(
    id serial NOT NULL,
    first_name character varying NOT NULL,
    last_name character varying NOT NULL,
    email text,
    phone text,
    type text NOT NULL,
    status integer NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE doctors
(
    id serial NOT NULL,
    first_name character varying NOT NULL,
    last_name character varying NOT NULL,
    email text,
    phone text NOT NULL,
    status integer NOT NULL,
    user_id integer NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT user_id FOREIGN KEY (user_id)
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID
);

CREATE TABLE patients
(
    id serial NOT NULL,
    first_name character varying NOT NULL,
    last_name character varying,
    email text,
    address text,
    phone text,
    gender "char" CHECK(gender='K' OR gender='E'),
    age smallint,
    birth_date date NOT NULL,
    status integer NOT NULL,
    doctor_id integer NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT doctor_id FOREIGN KEY (doctor_id)
        REFERENCES doctors (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

CREATE TABLE user_payment
(
    id serial NOT NULL,
    "period(aylık/yıllık)" text NOT NULL,
    status boolean,
    user_id integer NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT user_id FOREIGN KEY (user_id)
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID
);

CREATE TABLE user_payment_transactions
(
    id serial NOT NULL,
    result text  NOT NULL,
    user_id integer NOT NULL,
    user_payment_id integer NOT NULL,
    CONSTRAINT user_payment_transactions_pkey PRIMARY KEY (id),
    CONSTRAINT user_id FOREIGN KEY (user_id)
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
      
        NOT VALID,
    CONSTRAINT user_payment FOREIGN KEY (user_payment_id)
        REFERENCES user_payment (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID
);
CREATE TABLE results
(
    id serial NOT NULL,
    file_path text,
    status integer,
    patient_id integer NOT NULL,
    doctor_id integer NOT NULL,
    CONSTRAINT results_pkey PRIMARY KEY (id),
    CONSTRAINT doctor_id FOREIGN KEY (doctor_id)
        REFERENCES doctors (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID,
    CONSTRAINT patient_id FOREIGN KEY (patient_id)
        REFERENCES patients (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID
);
CREATE TABLE result_notes
(
    id serial NOT NULL,
    text text NOT NULL,
    created_at time with time zone,
    updated_at time with time zone,
    result_id integer NOT NULL,
    CONSTRAINT result_id FOREIGN KEY (result_id)
        REFERENCES results (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID
);
CREATE TABLE admins(
id serial NOT NULL,
user_name character varying, 
email text NOT NULL,
password text NOT NULL
);