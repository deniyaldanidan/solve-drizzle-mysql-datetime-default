CREATE TABLE `groceries` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`timestamp1` timestamp NOT NULL DEFAULT (now()),
	`timestamp2` timestamp NOT NULL DEFAULT now(),
	`timestamp3` int NOT NULL DEFAULT (unix_timestamp()),
	CONSTRAINT `groceries_id` PRIMARY KEY(`id`)
);
