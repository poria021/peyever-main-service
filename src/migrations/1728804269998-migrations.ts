import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1728804269998 implements MigrationInterface {
    name = 'Migrations1728804269998'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" ADD "admin_id" integer`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "country_id" integer`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "origin_city" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "destination_city" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "destination_city" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "origin_city" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "country_id"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "admin_id"`);
    }

}
