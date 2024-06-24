CREATE TABLE `link` (
	`id` text PRIMARY KEY NOT NULL,
	`userId` text,
	`name` text,
	`url` text,
	FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `site` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`backgroundColor` text,
	`imageLocation` text
);
