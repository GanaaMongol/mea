import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "prayers" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "prayers_id" integer;
  CREATE INDEX "prayers_updated_at_idx" ON "prayers" USING btree ("updated_at");
  CREATE INDEX "prayers_created_at_idx" ON "prayers" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_prayers_fk" FOREIGN KEY ("prayers_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_prayers_id_idx" ON "payload_locked_documents_rels" USING btree ("prayers_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "prayers" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "prayers" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_prayers_fk";
  
  DROP INDEX "payload_locked_documents_rels_prayers_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "prayers_id";`)
}
