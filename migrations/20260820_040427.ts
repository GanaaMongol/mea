import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_posts_feed_collection" AS ENUM('posts', 'prayers');
  CREATE TYPE "public"."enum__pages_v_blocks_posts_feed_collection" AS ENUM('posts', 'prayers');
  CREATE TYPE "public"."enum_posts_blocks_posts_feed_collection" AS ENUM('posts', 'prayers');
  CREATE TYPE "public"."enum__posts_v_blocks_posts_feed_collection" AS ENUM('posts', 'prayers');
  CREATE TYPE "public"."enum_prayers_blocks_page_banner_links_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_prayers_blocks_page_banner_links_appearance" AS ENUM('default', 'primary', 'outline');
  CREATE TYPE "public"."enum_prayers_blocks_page_banner_variant" AS ENUM('hub', 'vision', 'dept', 'deptDetail', 'news', 'region', 'imageOnly', 'hubGradient');
  CREATE TYPE "public"."enum_prayers_blocks_page_banner_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_prayers_blocks_section_tabs_items_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_prayers_blocks_section_tabs_variant" AS ENUM('dept', 'bar', 'cap');
  CREATE TYPE "public"."enum_prayers_blocks_section_tabs_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_prayers_blocks_rich_text_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_prayers_blocks_rich_text_width" AS ENUM('narrow', 'wide');
  CREATE TYPE "public"."enum_prayers_blocks_rich_text_background" AS ENUM('none', 'white', 'warm', 'article');
  CREATE TYPE "public"."enum_prayers_blocks_card_grid_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_prayers_blocks_card_grid_variant" AS ENUM('info', 'mission', 'ack', 'step');
  CREATE TYPE "public"."enum_prayers_blocks_card_grid_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_prayers_blocks_card_grid_background" AS ENUM('warm', 'white');
  CREATE TYPE "public"."enum_prayers_blocks_quote_banner_variant" AS ENUM('quote', 'cta', 'dept', 'visionGoal');
  CREATE TYPE "public"."enum_prayers_blocks_quote_banner_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_prayers_blocks_quote_banner_cta_appearance" AS ENUM('default', 'primary', 'outline');
  CREATE TYPE "public"."enum_prayers_blocks_accelerators_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_prayers_blocks_accelerators_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_prayers_blocks_posts_feed_filter_items_kind" AS ENUM('all', 'news', 'article');
  CREATE TYPE "public"."enum_prayers_blocks_posts_feed_variant" AS ENUM('plain', 'bordered', 'related');
  CREATE TYPE "public"."enum_prayers_blocks_posts_feed_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_prayers_blocks_posts_feed_collection" AS ENUM('posts', 'prayers');
  CREATE TYPE "public"."enum_prayers_blocks_posts_feed_source" AS ENUM('auto', 'manual');
  CREATE TYPE "public"."enum_prayers_blocks_posts_feed_kind" AS ENUM('all', 'news', 'article');
  CREATE TYPE "public"."enum_prayers_blocks_posts_feed_filter_style" AS ENUM('buttons', 'tabs');
  CREATE TYPE "public"."enum_prayers_blocks_posts_feed_more_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_prayers_blocks_gallery_variant" AS ENUM('mosaic', 'carousel', 'grid');
  CREATE TYPE "public"."enum_prayers_blocks_history_grid_title_tone" AS ENUM('primary', 'neutral');
  CREATE TYPE "public"."enum_prayers_blocks_people_grid_variant" AS ENUM('board', 'regionTeam');
  CREATE TYPE "public"."enum_prayers_blocks_people_grid_source" AS ENUM('group', 'manual');
  CREATE TYPE "public"."enum_prayers_blocks_people_grid_group" AS ENUM('leadership', 'board', 'team', 'region');
  CREATE TYPE "public"."enum_prayers_blocks_data_table_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_prayers_blocks_data_table_variant" AS ENUM('region', 'plain', 'list');
  CREATE TYPE "public"."enum_prayers_blocks_department_grid_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_prayers_blocks_department_grid_source" AS ENUM('auto', 'manual');
  CREATE TYPE "public"."enum_prayers_blocks_process_steps_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_prayers_blocks_figure_variant" AS ENUM('map', 'wide');
  CREATE TYPE "public"."enum_prayers_blocks_region_map_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_prayers_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__prayers_v_blocks_page_banner_links_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__prayers_v_blocks_page_banner_links_appearance" AS ENUM('default', 'primary', 'outline');
  CREATE TYPE "public"."enum__prayers_v_blocks_page_banner_variant" AS ENUM('hub', 'vision', 'dept', 'deptDetail', 'news', 'region', 'imageOnly', 'hubGradient');
  CREATE TYPE "public"."enum__prayers_v_blocks_page_banner_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__prayers_v_blocks_section_tabs_items_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__prayers_v_blocks_section_tabs_variant" AS ENUM('dept', 'bar', 'cap');
  CREATE TYPE "public"."enum__prayers_v_blocks_section_tabs_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__prayers_v_blocks_rich_text_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__prayers_v_blocks_rich_text_width" AS ENUM('narrow', 'wide');
  CREATE TYPE "public"."enum__prayers_v_blocks_rich_text_background" AS ENUM('none', 'white', 'warm', 'article');
  CREATE TYPE "public"."enum__prayers_v_blocks_card_grid_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__prayers_v_blocks_card_grid_variant" AS ENUM('info', 'mission', 'ack', 'step');
  CREATE TYPE "public"."enum__prayers_v_blocks_card_grid_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__prayers_v_blocks_card_grid_background" AS ENUM('warm', 'white');
  CREATE TYPE "public"."enum__prayers_v_blocks_quote_banner_variant" AS ENUM('quote', 'cta', 'dept', 'visionGoal');
  CREATE TYPE "public"."enum__prayers_v_blocks_quote_banner_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__prayers_v_blocks_quote_banner_cta_appearance" AS ENUM('default', 'primary', 'outline');
  CREATE TYPE "public"."enum__prayers_v_blocks_accelerators_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__prayers_v_blocks_accelerators_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__prayers_v_blocks_posts_feed_filter_items_kind" AS ENUM('all', 'news', 'article');
  CREATE TYPE "public"."enum__prayers_v_blocks_posts_feed_variant" AS ENUM('plain', 'bordered', 'related');
  CREATE TYPE "public"."enum__prayers_v_blocks_posts_feed_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__prayers_v_blocks_posts_feed_collection" AS ENUM('posts', 'prayers');
  CREATE TYPE "public"."enum__prayers_v_blocks_posts_feed_source" AS ENUM('auto', 'manual');
  CREATE TYPE "public"."enum__prayers_v_blocks_posts_feed_kind" AS ENUM('all', 'news', 'article');
  CREATE TYPE "public"."enum__prayers_v_blocks_posts_feed_filter_style" AS ENUM('buttons', 'tabs');
  CREATE TYPE "public"."enum__prayers_v_blocks_posts_feed_more_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__prayers_v_blocks_gallery_variant" AS ENUM('mosaic', 'carousel', 'grid');
  CREATE TYPE "public"."enum__prayers_v_blocks_history_grid_title_tone" AS ENUM('primary', 'neutral');
  CREATE TYPE "public"."enum__prayers_v_blocks_people_grid_variant" AS ENUM('board', 'regionTeam');
  CREATE TYPE "public"."enum__prayers_v_blocks_people_grid_source" AS ENUM('group', 'manual');
  CREATE TYPE "public"."enum__prayers_v_blocks_people_grid_group" AS ENUM('leadership', 'board', 'team', 'region');
  CREATE TYPE "public"."enum__prayers_v_blocks_data_table_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__prayers_v_blocks_data_table_variant" AS ENUM('region', 'plain', 'list');
  CREATE TYPE "public"."enum__prayers_v_blocks_department_grid_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__prayers_v_blocks_department_grid_source" AS ENUM('auto', 'manual');
  CREATE TYPE "public"."enum__prayers_v_blocks_process_steps_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__prayers_v_blocks_figure_variant" AS ENUM('map', 'wide');
  CREATE TYPE "public"."enum__prayers_v_blocks_region_map_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__prayers_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__prayers_v_published_locale" AS ENUM('mn', 'en');
  CREATE TYPE "public"."enum_departments_blocks_posts_feed_collection" AS ENUM('posts', 'prayers');
  CREATE TYPE "public"."enum__departments_v_blocks_posts_feed_collection" AS ENUM('posts', 'prayers');
  CREATE TYPE "public"."enum_hubs_blocks_posts_feed_collection" AS ENUM('posts', 'prayers');
  CREATE TYPE "public"."enum__hubs_v_blocks_posts_feed_collection" AS ENUM('posts', 'prayers');
  CREATE TYPE "public"."enum_membership_tiers_blocks_posts_feed_collection" AS ENUM('posts', 'prayers');
  CREATE TABLE "prayers_blocks_page_banner_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_prayers_blocks_page_banner_links_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar,
  	"appearance" "enum_prayers_blocks_page_banner_links_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "prayers_blocks_page_banner_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_page_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_prayers_blocks_page_banner_variant" DEFAULT 'hub',
  	"background_id" integer,
  	"watermark_id" integer,
  	"height" numeric,
  	"align" "enum_prayers_blocks_page_banner_align" DEFAULT 'left',
  	"overlay" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "prayers_blocks_page_banner_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"tag" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_section_tabs_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_prayers_blocks_section_tabs_items_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar
  );
  
  CREATE TABLE "prayers_blocks_section_tabs_items_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_section_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_prayers_blocks_section_tabs_variant" DEFAULT 'dept',
  	"align" "enum_prayers_blocks_section_tabs_align" DEFAULT 'left',
  	"plain" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE "prayers_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_prayers_blocks_rich_text_header_align" DEFAULT 'left',
  	"width" "enum_prayers_blocks_rich_text_width" DEFAULT 'narrow',
  	"background" "enum_prayers_blocks_rich_text_background" DEFAULT 'none',
  	"block_name" varchar
  );
  
  CREATE TABLE "prayers_blocks_rich_text_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_card_grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"badge" varchar,
  	"link_type" "enum_prayers_blocks_card_grid_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "prayers_blocks_card_grid_items_locales" (
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_card_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_prayers_blocks_card_grid_variant" DEFAULT 'info',
  	"header_align" "enum_prayers_blocks_card_grid_header_align" DEFAULT 'left',
  	"background" "enum_prayers_blocks_card_grid_background" DEFAULT 'warm',
  	"block_name" varchar
  );
  
  CREATE TABLE "prayers_blocks_card_grid_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_quote_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_prayers_blocks_quote_banner_variant" DEFAULT 'quote',
  	"background_id" integer,
  	"watermark_id" integer,
  	"cta_type" "enum_prayers_blocks_quote_banner_cta_type" DEFAULT 'reference',
  	"cta_new_tab" boolean,
  	"cta_url" varchar,
  	"cta_appearance" "enum_prayers_blocks_quote_banner_cta_appearance" DEFAULT 'default',
  	"block_name" varchar
  );
  
  CREATE TABLE "prayers_blocks_quote_banner_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"author" varchar,
  	"cta_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_accelerators_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"link_type" "enum_prayers_blocks_accelerators_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "prayers_blocks_accelerators_items_locales" (
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_accelerators" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_prayers_blocks_accelerators_header_align" DEFAULT 'left',
  	"numbered" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "prayers_blocks_accelerators_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_posts_feed_filter_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kind" "enum_prayers_blocks_posts_feed_filter_items_kind" DEFAULT 'all'
  );
  
  CREATE TABLE "prayers_blocks_posts_feed_filter_items_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_posts_feed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_prayers_blocks_posts_feed_variant" DEFAULT 'plain',
  	"header_align" "enum_prayers_blocks_posts_feed_header_align" DEFAULT 'left',
  	"collection" "enum_prayers_blocks_posts_feed_collection" DEFAULT 'posts',
  	"source" "enum_prayers_blocks_posts_feed_source" DEFAULT 'auto',
  	"limit" numeric DEFAULT 4,
  	"kind" "enum_prayers_blocks_posts_feed_kind" DEFAULT 'all',
  	"filter_enabled" boolean DEFAULT false,
  	"filter_style" "enum_prayers_blocks_posts_feed_filter_style" DEFAULT 'buttons',
  	"more_link_type" "enum_prayers_blocks_posts_feed_more_link_type" DEFAULT 'reference',
  	"more_link_new_tab" boolean,
  	"more_link_url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "prayers_blocks_posts_feed_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"more_link_label" varchar,
  	"read_label" varchar DEFAULT 'Унших',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "prayers_blocks_gallery_items_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_prayers_blocks_gallery_variant" DEFAULT 'mosaic',
  	"block_name" varchar
  );
  
  CREATE TABLE "prayers_blocks_values_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_values_list_items_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_values_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "prayers_blocks_values_list_locales" (
  	"title" varchar,
  	"verse" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_history_grid_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_history_grid_paragraphs_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_history_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title_tone" "enum_prayers_blocks_history_grid_title_tone" DEFAULT 'primary',
  	"block_name" varchar
  );
  
  CREATE TABLE "prayers_blocks_history_grid_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_stats_row_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_stats_row_items_locales" (
  	"number" varchar,
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_stats_row" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "prayers_blocks_highlighted_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "prayers_blocks_highlighted_text_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_timeline_items_lines" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_timeline_items_lines_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_timeline_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"year" varchar,
  	"active" boolean DEFAULT false
  );
  
  CREATE TABLE "prayers_blocks_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "prayers_blocks_timeline_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_carousel_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "prayers_blocks_carousel_slides_locales" (
  	"alt" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "prayers_blocks_people_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_prayers_blocks_people_grid_variant" DEFAULT 'board',
  	"source" "enum_prayers_blocks_people_grid_source" DEFAULT 'group',
  	"group" "enum_prayers_blocks_people_grid_group" DEFAULT 'board',
  	"hub_id" integer,
  	"limit" numeric DEFAULT 12,
  	"block_name" varchar
  );
  
  CREATE TABLE "prayers_blocks_people_grid_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_creed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "prayers_blocks_creed_locales" (
  	"title" varchar,
  	"intro" varchar,
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_section_intro" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "prayers_blocks_section_intro_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_data_table_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"column" numeric
  );
  
  CREATE TABLE "prayers_blocks_data_table_filters_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_data_table_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_data_table_columns_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_data_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_data_table_rows_cells_locales" (
  	"value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_data_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_data_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_prayers_blocks_data_table_header_align" DEFAULT 'left',
  	"variant" "enum_prayers_blocks_data_table_variant" DEFAULT 'region',
  	"region_column" numeric,
  	"block_name" varchar
  );
  
  CREATE TABLE "prayers_blocks_data_table_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_media_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "prayers_blocks_media_card_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_department_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_prayers_blocks_department_grid_header_align" DEFAULT 'left',
  	"source" "enum_prayers_blocks_department_grid_source" DEFAULT 'auto',
  	"limit" numeric DEFAULT 12,
  	"block_name" varchar
  );
  
  CREATE TABLE "prayers_blocks_department_grid_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_contact_box" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"phone" varchar,
  	"email" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "prayers_blocks_contact_box_locales" (
  	"title" varchar DEFAULT 'Манай үйлчлэлтэй холбогдох:',
  	"person_name" varchar,
  	"person_role" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_contact_form_details_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar
  );
  
  CREATE TABLE "prayers_blocks_contact_form_details_items_locales" (
  	"value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_contact_form_details" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_contact_form_details_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_contact_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "prayers_blocks_contact_form_locales" (
  	"title" varchar,
  	"form_title" varchar,
  	"form_name_label" varchar,
  	"form_email_label" varchar,
  	"form_phone_label" varchar,
  	"form_message_label" varchar,
  	"form_submit_label" varchar,
  	"form_success_message" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_process_steps_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar
  );
  
  CREATE TABLE "prayers_blocks_process_steps_items_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_prayers_blocks_process_steps_header_align" DEFAULT 'left',
  	"block_name" varchar
  );
  
  CREATE TABLE "prayers_blocks_process_steps_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_figure" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"variant" "enum_prayers_blocks_figure_variant" DEFAULT 'map',
  	"block_name" varchar
  );
  
  CREATE TABLE "prayers_blocks_figure_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_region_map_regions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"path_id" varchar
  );
  
  CREATE TABLE "prayers_blocks_region_map_regions_locales" (
  	"name" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_blocks_region_map" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_prayers_blocks_region_map_header_align" DEFAULT 'left',
  	"link_to_table" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "prayers_blocks_region_map_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "prayers_locales" (
  	"title" varchar,
  	"excerpt" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "prayers_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"departments_id" integer,
  	"hubs_id" integer,
  	"membership_tiers_id" integer,
  	"prayers_id" integer,
  	"board_members_id" integer
  );
  
  CREATE TABLE "_prayers_v_blocks_page_banner_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__prayers_v_blocks_page_banner_links_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar,
  	"appearance" "enum__prayers_v_blocks_page_banner_links_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_page_banner_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_page_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__prayers_v_blocks_page_banner_variant" DEFAULT 'hub',
  	"background_id" integer,
  	"watermark_id" integer,
  	"height" numeric,
  	"align" "enum__prayers_v_blocks_page_banner_align" DEFAULT 'left',
  	"overlay" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_page_banner_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"tag" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_section_tabs_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__prayers_v_blocks_section_tabs_items_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_section_tabs_items_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_section_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__prayers_v_blocks_section_tabs_variant" DEFAULT 'dept',
  	"align" "enum__prayers_v_blocks_section_tabs_align" DEFAULT 'left',
  	"plain" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__prayers_v_blocks_rich_text_header_align" DEFAULT 'left',
  	"width" "enum__prayers_v_blocks_rich_text_width" DEFAULT 'narrow',
  	"background" "enum__prayers_v_blocks_rich_text_background" DEFAULT 'none',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_rich_text_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_card_grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"badge" varchar,
  	"link_type" "enum__prayers_v_blocks_card_grid_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_card_grid_items_locales" (
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_card_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__prayers_v_blocks_card_grid_variant" DEFAULT 'info',
  	"header_align" "enum__prayers_v_blocks_card_grid_header_align" DEFAULT 'left',
  	"background" "enum__prayers_v_blocks_card_grid_background" DEFAULT 'warm',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_card_grid_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_quote_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__prayers_v_blocks_quote_banner_variant" DEFAULT 'quote',
  	"background_id" integer,
  	"watermark_id" integer,
  	"cta_type" "enum__prayers_v_blocks_quote_banner_cta_type" DEFAULT 'reference',
  	"cta_new_tab" boolean,
  	"cta_url" varchar,
  	"cta_appearance" "enum__prayers_v_blocks_quote_banner_cta_appearance" DEFAULT 'default',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_quote_banner_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"author" varchar,
  	"cta_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_accelerators_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"link_type" "enum__prayers_v_blocks_accelerators_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_accelerators_items_locales" (
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_accelerators" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__prayers_v_blocks_accelerators_header_align" DEFAULT 'left',
  	"numbered" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_accelerators_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_posts_feed_filter_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kind" "enum__prayers_v_blocks_posts_feed_filter_items_kind" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_posts_feed_filter_items_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_posts_feed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__prayers_v_blocks_posts_feed_variant" DEFAULT 'plain',
  	"header_align" "enum__prayers_v_blocks_posts_feed_header_align" DEFAULT 'left',
  	"collection" "enum__prayers_v_blocks_posts_feed_collection" DEFAULT 'posts',
  	"source" "enum__prayers_v_blocks_posts_feed_source" DEFAULT 'auto',
  	"limit" numeric DEFAULT 4,
  	"kind" "enum__prayers_v_blocks_posts_feed_kind" DEFAULT 'all',
  	"filter_enabled" boolean DEFAULT false,
  	"filter_style" "enum__prayers_v_blocks_posts_feed_filter_style" DEFAULT 'buttons',
  	"more_link_type" "enum__prayers_v_blocks_posts_feed_more_link_type" DEFAULT 'reference',
  	"more_link_new_tab" boolean,
  	"more_link_url" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_posts_feed_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"more_link_label" varchar,
  	"read_label" varchar DEFAULT 'Унших',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_gallery_items_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__prayers_v_blocks_gallery_variant" DEFAULT 'mosaic',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_values_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_values_list_items_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_values_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_values_list_locales" (
  	"title" varchar,
  	"verse" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_history_grid_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_history_grid_paragraphs_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_history_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title_tone" "enum__prayers_v_blocks_history_grid_title_tone" DEFAULT 'primary',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_history_grid_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_stats_row_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_stats_row_items_locales" (
  	"number" varchar,
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_stats_row" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_highlighted_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_highlighted_text_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_timeline_items_lines" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_timeline_items_lines_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_timeline_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"year" varchar,
  	"active" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_timeline_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_carousel_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_carousel_slides_locales" (
  	"alt" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_people_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__prayers_v_blocks_people_grid_variant" DEFAULT 'board',
  	"source" "enum__prayers_v_blocks_people_grid_source" DEFAULT 'group',
  	"group" "enum__prayers_v_blocks_people_grid_group" DEFAULT 'board',
  	"hub_id" integer,
  	"limit" numeric DEFAULT 12,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_people_grid_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_creed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"background_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_creed_locales" (
  	"title" varchar,
  	"intro" varchar,
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_section_intro" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_section_intro_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_data_table_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"column" numeric,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_data_table_filters_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_data_table_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_data_table_columns_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_data_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_data_table_rows_cells_locales" (
  	"value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_data_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_data_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__prayers_v_blocks_data_table_header_align" DEFAULT 'left',
  	"variant" "enum__prayers_v_blocks_data_table_variant" DEFAULT 'region',
  	"region_column" numeric,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_data_table_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_media_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_media_card_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_department_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__prayers_v_blocks_department_grid_header_align" DEFAULT 'left',
  	"source" "enum__prayers_v_blocks_department_grid_source" DEFAULT 'auto',
  	"limit" numeric DEFAULT 12,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_department_grid_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_contact_box" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"phone" varchar,
  	"email" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_contact_box_locales" (
  	"title" varchar DEFAULT 'Манай үйлчлэлтэй холбогдох:',
  	"person_name" varchar,
  	"person_role" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_contact_form_details_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_contact_form_details_items_locales" (
  	"value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_contact_form_details" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_contact_form_details_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_contact_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_contact_form_locales" (
  	"title" varchar,
  	"form_title" varchar,
  	"form_name_label" varchar,
  	"form_email_label" varchar,
  	"form_phone_label" varchar,
  	"form_message_label" varchar,
  	"form_submit_label" varchar,
  	"form_success_message" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_process_steps_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"number" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_process_steps_items_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__prayers_v_blocks_process_steps_header_align" DEFAULT 'left',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_process_steps_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_figure" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"variant" "enum__prayers_v_blocks_figure_variant" DEFAULT 'map',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_figure_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_region_map_regions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"path_id" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_region_map_regions_locales" (
  	"name" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_blocks_region_map" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__prayers_v_blocks_region_map_header_align" DEFAULT 'left',
  	"link_to_table" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_prayers_v_blocks_region_map_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_slug" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_cover_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__prayers_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__prayers_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_prayers_v_locales" (
  	"version_title" varchar,
  	"version_excerpt" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_prayers_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"departments_id" integer,
  	"hubs_id" integer,
  	"membership_tiers_id" integer,
  	"prayers_id" integer,
  	"board_members_id" integer
  );
  
  ALTER TABLE "pages_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DATA TYPE text;
  ALTER TABLE "pages_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DEFAULT 'all'::text;
  DROP TYPE "public"."enum_pages_blocks_posts_feed_filter_items_kind";
  CREATE TYPE "public"."enum_pages_blocks_posts_feed_filter_items_kind" AS ENUM('all', 'news', 'article');
  ALTER TABLE "pages_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DEFAULT 'all'::"public"."enum_pages_blocks_posts_feed_filter_items_kind";
  ALTER TABLE "pages_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DATA TYPE "public"."enum_pages_blocks_posts_feed_filter_items_kind" USING "kind"::"public"."enum_pages_blocks_posts_feed_filter_items_kind";
  ALTER TABLE "pages_blocks_posts_feed" ALTER COLUMN "kind" SET DATA TYPE text;
  ALTER TABLE "pages_blocks_posts_feed" ALTER COLUMN "kind" SET DEFAULT 'all'::text;
  DROP TYPE "public"."enum_pages_blocks_posts_feed_kind";
  CREATE TYPE "public"."enum_pages_blocks_posts_feed_kind" AS ENUM('all', 'news', 'article');
  ALTER TABLE "pages_blocks_posts_feed" ALTER COLUMN "kind" SET DEFAULT 'all'::"public"."enum_pages_blocks_posts_feed_kind";
  ALTER TABLE "pages_blocks_posts_feed" ALTER COLUMN "kind" SET DATA TYPE "public"."enum_pages_blocks_posts_feed_kind" USING "kind"::"public"."enum_pages_blocks_posts_feed_kind";
  ALTER TABLE "_pages_v_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DATA TYPE text;
  ALTER TABLE "_pages_v_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DEFAULT 'all'::text;
  DROP TYPE "public"."enum__pages_v_blocks_posts_feed_filter_items_kind";
  CREATE TYPE "public"."enum__pages_v_blocks_posts_feed_filter_items_kind" AS ENUM('all', 'news', 'article');
  ALTER TABLE "_pages_v_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DEFAULT 'all'::"public"."enum__pages_v_blocks_posts_feed_filter_items_kind";
  ALTER TABLE "_pages_v_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DATA TYPE "public"."enum__pages_v_blocks_posts_feed_filter_items_kind" USING "kind"::"public"."enum__pages_v_blocks_posts_feed_filter_items_kind";
  ALTER TABLE "_pages_v_blocks_posts_feed" ALTER COLUMN "kind" SET DATA TYPE text;
  ALTER TABLE "_pages_v_blocks_posts_feed" ALTER COLUMN "kind" SET DEFAULT 'all'::text;
  DROP TYPE "public"."enum__pages_v_blocks_posts_feed_kind";
  CREATE TYPE "public"."enum__pages_v_blocks_posts_feed_kind" AS ENUM('all', 'news', 'article');
  ALTER TABLE "_pages_v_blocks_posts_feed" ALTER COLUMN "kind" SET DEFAULT 'all'::"public"."enum__pages_v_blocks_posts_feed_kind";
  ALTER TABLE "_pages_v_blocks_posts_feed" ALTER COLUMN "kind" SET DATA TYPE "public"."enum__pages_v_blocks_posts_feed_kind" USING "kind"::"public"."enum__pages_v_blocks_posts_feed_kind";
  ALTER TABLE "posts_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DATA TYPE text;
  ALTER TABLE "posts_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DEFAULT 'all'::text;
  DROP TYPE "public"."enum_posts_blocks_posts_feed_filter_items_kind";
  CREATE TYPE "public"."enum_posts_blocks_posts_feed_filter_items_kind" AS ENUM('all', 'news', 'article');
  ALTER TABLE "posts_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DEFAULT 'all'::"public"."enum_posts_blocks_posts_feed_filter_items_kind";
  ALTER TABLE "posts_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DATA TYPE "public"."enum_posts_blocks_posts_feed_filter_items_kind" USING "kind"::"public"."enum_posts_blocks_posts_feed_filter_items_kind";
  ALTER TABLE "posts_blocks_posts_feed" ALTER COLUMN "kind" SET DATA TYPE text;
  ALTER TABLE "posts_blocks_posts_feed" ALTER COLUMN "kind" SET DEFAULT 'all'::text;
  DROP TYPE "public"."enum_posts_blocks_posts_feed_kind";
  CREATE TYPE "public"."enum_posts_blocks_posts_feed_kind" AS ENUM('all', 'news', 'article');
  ALTER TABLE "posts_blocks_posts_feed" ALTER COLUMN "kind" SET DEFAULT 'all'::"public"."enum_posts_blocks_posts_feed_kind";
  ALTER TABLE "posts_blocks_posts_feed" ALTER COLUMN "kind" SET DATA TYPE "public"."enum_posts_blocks_posts_feed_kind" USING "kind"::"public"."enum_posts_blocks_posts_feed_kind";
  ALTER TABLE "posts" ALTER COLUMN "kind" SET DATA TYPE text;
  ALTER TABLE "posts" ALTER COLUMN "kind" SET DEFAULT 'news'::text;
  DROP TYPE "public"."enum_posts_kind";
  CREATE TYPE "public"."enum_posts_kind" AS ENUM('news', 'article');
  ALTER TABLE "posts" ALTER COLUMN "kind" SET DEFAULT 'news'::"public"."enum_posts_kind";
  ALTER TABLE "posts" ALTER COLUMN "kind" SET DATA TYPE "public"."enum_posts_kind" USING "kind"::"public"."enum_posts_kind";
  ALTER TABLE "_posts_v_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DATA TYPE text;
  ALTER TABLE "_posts_v_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DEFAULT 'all'::text;
  DROP TYPE "public"."enum__posts_v_blocks_posts_feed_filter_items_kind";
  CREATE TYPE "public"."enum__posts_v_blocks_posts_feed_filter_items_kind" AS ENUM('all', 'news', 'article');
  ALTER TABLE "_posts_v_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DEFAULT 'all'::"public"."enum__posts_v_blocks_posts_feed_filter_items_kind";
  ALTER TABLE "_posts_v_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DATA TYPE "public"."enum__posts_v_blocks_posts_feed_filter_items_kind" USING "kind"::"public"."enum__posts_v_blocks_posts_feed_filter_items_kind";
  ALTER TABLE "_posts_v_blocks_posts_feed" ALTER COLUMN "kind" SET DATA TYPE text;
  ALTER TABLE "_posts_v_blocks_posts_feed" ALTER COLUMN "kind" SET DEFAULT 'all'::text;
  DROP TYPE "public"."enum__posts_v_blocks_posts_feed_kind";
  CREATE TYPE "public"."enum__posts_v_blocks_posts_feed_kind" AS ENUM('all', 'news', 'article');
  ALTER TABLE "_posts_v_blocks_posts_feed" ALTER COLUMN "kind" SET DEFAULT 'all'::"public"."enum__posts_v_blocks_posts_feed_kind";
  ALTER TABLE "_posts_v_blocks_posts_feed" ALTER COLUMN "kind" SET DATA TYPE "public"."enum__posts_v_blocks_posts_feed_kind" USING "kind"::"public"."enum__posts_v_blocks_posts_feed_kind";
  ALTER TABLE "_posts_v" ALTER COLUMN "version_kind" SET DATA TYPE text;
  ALTER TABLE "_posts_v" ALTER COLUMN "version_kind" SET DEFAULT 'news'::text;
  DROP TYPE "public"."enum__posts_v_version_kind";
  CREATE TYPE "public"."enum__posts_v_version_kind" AS ENUM('news', 'article');
  ALTER TABLE "_posts_v" ALTER COLUMN "version_kind" SET DEFAULT 'news'::"public"."enum__posts_v_version_kind";
  ALTER TABLE "_posts_v" ALTER COLUMN "version_kind" SET DATA TYPE "public"."enum__posts_v_version_kind" USING "version_kind"::"public"."enum__posts_v_version_kind";
  ALTER TABLE "departments_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DATA TYPE text;
  ALTER TABLE "departments_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DEFAULT 'all'::text;
  DROP TYPE "public"."enum_departments_blocks_posts_feed_filter_items_kind";
  CREATE TYPE "public"."enum_departments_blocks_posts_feed_filter_items_kind" AS ENUM('all', 'news', 'article');
  ALTER TABLE "departments_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DEFAULT 'all'::"public"."enum_departments_blocks_posts_feed_filter_items_kind";
  ALTER TABLE "departments_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DATA TYPE "public"."enum_departments_blocks_posts_feed_filter_items_kind" USING "kind"::"public"."enum_departments_blocks_posts_feed_filter_items_kind";
  ALTER TABLE "departments_blocks_posts_feed" ALTER COLUMN "kind" SET DATA TYPE text;
  ALTER TABLE "departments_blocks_posts_feed" ALTER COLUMN "kind" SET DEFAULT 'all'::text;
  DROP TYPE "public"."enum_departments_blocks_posts_feed_kind";
  CREATE TYPE "public"."enum_departments_blocks_posts_feed_kind" AS ENUM('all', 'news', 'article');
  ALTER TABLE "departments_blocks_posts_feed" ALTER COLUMN "kind" SET DEFAULT 'all'::"public"."enum_departments_blocks_posts_feed_kind";
  ALTER TABLE "departments_blocks_posts_feed" ALTER COLUMN "kind" SET DATA TYPE "public"."enum_departments_blocks_posts_feed_kind" USING "kind"::"public"."enum_departments_blocks_posts_feed_kind";
  ALTER TABLE "_departments_v_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DATA TYPE text;
  ALTER TABLE "_departments_v_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DEFAULT 'all'::text;
  DROP TYPE "public"."enum__departments_v_blocks_posts_feed_filter_items_kind";
  CREATE TYPE "public"."enum__departments_v_blocks_posts_feed_filter_items_kind" AS ENUM('all', 'news', 'article');
  ALTER TABLE "_departments_v_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DEFAULT 'all'::"public"."enum__departments_v_blocks_posts_feed_filter_items_kind";
  ALTER TABLE "_departments_v_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DATA TYPE "public"."enum__departments_v_blocks_posts_feed_filter_items_kind" USING "kind"::"public"."enum__departments_v_blocks_posts_feed_filter_items_kind";
  ALTER TABLE "_departments_v_blocks_posts_feed" ALTER COLUMN "kind" SET DATA TYPE text;
  ALTER TABLE "_departments_v_blocks_posts_feed" ALTER COLUMN "kind" SET DEFAULT 'all'::text;
  DROP TYPE "public"."enum__departments_v_blocks_posts_feed_kind";
  CREATE TYPE "public"."enum__departments_v_blocks_posts_feed_kind" AS ENUM('all', 'news', 'article');
  ALTER TABLE "_departments_v_blocks_posts_feed" ALTER COLUMN "kind" SET DEFAULT 'all'::"public"."enum__departments_v_blocks_posts_feed_kind";
  ALTER TABLE "_departments_v_blocks_posts_feed" ALTER COLUMN "kind" SET DATA TYPE "public"."enum__departments_v_blocks_posts_feed_kind" USING "kind"::"public"."enum__departments_v_blocks_posts_feed_kind";
  ALTER TABLE "hubs_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DATA TYPE text;
  ALTER TABLE "hubs_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DEFAULT 'all'::text;
  DROP TYPE "public"."enum_hubs_blocks_posts_feed_filter_items_kind";
  CREATE TYPE "public"."enum_hubs_blocks_posts_feed_filter_items_kind" AS ENUM('all', 'news', 'article');
  ALTER TABLE "hubs_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DEFAULT 'all'::"public"."enum_hubs_blocks_posts_feed_filter_items_kind";
  ALTER TABLE "hubs_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DATA TYPE "public"."enum_hubs_blocks_posts_feed_filter_items_kind" USING "kind"::"public"."enum_hubs_blocks_posts_feed_filter_items_kind";
  ALTER TABLE "hubs_blocks_posts_feed" ALTER COLUMN "kind" SET DATA TYPE text;
  ALTER TABLE "hubs_blocks_posts_feed" ALTER COLUMN "kind" SET DEFAULT 'all'::text;
  DROP TYPE "public"."enum_hubs_blocks_posts_feed_kind";
  CREATE TYPE "public"."enum_hubs_blocks_posts_feed_kind" AS ENUM('all', 'news', 'article');
  ALTER TABLE "hubs_blocks_posts_feed" ALTER COLUMN "kind" SET DEFAULT 'all'::"public"."enum_hubs_blocks_posts_feed_kind";
  ALTER TABLE "hubs_blocks_posts_feed" ALTER COLUMN "kind" SET DATA TYPE "public"."enum_hubs_blocks_posts_feed_kind" USING "kind"::"public"."enum_hubs_blocks_posts_feed_kind";
  ALTER TABLE "_hubs_v_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DATA TYPE text;
  ALTER TABLE "_hubs_v_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DEFAULT 'all'::text;
  DROP TYPE "public"."enum__hubs_v_blocks_posts_feed_filter_items_kind";
  CREATE TYPE "public"."enum__hubs_v_blocks_posts_feed_filter_items_kind" AS ENUM('all', 'news', 'article');
  ALTER TABLE "_hubs_v_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DEFAULT 'all'::"public"."enum__hubs_v_blocks_posts_feed_filter_items_kind";
  ALTER TABLE "_hubs_v_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DATA TYPE "public"."enum__hubs_v_blocks_posts_feed_filter_items_kind" USING "kind"::"public"."enum__hubs_v_blocks_posts_feed_filter_items_kind";
  ALTER TABLE "_hubs_v_blocks_posts_feed" ALTER COLUMN "kind" SET DATA TYPE text;
  ALTER TABLE "_hubs_v_blocks_posts_feed" ALTER COLUMN "kind" SET DEFAULT 'all'::text;
  DROP TYPE "public"."enum__hubs_v_blocks_posts_feed_kind";
  CREATE TYPE "public"."enum__hubs_v_blocks_posts_feed_kind" AS ENUM('all', 'news', 'article');
  ALTER TABLE "_hubs_v_blocks_posts_feed" ALTER COLUMN "kind" SET DEFAULT 'all'::"public"."enum__hubs_v_blocks_posts_feed_kind";
  ALTER TABLE "_hubs_v_blocks_posts_feed" ALTER COLUMN "kind" SET DATA TYPE "public"."enum__hubs_v_blocks_posts_feed_kind" USING "kind"::"public"."enum__hubs_v_blocks_posts_feed_kind";
  ALTER TABLE "membership_tiers_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DATA TYPE text;
  ALTER TABLE "membership_tiers_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DEFAULT 'all'::text;
  DROP TYPE "public"."enum_membership_tiers_blocks_posts_feed_filter_items_kind";
  CREATE TYPE "public"."enum_membership_tiers_blocks_posts_feed_filter_items_kind" AS ENUM('all', 'news', 'article');
  ALTER TABLE "membership_tiers_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DEFAULT 'all'::"public"."enum_membership_tiers_blocks_posts_feed_filter_items_kind";
  ALTER TABLE "membership_tiers_blocks_posts_feed_filter_items" ALTER COLUMN "kind" SET DATA TYPE "public"."enum_membership_tiers_blocks_posts_feed_filter_items_kind" USING "kind"::"public"."enum_membership_tiers_blocks_posts_feed_filter_items_kind";
  ALTER TABLE "membership_tiers_blocks_posts_feed" ALTER COLUMN "kind" SET DATA TYPE text;
  ALTER TABLE "membership_tiers_blocks_posts_feed" ALTER COLUMN "kind" SET DEFAULT 'all'::text;
  DROP TYPE "public"."enum_membership_tiers_blocks_posts_feed_kind";
  CREATE TYPE "public"."enum_membership_tiers_blocks_posts_feed_kind" AS ENUM('all', 'news', 'article');
  ALTER TABLE "membership_tiers_blocks_posts_feed" ALTER COLUMN "kind" SET DEFAULT 'all'::"public"."enum_membership_tiers_blocks_posts_feed_kind";
  ALTER TABLE "membership_tiers_blocks_posts_feed" ALTER COLUMN "kind" SET DATA TYPE "public"."enum_membership_tiers_blocks_posts_feed_kind" USING "kind"::"public"."enum_membership_tiers_blocks_posts_feed_kind";
  ALTER TABLE "pages_blocks_posts_feed" ADD COLUMN "collection" "enum_pages_blocks_posts_feed_collection" DEFAULT 'posts';
  ALTER TABLE "pages_rels" ADD COLUMN "prayers_id" integer;
  ALTER TABLE "_pages_v_blocks_posts_feed" ADD COLUMN "collection" "enum__pages_v_blocks_posts_feed_collection" DEFAULT 'posts';
  ALTER TABLE "_pages_v_rels" ADD COLUMN "prayers_id" integer;
  ALTER TABLE "posts_blocks_posts_feed" ADD COLUMN "collection" "enum_posts_blocks_posts_feed_collection" DEFAULT 'posts';
  ALTER TABLE "posts_rels" ADD COLUMN "prayers_id" integer;
  ALTER TABLE "_posts_v_blocks_posts_feed" ADD COLUMN "collection" "enum__posts_v_blocks_posts_feed_collection" DEFAULT 'posts';
  ALTER TABLE "_posts_v_rels" ADD COLUMN "prayers_id" integer;
  ALTER TABLE "prayers" ADD COLUMN "slug" varchar;
  ALTER TABLE "prayers" ADD COLUMN "published_at" timestamp(3) with time zone;
  ALTER TABLE "prayers" ADD COLUMN "cover_id" integer;
  ALTER TABLE "prayers" ADD COLUMN "_status" "enum_prayers_status" DEFAULT 'draft';
  ALTER TABLE "departments_blocks_posts_feed" ADD COLUMN "collection" "enum_departments_blocks_posts_feed_collection" DEFAULT 'posts';
  ALTER TABLE "departments_rels" ADD COLUMN "prayers_id" integer;
  ALTER TABLE "_departments_v_blocks_posts_feed" ADD COLUMN "collection" "enum__departments_v_blocks_posts_feed_collection" DEFAULT 'posts';
  ALTER TABLE "_departments_v_rels" ADD COLUMN "prayers_id" integer;
  ALTER TABLE "hubs_blocks_posts_feed" ADD COLUMN "collection" "enum_hubs_blocks_posts_feed_collection" DEFAULT 'posts';
  ALTER TABLE "hubs_rels" ADD COLUMN "prayers_id" integer;
  ALTER TABLE "_hubs_v_blocks_posts_feed" ADD COLUMN "collection" "enum__hubs_v_blocks_posts_feed_collection" DEFAULT 'posts';
  ALTER TABLE "_hubs_v_rels" ADD COLUMN "prayers_id" integer;
  ALTER TABLE "membership_tiers_blocks_posts_feed" ADD COLUMN "collection" "enum_membership_tiers_blocks_posts_feed_collection" DEFAULT 'posts' NOT NULL;
  ALTER TABLE "membership_tiers_rels" ADD COLUMN "prayers_id" integer;
  ALTER TABLE "prayers_blocks_page_banner_links" ADD CONSTRAINT "prayers_blocks_page_banner_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_page_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_page_banner_links_locales" ADD CONSTRAINT "prayers_blocks_page_banner_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_page_banner_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_page_banner" ADD CONSTRAINT "prayers_blocks_page_banner_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "prayers_blocks_page_banner" ADD CONSTRAINT "prayers_blocks_page_banner_watermark_id_media_id_fk" FOREIGN KEY ("watermark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "prayers_blocks_page_banner" ADD CONSTRAINT "prayers_blocks_page_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_page_banner_locales" ADD CONSTRAINT "prayers_blocks_page_banner_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_page_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_section_tabs_items" ADD CONSTRAINT "prayers_blocks_section_tabs_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_section_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_section_tabs_items_locales" ADD CONSTRAINT "prayers_blocks_section_tabs_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_section_tabs_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_section_tabs" ADD CONSTRAINT "prayers_blocks_section_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_rich_text" ADD CONSTRAINT "prayers_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_rich_text_locales" ADD CONSTRAINT "prayers_blocks_rich_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_card_grid_items" ADD CONSTRAINT "prayers_blocks_card_grid_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "prayers_blocks_card_grid_items" ADD CONSTRAINT "prayers_blocks_card_grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_card_grid_items_locales" ADD CONSTRAINT "prayers_blocks_card_grid_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_card_grid_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_card_grid" ADD CONSTRAINT "prayers_blocks_card_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_card_grid_locales" ADD CONSTRAINT "prayers_blocks_card_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_quote_banner" ADD CONSTRAINT "prayers_blocks_quote_banner_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "prayers_blocks_quote_banner" ADD CONSTRAINT "prayers_blocks_quote_banner_watermark_id_media_id_fk" FOREIGN KEY ("watermark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "prayers_blocks_quote_banner" ADD CONSTRAINT "prayers_blocks_quote_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_quote_banner_locales" ADD CONSTRAINT "prayers_blocks_quote_banner_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_quote_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_accelerators_items" ADD CONSTRAINT "prayers_blocks_accelerators_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "prayers_blocks_accelerators_items" ADD CONSTRAINT "prayers_blocks_accelerators_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_accelerators"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_accelerators_items_locales" ADD CONSTRAINT "prayers_blocks_accelerators_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_accelerators_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_accelerators" ADD CONSTRAINT "prayers_blocks_accelerators_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_accelerators_locales" ADD CONSTRAINT "prayers_blocks_accelerators_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_accelerators"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_posts_feed_filter_items" ADD CONSTRAINT "prayers_blocks_posts_feed_filter_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_posts_feed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_posts_feed_filter_items_locales" ADD CONSTRAINT "prayers_blocks_posts_feed_filter_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_posts_feed_filter_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_posts_feed" ADD CONSTRAINT "prayers_blocks_posts_feed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_posts_feed_locales" ADD CONSTRAINT "prayers_blocks_posts_feed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_posts_feed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_gallery_items" ADD CONSTRAINT "prayers_blocks_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "prayers_blocks_gallery_items" ADD CONSTRAINT "prayers_blocks_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_gallery_items_locales" ADD CONSTRAINT "prayers_blocks_gallery_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_gallery_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_gallery" ADD CONSTRAINT "prayers_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_values_list_items" ADD CONSTRAINT "prayers_blocks_values_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_values_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_values_list_items_locales" ADD CONSTRAINT "prayers_blocks_values_list_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_values_list_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_values_list" ADD CONSTRAINT "prayers_blocks_values_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_values_list_locales" ADD CONSTRAINT "prayers_blocks_values_list_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_values_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_history_grid_paragraphs" ADD CONSTRAINT "prayers_blocks_history_grid_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_history_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_history_grid_paragraphs_locales" ADD CONSTRAINT "prayers_blocks_history_grid_paragraphs_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_history_grid_paragraphs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_history_grid" ADD CONSTRAINT "prayers_blocks_history_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_history_grid_locales" ADD CONSTRAINT "prayers_blocks_history_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_history_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_stats_row_items" ADD CONSTRAINT "prayers_blocks_stats_row_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_stats_row"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_stats_row_items_locales" ADD CONSTRAINT "prayers_blocks_stats_row_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_stats_row_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_stats_row" ADD CONSTRAINT "prayers_blocks_stats_row_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_highlighted_text" ADD CONSTRAINT "prayers_blocks_highlighted_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_highlighted_text_locales" ADD CONSTRAINT "prayers_blocks_highlighted_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_highlighted_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_timeline_items_lines" ADD CONSTRAINT "prayers_blocks_timeline_items_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_timeline_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_timeline_items_lines_locales" ADD CONSTRAINT "prayers_blocks_timeline_items_lines_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_timeline_items_lines"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_timeline_items" ADD CONSTRAINT "prayers_blocks_timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_timeline" ADD CONSTRAINT "prayers_blocks_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_timeline_locales" ADD CONSTRAINT "prayers_blocks_timeline_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_carousel_slides" ADD CONSTRAINT "prayers_blocks_carousel_slides_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "prayers_blocks_carousel_slides" ADD CONSTRAINT "prayers_blocks_carousel_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_carousel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_carousel_slides_locales" ADD CONSTRAINT "prayers_blocks_carousel_slides_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_carousel_slides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_carousel" ADD CONSTRAINT "prayers_blocks_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_people_grid" ADD CONSTRAINT "prayers_blocks_people_grid_hub_id_hubs_id_fk" FOREIGN KEY ("hub_id") REFERENCES "public"."hubs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "prayers_blocks_people_grid" ADD CONSTRAINT "prayers_blocks_people_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_people_grid_locales" ADD CONSTRAINT "prayers_blocks_people_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_people_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_creed" ADD CONSTRAINT "prayers_blocks_creed_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "prayers_blocks_creed" ADD CONSTRAINT "prayers_blocks_creed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_creed_locales" ADD CONSTRAINT "prayers_blocks_creed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_creed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_section_intro" ADD CONSTRAINT "prayers_blocks_section_intro_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_section_intro_locales" ADD CONSTRAINT "prayers_blocks_section_intro_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_section_intro"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_data_table_filters" ADD CONSTRAINT "prayers_blocks_data_table_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_data_table_filters_locales" ADD CONSTRAINT "prayers_blocks_data_table_filters_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_data_table_filters"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_data_table_columns" ADD CONSTRAINT "prayers_blocks_data_table_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_data_table_columns_locales" ADD CONSTRAINT "prayers_blocks_data_table_columns_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_data_table_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_data_table_rows_cells" ADD CONSTRAINT "prayers_blocks_data_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_data_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_data_table_rows_cells_locales" ADD CONSTRAINT "prayers_blocks_data_table_rows_cells_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_data_table_rows_cells"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_data_table_rows" ADD CONSTRAINT "prayers_blocks_data_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_data_table" ADD CONSTRAINT "prayers_blocks_data_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_data_table_locales" ADD CONSTRAINT "prayers_blocks_data_table_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_media_card" ADD CONSTRAINT "prayers_blocks_media_card_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "prayers_blocks_media_card" ADD CONSTRAINT "prayers_blocks_media_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_media_card_locales" ADD CONSTRAINT "prayers_blocks_media_card_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_media_card"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_department_grid" ADD CONSTRAINT "prayers_blocks_department_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_department_grid_locales" ADD CONSTRAINT "prayers_blocks_department_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_department_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_contact_box" ADD CONSTRAINT "prayers_blocks_contact_box_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_contact_box_locales" ADD CONSTRAINT "prayers_blocks_contact_box_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_contact_box"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_contact_form_details_items" ADD CONSTRAINT "prayers_blocks_contact_form_details_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_contact_form_details"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_contact_form_details_items_locales" ADD CONSTRAINT "prayers_blocks_contact_form_details_items_locales_parent__fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_contact_form_details_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_contact_form_details" ADD CONSTRAINT "prayers_blocks_contact_form_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_contact_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_contact_form_details_locales" ADD CONSTRAINT "prayers_blocks_contact_form_details_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_contact_form_details"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_contact_form" ADD CONSTRAINT "prayers_blocks_contact_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_contact_form_locales" ADD CONSTRAINT "prayers_blocks_contact_form_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_contact_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_process_steps_items" ADD CONSTRAINT "prayers_blocks_process_steps_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_process_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_process_steps_items_locales" ADD CONSTRAINT "prayers_blocks_process_steps_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_process_steps_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_process_steps" ADD CONSTRAINT "prayers_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_process_steps_locales" ADD CONSTRAINT "prayers_blocks_process_steps_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_process_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_figure" ADD CONSTRAINT "prayers_blocks_figure_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "prayers_blocks_figure" ADD CONSTRAINT "prayers_blocks_figure_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_figure_locales" ADD CONSTRAINT "prayers_blocks_figure_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_figure"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_region_map_regions" ADD CONSTRAINT "prayers_blocks_region_map_regions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_region_map"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_region_map_regions_locales" ADD CONSTRAINT "prayers_blocks_region_map_regions_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_region_map_regions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_region_map" ADD CONSTRAINT "prayers_blocks_region_map_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_blocks_region_map_locales" ADD CONSTRAINT "prayers_blocks_region_map_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers_blocks_region_map"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_locales" ADD CONSTRAINT "prayers_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_rels" ADD CONSTRAINT "prayers_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_rels" ADD CONSTRAINT "prayers_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_rels" ADD CONSTRAINT "prayers_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_rels" ADD CONSTRAINT "prayers_rels_departments_fk" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_rels" ADD CONSTRAINT "prayers_rels_hubs_fk" FOREIGN KEY ("hubs_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_rels" ADD CONSTRAINT "prayers_rels_membership_tiers_fk" FOREIGN KEY ("membership_tiers_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_rels" ADD CONSTRAINT "prayers_rels_prayers_fk" FOREIGN KEY ("prayers_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers_rels" ADD CONSTRAINT "prayers_rels_board_members_fk" FOREIGN KEY ("board_members_id") REFERENCES "public"."board_members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_page_banner_links" ADD CONSTRAINT "_prayers_v_blocks_page_banner_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_page_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_page_banner_links_locales" ADD CONSTRAINT "_prayers_v_blocks_page_banner_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_page_banner_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_page_banner" ADD CONSTRAINT "_prayers_v_blocks_page_banner_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_page_banner" ADD CONSTRAINT "_prayers_v_blocks_page_banner_watermark_id_media_id_fk" FOREIGN KEY ("watermark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_page_banner" ADD CONSTRAINT "_prayers_v_blocks_page_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_page_banner_locales" ADD CONSTRAINT "_prayers_v_blocks_page_banner_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_page_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_section_tabs_items" ADD CONSTRAINT "_prayers_v_blocks_section_tabs_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_section_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_section_tabs_items_locales" ADD CONSTRAINT "_prayers_v_blocks_section_tabs_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_section_tabs_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_section_tabs" ADD CONSTRAINT "_prayers_v_blocks_section_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_rich_text" ADD CONSTRAINT "_prayers_v_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_rich_text_locales" ADD CONSTRAINT "_prayers_v_blocks_rich_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_card_grid_items" ADD CONSTRAINT "_prayers_v_blocks_card_grid_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_card_grid_items" ADD CONSTRAINT "_prayers_v_blocks_card_grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_card_grid_items_locales" ADD CONSTRAINT "_prayers_v_blocks_card_grid_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_card_grid_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_card_grid" ADD CONSTRAINT "_prayers_v_blocks_card_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_card_grid_locales" ADD CONSTRAINT "_prayers_v_blocks_card_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_quote_banner" ADD CONSTRAINT "_prayers_v_blocks_quote_banner_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_quote_banner" ADD CONSTRAINT "_prayers_v_blocks_quote_banner_watermark_id_media_id_fk" FOREIGN KEY ("watermark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_quote_banner" ADD CONSTRAINT "_prayers_v_blocks_quote_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_quote_banner_locales" ADD CONSTRAINT "_prayers_v_blocks_quote_banner_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_quote_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_accelerators_items" ADD CONSTRAINT "_prayers_v_blocks_accelerators_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_accelerators_items" ADD CONSTRAINT "_prayers_v_blocks_accelerators_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_accelerators"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_accelerators_items_locales" ADD CONSTRAINT "_prayers_v_blocks_accelerators_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_accelerators_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_accelerators" ADD CONSTRAINT "_prayers_v_blocks_accelerators_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_accelerators_locales" ADD CONSTRAINT "_prayers_v_blocks_accelerators_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_accelerators"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_posts_feed_filter_items" ADD CONSTRAINT "_prayers_v_blocks_posts_feed_filter_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_posts_feed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_posts_feed_filter_items_locales" ADD CONSTRAINT "_prayers_v_blocks_posts_feed_filter_items_locales_parent__fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_posts_feed_filter_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_posts_feed" ADD CONSTRAINT "_prayers_v_blocks_posts_feed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_posts_feed_locales" ADD CONSTRAINT "_prayers_v_blocks_posts_feed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_posts_feed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_gallery_items" ADD CONSTRAINT "_prayers_v_blocks_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_gallery_items" ADD CONSTRAINT "_prayers_v_blocks_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_gallery_items_locales" ADD CONSTRAINT "_prayers_v_blocks_gallery_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_gallery_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_gallery" ADD CONSTRAINT "_prayers_v_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_values_list_items" ADD CONSTRAINT "_prayers_v_blocks_values_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_values_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_values_list_items_locales" ADD CONSTRAINT "_prayers_v_blocks_values_list_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_values_list_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_values_list" ADD CONSTRAINT "_prayers_v_blocks_values_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_values_list_locales" ADD CONSTRAINT "_prayers_v_blocks_values_list_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_values_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_history_grid_paragraphs" ADD CONSTRAINT "_prayers_v_blocks_history_grid_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_history_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_history_grid_paragraphs_locales" ADD CONSTRAINT "_prayers_v_blocks_history_grid_paragraphs_locales_parent__fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_history_grid_paragraphs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_history_grid" ADD CONSTRAINT "_prayers_v_blocks_history_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_history_grid_locales" ADD CONSTRAINT "_prayers_v_blocks_history_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_history_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_stats_row_items" ADD CONSTRAINT "_prayers_v_blocks_stats_row_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_stats_row"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_stats_row_items_locales" ADD CONSTRAINT "_prayers_v_blocks_stats_row_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_stats_row_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_stats_row" ADD CONSTRAINT "_prayers_v_blocks_stats_row_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_highlighted_text" ADD CONSTRAINT "_prayers_v_blocks_highlighted_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_highlighted_text_locales" ADD CONSTRAINT "_prayers_v_blocks_highlighted_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_highlighted_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_timeline_items_lines" ADD CONSTRAINT "_prayers_v_blocks_timeline_items_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_timeline_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_timeline_items_lines_locales" ADD CONSTRAINT "_prayers_v_blocks_timeline_items_lines_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_timeline_items_lines"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_timeline_items" ADD CONSTRAINT "_prayers_v_blocks_timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_timeline" ADD CONSTRAINT "_prayers_v_blocks_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_timeline_locales" ADD CONSTRAINT "_prayers_v_blocks_timeline_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_carousel_slides" ADD CONSTRAINT "_prayers_v_blocks_carousel_slides_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_carousel_slides" ADD CONSTRAINT "_prayers_v_blocks_carousel_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_carousel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_carousel_slides_locales" ADD CONSTRAINT "_prayers_v_blocks_carousel_slides_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_carousel_slides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_carousel" ADD CONSTRAINT "_prayers_v_blocks_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_people_grid" ADD CONSTRAINT "_prayers_v_blocks_people_grid_hub_id_hubs_id_fk" FOREIGN KEY ("hub_id") REFERENCES "public"."hubs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_people_grid" ADD CONSTRAINT "_prayers_v_blocks_people_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_people_grid_locales" ADD CONSTRAINT "_prayers_v_blocks_people_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_people_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_creed" ADD CONSTRAINT "_prayers_v_blocks_creed_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_creed" ADD CONSTRAINT "_prayers_v_blocks_creed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_creed_locales" ADD CONSTRAINT "_prayers_v_blocks_creed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_creed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_section_intro" ADD CONSTRAINT "_prayers_v_blocks_section_intro_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_section_intro_locales" ADD CONSTRAINT "_prayers_v_blocks_section_intro_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_section_intro"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_data_table_filters" ADD CONSTRAINT "_prayers_v_blocks_data_table_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_data_table_filters_locales" ADD CONSTRAINT "_prayers_v_blocks_data_table_filters_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_data_table_filters"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_data_table_columns" ADD CONSTRAINT "_prayers_v_blocks_data_table_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_data_table_columns_locales" ADD CONSTRAINT "_prayers_v_blocks_data_table_columns_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_data_table_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_data_table_rows_cells" ADD CONSTRAINT "_prayers_v_blocks_data_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_data_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_data_table_rows_cells_locales" ADD CONSTRAINT "_prayers_v_blocks_data_table_rows_cells_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_data_table_rows_cells"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_data_table_rows" ADD CONSTRAINT "_prayers_v_blocks_data_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_data_table" ADD CONSTRAINT "_prayers_v_blocks_data_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_data_table_locales" ADD CONSTRAINT "_prayers_v_blocks_data_table_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_media_card" ADD CONSTRAINT "_prayers_v_blocks_media_card_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_media_card" ADD CONSTRAINT "_prayers_v_blocks_media_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_media_card_locales" ADD CONSTRAINT "_prayers_v_blocks_media_card_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_media_card"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_department_grid" ADD CONSTRAINT "_prayers_v_blocks_department_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_department_grid_locales" ADD CONSTRAINT "_prayers_v_blocks_department_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_department_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_contact_box" ADD CONSTRAINT "_prayers_v_blocks_contact_box_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_contact_box_locales" ADD CONSTRAINT "_prayers_v_blocks_contact_box_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_contact_box"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_contact_form_details_items" ADD CONSTRAINT "_prayers_v_blocks_contact_form_details_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_contact_form_details"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_contact_form_details_items_locales" ADD CONSTRAINT "_prayers_v_blocks_contact_form_details_items_locales_pare_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_contact_form_details_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_contact_form_details" ADD CONSTRAINT "_prayers_v_blocks_contact_form_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_contact_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_contact_form_details_locales" ADD CONSTRAINT "_prayers_v_blocks_contact_form_details_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_contact_form_details"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_contact_form" ADD CONSTRAINT "_prayers_v_blocks_contact_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_contact_form_locales" ADD CONSTRAINT "_prayers_v_blocks_contact_form_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_contact_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_process_steps_items" ADD CONSTRAINT "_prayers_v_blocks_process_steps_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_process_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_process_steps_items_locales" ADD CONSTRAINT "_prayers_v_blocks_process_steps_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_process_steps_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_process_steps" ADD CONSTRAINT "_prayers_v_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_process_steps_locales" ADD CONSTRAINT "_prayers_v_blocks_process_steps_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_process_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_figure" ADD CONSTRAINT "_prayers_v_blocks_figure_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_figure" ADD CONSTRAINT "_prayers_v_blocks_figure_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_figure_locales" ADD CONSTRAINT "_prayers_v_blocks_figure_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_figure"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_region_map_regions" ADD CONSTRAINT "_prayers_v_blocks_region_map_regions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_region_map"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_region_map_regions_locales" ADD CONSTRAINT "_prayers_v_blocks_region_map_regions_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_region_map_regions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_region_map" ADD CONSTRAINT "_prayers_v_blocks_region_map_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_blocks_region_map_locales" ADD CONSTRAINT "_prayers_v_blocks_region_map_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v_blocks_region_map"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v" ADD CONSTRAINT "_prayers_v_parent_id_prayers_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."prayers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_prayers_v" ADD CONSTRAINT "_prayers_v_version_cover_id_media_id_fk" FOREIGN KEY ("version_cover_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_prayers_v_locales" ADD CONSTRAINT "_prayers_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_prayers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_rels" ADD CONSTRAINT "_prayers_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_prayers_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_rels" ADD CONSTRAINT "_prayers_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_rels" ADD CONSTRAINT "_prayers_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_rels" ADD CONSTRAINT "_prayers_v_rels_departments_fk" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_rels" ADD CONSTRAINT "_prayers_v_rels_hubs_fk" FOREIGN KEY ("hubs_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_rels" ADD CONSTRAINT "_prayers_v_rels_membership_tiers_fk" FOREIGN KEY ("membership_tiers_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_rels" ADD CONSTRAINT "_prayers_v_rels_prayers_fk" FOREIGN KEY ("prayers_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prayers_v_rels" ADD CONSTRAINT "_prayers_v_rels_board_members_fk" FOREIGN KEY ("board_members_id") REFERENCES "public"."board_members"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "prayers_blocks_page_banner_links_order_idx" ON "prayers_blocks_page_banner_links" USING btree ("_order");
  CREATE INDEX "prayers_blocks_page_banner_links_parent_id_idx" ON "prayers_blocks_page_banner_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "prayers_blocks_page_banner_links_locales_locale_parent_id_un" ON "prayers_blocks_page_banner_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_page_banner_order_idx" ON "prayers_blocks_page_banner" USING btree ("_order");
  CREATE INDEX "prayers_blocks_page_banner_parent_id_idx" ON "prayers_blocks_page_banner" USING btree ("_parent_id");
  CREATE INDEX "prayers_blocks_page_banner_path_idx" ON "prayers_blocks_page_banner" USING btree ("_path");
  CREATE INDEX "prayers_blocks_page_banner_background_idx" ON "prayers_blocks_page_banner" USING btree ("background_id");
  CREATE INDEX "prayers_blocks_page_banner_watermark_idx" ON "prayers_blocks_page_banner" USING btree ("watermark_id");
  CREATE UNIQUE INDEX "prayers_blocks_page_banner_locales_locale_parent_id_unique" ON "prayers_blocks_page_banner_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_section_tabs_items_order_idx" ON "prayers_blocks_section_tabs_items" USING btree ("_order");
  CREATE INDEX "prayers_blocks_section_tabs_items_parent_id_idx" ON "prayers_blocks_section_tabs_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "prayers_blocks_section_tabs_items_locales_locale_parent_id_u" ON "prayers_blocks_section_tabs_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_section_tabs_order_idx" ON "prayers_blocks_section_tabs" USING btree ("_order");
  CREATE INDEX "prayers_blocks_section_tabs_parent_id_idx" ON "prayers_blocks_section_tabs" USING btree ("_parent_id");
  CREATE INDEX "prayers_blocks_section_tabs_path_idx" ON "prayers_blocks_section_tabs" USING btree ("_path");
  CREATE INDEX "prayers_blocks_rich_text_order_idx" ON "prayers_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "prayers_blocks_rich_text_parent_id_idx" ON "prayers_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "prayers_blocks_rich_text_path_idx" ON "prayers_blocks_rich_text" USING btree ("_path");
  CREATE UNIQUE INDEX "prayers_blocks_rich_text_locales_locale_parent_id_unique" ON "prayers_blocks_rich_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_card_grid_items_order_idx" ON "prayers_blocks_card_grid_items" USING btree ("_order");
  CREATE INDEX "prayers_blocks_card_grid_items_parent_id_idx" ON "prayers_blocks_card_grid_items" USING btree ("_parent_id");
  CREATE INDEX "prayers_blocks_card_grid_items_icon_idx" ON "prayers_blocks_card_grid_items" USING btree ("icon_id");
  CREATE UNIQUE INDEX "prayers_blocks_card_grid_items_locales_locale_parent_id_uniq" ON "prayers_blocks_card_grid_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_card_grid_order_idx" ON "prayers_blocks_card_grid" USING btree ("_order");
  CREATE INDEX "prayers_blocks_card_grid_parent_id_idx" ON "prayers_blocks_card_grid" USING btree ("_parent_id");
  CREATE INDEX "prayers_blocks_card_grid_path_idx" ON "prayers_blocks_card_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "prayers_blocks_card_grid_locales_locale_parent_id_unique" ON "prayers_blocks_card_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_quote_banner_order_idx" ON "prayers_blocks_quote_banner" USING btree ("_order");
  CREATE INDEX "prayers_blocks_quote_banner_parent_id_idx" ON "prayers_blocks_quote_banner" USING btree ("_parent_id");
  CREATE INDEX "prayers_blocks_quote_banner_path_idx" ON "prayers_blocks_quote_banner" USING btree ("_path");
  CREATE INDEX "prayers_blocks_quote_banner_background_idx" ON "prayers_blocks_quote_banner" USING btree ("background_id");
  CREATE INDEX "prayers_blocks_quote_banner_watermark_idx" ON "prayers_blocks_quote_banner" USING btree ("watermark_id");
  CREATE UNIQUE INDEX "prayers_blocks_quote_banner_locales_locale_parent_id_unique" ON "prayers_blocks_quote_banner_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_accelerators_items_order_idx" ON "prayers_blocks_accelerators_items" USING btree ("_order");
  CREATE INDEX "prayers_blocks_accelerators_items_parent_id_idx" ON "prayers_blocks_accelerators_items" USING btree ("_parent_id");
  CREATE INDEX "prayers_blocks_accelerators_items_image_idx" ON "prayers_blocks_accelerators_items" USING btree ("image_id");
  CREATE UNIQUE INDEX "prayers_blocks_accelerators_items_locales_locale_parent_id_u" ON "prayers_blocks_accelerators_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_accelerators_order_idx" ON "prayers_blocks_accelerators" USING btree ("_order");
  CREATE INDEX "prayers_blocks_accelerators_parent_id_idx" ON "prayers_blocks_accelerators" USING btree ("_parent_id");
  CREATE INDEX "prayers_blocks_accelerators_path_idx" ON "prayers_blocks_accelerators" USING btree ("_path");
  CREATE UNIQUE INDEX "prayers_blocks_accelerators_locales_locale_parent_id_unique" ON "prayers_blocks_accelerators_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_posts_feed_filter_items_order_idx" ON "prayers_blocks_posts_feed_filter_items" USING btree ("_order");
  CREATE INDEX "prayers_blocks_posts_feed_filter_items_parent_id_idx" ON "prayers_blocks_posts_feed_filter_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "prayers_blocks_posts_feed_filter_items_locales_locale_parent" ON "prayers_blocks_posts_feed_filter_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_posts_feed_order_idx" ON "prayers_blocks_posts_feed" USING btree ("_order");
  CREATE INDEX "prayers_blocks_posts_feed_parent_id_idx" ON "prayers_blocks_posts_feed" USING btree ("_parent_id");
  CREATE INDEX "prayers_blocks_posts_feed_path_idx" ON "prayers_blocks_posts_feed" USING btree ("_path");
  CREATE UNIQUE INDEX "prayers_blocks_posts_feed_locales_locale_parent_id_unique" ON "prayers_blocks_posts_feed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_gallery_items_order_idx" ON "prayers_blocks_gallery_items" USING btree ("_order");
  CREATE INDEX "prayers_blocks_gallery_items_parent_id_idx" ON "prayers_blocks_gallery_items" USING btree ("_parent_id");
  CREATE INDEX "prayers_blocks_gallery_items_image_idx" ON "prayers_blocks_gallery_items" USING btree ("image_id");
  CREATE UNIQUE INDEX "prayers_blocks_gallery_items_locales_locale_parent_id_unique" ON "prayers_blocks_gallery_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_gallery_order_idx" ON "prayers_blocks_gallery" USING btree ("_order");
  CREATE INDEX "prayers_blocks_gallery_parent_id_idx" ON "prayers_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "prayers_blocks_gallery_path_idx" ON "prayers_blocks_gallery" USING btree ("_path");
  CREATE INDEX "prayers_blocks_values_list_items_order_idx" ON "prayers_blocks_values_list_items" USING btree ("_order");
  CREATE INDEX "prayers_blocks_values_list_items_parent_id_idx" ON "prayers_blocks_values_list_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "prayers_blocks_values_list_items_locales_locale_parent_id_un" ON "prayers_blocks_values_list_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_values_list_order_idx" ON "prayers_blocks_values_list" USING btree ("_order");
  CREATE INDEX "prayers_blocks_values_list_parent_id_idx" ON "prayers_blocks_values_list" USING btree ("_parent_id");
  CREATE INDEX "prayers_blocks_values_list_path_idx" ON "prayers_blocks_values_list" USING btree ("_path");
  CREATE UNIQUE INDEX "prayers_blocks_values_list_locales_locale_parent_id_unique" ON "prayers_blocks_values_list_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_history_grid_paragraphs_order_idx" ON "prayers_blocks_history_grid_paragraphs" USING btree ("_order");
  CREATE INDEX "prayers_blocks_history_grid_paragraphs_parent_id_idx" ON "prayers_blocks_history_grid_paragraphs" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "prayers_blocks_history_grid_paragraphs_locales_locale_parent" ON "prayers_blocks_history_grid_paragraphs_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_history_grid_order_idx" ON "prayers_blocks_history_grid" USING btree ("_order");
  CREATE INDEX "prayers_blocks_history_grid_parent_id_idx" ON "prayers_blocks_history_grid" USING btree ("_parent_id");
  CREATE INDEX "prayers_blocks_history_grid_path_idx" ON "prayers_blocks_history_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "prayers_blocks_history_grid_locales_locale_parent_id_unique" ON "prayers_blocks_history_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_stats_row_items_order_idx" ON "prayers_blocks_stats_row_items" USING btree ("_order");
  CREATE INDEX "prayers_blocks_stats_row_items_parent_id_idx" ON "prayers_blocks_stats_row_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "prayers_blocks_stats_row_items_locales_locale_parent_id_uniq" ON "prayers_blocks_stats_row_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_stats_row_order_idx" ON "prayers_blocks_stats_row" USING btree ("_order");
  CREATE INDEX "prayers_blocks_stats_row_parent_id_idx" ON "prayers_blocks_stats_row" USING btree ("_parent_id");
  CREATE INDEX "prayers_blocks_stats_row_path_idx" ON "prayers_blocks_stats_row" USING btree ("_path");
  CREATE INDEX "prayers_blocks_highlighted_text_order_idx" ON "prayers_blocks_highlighted_text" USING btree ("_order");
  CREATE INDEX "prayers_blocks_highlighted_text_parent_id_idx" ON "prayers_blocks_highlighted_text" USING btree ("_parent_id");
  CREATE INDEX "prayers_blocks_highlighted_text_path_idx" ON "prayers_blocks_highlighted_text" USING btree ("_path");
  CREATE UNIQUE INDEX "prayers_blocks_highlighted_text_locales_locale_parent_id_uni" ON "prayers_blocks_highlighted_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_timeline_items_lines_order_idx" ON "prayers_blocks_timeline_items_lines" USING btree ("_order");
  CREATE INDEX "prayers_blocks_timeline_items_lines_parent_id_idx" ON "prayers_blocks_timeline_items_lines" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "prayers_blocks_timeline_items_lines_locales_locale_parent_id" ON "prayers_blocks_timeline_items_lines_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_timeline_items_order_idx" ON "prayers_blocks_timeline_items" USING btree ("_order");
  CREATE INDEX "prayers_blocks_timeline_items_parent_id_idx" ON "prayers_blocks_timeline_items" USING btree ("_parent_id");
  CREATE INDEX "prayers_blocks_timeline_order_idx" ON "prayers_blocks_timeline" USING btree ("_order");
  CREATE INDEX "prayers_blocks_timeline_parent_id_idx" ON "prayers_blocks_timeline" USING btree ("_parent_id");
  CREATE INDEX "prayers_blocks_timeline_path_idx" ON "prayers_blocks_timeline" USING btree ("_path");
  CREATE UNIQUE INDEX "prayers_blocks_timeline_locales_locale_parent_id_unique" ON "prayers_blocks_timeline_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_carousel_slides_order_idx" ON "prayers_blocks_carousel_slides" USING btree ("_order");
  CREATE INDEX "prayers_blocks_carousel_slides_parent_id_idx" ON "prayers_blocks_carousel_slides" USING btree ("_parent_id");
  CREATE INDEX "prayers_blocks_carousel_slides_image_idx" ON "prayers_blocks_carousel_slides" USING btree ("image_id");
  CREATE UNIQUE INDEX "prayers_blocks_carousel_slides_locales_locale_parent_id_uniq" ON "prayers_blocks_carousel_slides_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_carousel_order_idx" ON "prayers_blocks_carousel" USING btree ("_order");
  CREATE INDEX "prayers_blocks_carousel_parent_id_idx" ON "prayers_blocks_carousel" USING btree ("_parent_id");
  CREATE INDEX "prayers_blocks_carousel_path_idx" ON "prayers_blocks_carousel" USING btree ("_path");
  CREATE INDEX "prayers_blocks_people_grid_order_idx" ON "prayers_blocks_people_grid" USING btree ("_order");
  CREATE INDEX "prayers_blocks_people_grid_parent_id_idx" ON "prayers_blocks_people_grid" USING btree ("_parent_id");
  CREATE INDEX "prayers_blocks_people_grid_path_idx" ON "prayers_blocks_people_grid" USING btree ("_path");
  CREATE INDEX "prayers_blocks_people_grid_hub_idx" ON "prayers_blocks_people_grid" USING btree ("hub_id");
  CREATE UNIQUE INDEX "prayers_blocks_people_grid_locales_locale_parent_id_unique" ON "prayers_blocks_people_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_creed_order_idx" ON "prayers_blocks_creed" USING btree ("_order");
  CREATE INDEX "prayers_blocks_creed_parent_id_idx" ON "prayers_blocks_creed" USING btree ("_parent_id");
  CREATE INDEX "prayers_blocks_creed_path_idx" ON "prayers_blocks_creed" USING btree ("_path");
  CREATE INDEX "prayers_blocks_creed_background_idx" ON "prayers_blocks_creed" USING btree ("background_id");
  CREATE UNIQUE INDEX "prayers_blocks_creed_locales_locale_parent_id_unique" ON "prayers_blocks_creed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_section_intro_order_idx" ON "prayers_blocks_section_intro" USING btree ("_order");
  CREATE INDEX "prayers_blocks_section_intro_parent_id_idx" ON "prayers_blocks_section_intro" USING btree ("_parent_id");
  CREATE INDEX "prayers_blocks_section_intro_path_idx" ON "prayers_blocks_section_intro" USING btree ("_path");
  CREATE UNIQUE INDEX "prayers_blocks_section_intro_locales_locale_parent_id_unique" ON "prayers_blocks_section_intro_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_data_table_filters_order_idx" ON "prayers_blocks_data_table_filters" USING btree ("_order");
  CREATE INDEX "prayers_blocks_data_table_filters_parent_id_idx" ON "prayers_blocks_data_table_filters" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "prayers_blocks_data_table_filters_locales_locale_parent_id_u" ON "prayers_blocks_data_table_filters_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_data_table_columns_order_idx" ON "prayers_blocks_data_table_columns" USING btree ("_order");
  CREATE INDEX "prayers_blocks_data_table_columns_parent_id_idx" ON "prayers_blocks_data_table_columns" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "prayers_blocks_data_table_columns_locales_locale_parent_id_u" ON "prayers_blocks_data_table_columns_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_data_table_rows_cells_order_idx" ON "prayers_blocks_data_table_rows_cells" USING btree ("_order");
  CREATE INDEX "prayers_blocks_data_table_rows_cells_parent_id_idx" ON "prayers_blocks_data_table_rows_cells" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "prayers_blocks_data_table_rows_cells_locales_locale_parent_i" ON "prayers_blocks_data_table_rows_cells_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_data_table_rows_order_idx" ON "prayers_blocks_data_table_rows" USING btree ("_order");
  CREATE INDEX "prayers_blocks_data_table_rows_parent_id_idx" ON "prayers_blocks_data_table_rows" USING btree ("_parent_id");
  CREATE INDEX "prayers_blocks_data_table_order_idx" ON "prayers_blocks_data_table" USING btree ("_order");
  CREATE INDEX "prayers_blocks_data_table_parent_id_idx" ON "prayers_blocks_data_table" USING btree ("_parent_id");
  CREATE INDEX "prayers_blocks_data_table_path_idx" ON "prayers_blocks_data_table" USING btree ("_path");
  CREATE UNIQUE INDEX "prayers_blocks_data_table_locales_locale_parent_id_unique" ON "prayers_blocks_data_table_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_media_card_order_idx" ON "prayers_blocks_media_card" USING btree ("_order");
  CREATE INDEX "prayers_blocks_media_card_parent_id_idx" ON "prayers_blocks_media_card" USING btree ("_parent_id");
  CREATE INDEX "prayers_blocks_media_card_path_idx" ON "prayers_blocks_media_card" USING btree ("_path");
  CREATE INDEX "prayers_blocks_media_card_image_idx" ON "prayers_blocks_media_card" USING btree ("image_id");
  CREATE UNIQUE INDEX "prayers_blocks_media_card_locales_locale_parent_id_unique" ON "prayers_blocks_media_card_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_department_grid_order_idx" ON "prayers_blocks_department_grid" USING btree ("_order");
  CREATE INDEX "prayers_blocks_department_grid_parent_id_idx" ON "prayers_blocks_department_grid" USING btree ("_parent_id");
  CREATE INDEX "prayers_blocks_department_grid_path_idx" ON "prayers_blocks_department_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "prayers_blocks_department_grid_locales_locale_parent_id_uniq" ON "prayers_blocks_department_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_contact_box_order_idx" ON "prayers_blocks_contact_box" USING btree ("_order");
  CREATE INDEX "prayers_blocks_contact_box_parent_id_idx" ON "prayers_blocks_contact_box" USING btree ("_parent_id");
  CREATE INDEX "prayers_blocks_contact_box_path_idx" ON "prayers_blocks_contact_box" USING btree ("_path");
  CREATE UNIQUE INDEX "prayers_blocks_contact_box_locales_locale_parent_id_unique" ON "prayers_blocks_contact_box_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_contact_form_details_items_order_idx" ON "prayers_blocks_contact_form_details_items" USING btree ("_order");
  CREATE INDEX "prayers_blocks_contact_form_details_items_parent_id_idx" ON "prayers_blocks_contact_form_details_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "prayers_blocks_contact_form_details_items_locales_locale_par" ON "prayers_blocks_contact_form_details_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_contact_form_details_order_idx" ON "prayers_blocks_contact_form_details" USING btree ("_order");
  CREATE INDEX "prayers_blocks_contact_form_details_parent_id_idx" ON "prayers_blocks_contact_form_details" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "prayers_blocks_contact_form_details_locales_locale_parent_id" ON "prayers_blocks_contact_form_details_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_contact_form_order_idx" ON "prayers_blocks_contact_form" USING btree ("_order");
  CREATE INDEX "prayers_blocks_contact_form_parent_id_idx" ON "prayers_blocks_contact_form" USING btree ("_parent_id");
  CREATE INDEX "prayers_blocks_contact_form_path_idx" ON "prayers_blocks_contact_form" USING btree ("_path");
  CREATE UNIQUE INDEX "prayers_blocks_contact_form_locales_locale_parent_id_unique" ON "prayers_blocks_contact_form_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_process_steps_items_order_idx" ON "prayers_blocks_process_steps_items" USING btree ("_order");
  CREATE INDEX "prayers_blocks_process_steps_items_parent_id_idx" ON "prayers_blocks_process_steps_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "prayers_blocks_process_steps_items_locales_locale_parent_id_" ON "prayers_blocks_process_steps_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_process_steps_order_idx" ON "prayers_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "prayers_blocks_process_steps_parent_id_idx" ON "prayers_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "prayers_blocks_process_steps_path_idx" ON "prayers_blocks_process_steps" USING btree ("_path");
  CREATE UNIQUE INDEX "prayers_blocks_process_steps_locales_locale_parent_id_unique" ON "prayers_blocks_process_steps_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_figure_order_idx" ON "prayers_blocks_figure" USING btree ("_order");
  CREATE INDEX "prayers_blocks_figure_parent_id_idx" ON "prayers_blocks_figure" USING btree ("_parent_id");
  CREATE INDEX "prayers_blocks_figure_path_idx" ON "prayers_blocks_figure" USING btree ("_path");
  CREATE INDEX "prayers_blocks_figure_image_idx" ON "prayers_blocks_figure" USING btree ("image_id");
  CREATE UNIQUE INDEX "prayers_blocks_figure_locales_locale_parent_id_unique" ON "prayers_blocks_figure_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_region_map_regions_order_idx" ON "prayers_blocks_region_map_regions" USING btree ("_order");
  CREATE INDEX "prayers_blocks_region_map_regions_parent_id_idx" ON "prayers_blocks_region_map_regions" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "prayers_blocks_region_map_regions_locales_locale_parent_id_u" ON "prayers_blocks_region_map_regions_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_blocks_region_map_order_idx" ON "prayers_blocks_region_map" USING btree ("_order");
  CREATE INDEX "prayers_blocks_region_map_parent_id_idx" ON "prayers_blocks_region_map" USING btree ("_parent_id");
  CREATE INDEX "prayers_blocks_region_map_path_idx" ON "prayers_blocks_region_map" USING btree ("_path");
  CREATE UNIQUE INDEX "prayers_blocks_region_map_locales_locale_parent_id_unique" ON "prayers_blocks_region_map_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "prayers_locales_locale_parent_id_unique" ON "prayers_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "prayers_rels_order_idx" ON "prayers_rels" USING btree ("order");
  CREATE INDEX "prayers_rels_parent_idx" ON "prayers_rels" USING btree ("parent_id");
  CREATE INDEX "prayers_rels_path_idx" ON "prayers_rels" USING btree ("path");
  CREATE INDEX "prayers_rels_pages_id_idx" ON "prayers_rels" USING btree ("pages_id");
  CREATE INDEX "prayers_rels_posts_id_idx" ON "prayers_rels" USING btree ("posts_id");
  CREATE INDEX "prayers_rels_departments_id_idx" ON "prayers_rels" USING btree ("departments_id");
  CREATE INDEX "prayers_rels_hubs_id_idx" ON "prayers_rels" USING btree ("hubs_id");
  CREATE INDEX "prayers_rels_membership_tiers_id_idx" ON "prayers_rels" USING btree ("membership_tiers_id");
  CREATE INDEX "prayers_rels_prayers_id_idx" ON "prayers_rels" USING btree ("prayers_id");
  CREATE INDEX "prayers_rels_board_members_id_idx" ON "prayers_rels" USING btree ("board_members_id");
  CREATE INDEX "_prayers_v_blocks_page_banner_links_order_idx" ON "_prayers_v_blocks_page_banner_links" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_page_banner_links_parent_id_idx" ON "_prayers_v_blocks_page_banner_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_prayers_v_blocks_page_banner_links_locales_locale_parent_id" ON "_prayers_v_blocks_page_banner_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_page_banner_order_idx" ON "_prayers_v_blocks_page_banner" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_page_banner_parent_id_idx" ON "_prayers_v_blocks_page_banner" USING btree ("_parent_id");
  CREATE INDEX "_prayers_v_blocks_page_banner_path_idx" ON "_prayers_v_blocks_page_banner" USING btree ("_path");
  CREATE INDEX "_prayers_v_blocks_page_banner_background_idx" ON "_prayers_v_blocks_page_banner" USING btree ("background_id");
  CREATE INDEX "_prayers_v_blocks_page_banner_watermark_idx" ON "_prayers_v_blocks_page_banner" USING btree ("watermark_id");
  CREATE UNIQUE INDEX "_prayers_v_blocks_page_banner_locales_locale_parent_id_uniqu" ON "_prayers_v_blocks_page_banner_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_section_tabs_items_order_idx" ON "_prayers_v_blocks_section_tabs_items" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_section_tabs_items_parent_id_idx" ON "_prayers_v_blocks_section_tabs_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_prayers_v_blocks_section_tabs_items_locales_locale_parent_i" ON "_prayers_v_blocks_section_tabs_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_section_tabs_order_idx" ON "_prayers_v_blocks_section_tabs" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_section_tabs_parent_id_idx" ON "_prayers_v_blocks_section_tabs" USING btree ("_parent_id");
  CREATE INDEX "_prayers_v_blocks_section_tabs_path_idx" ON "_prayers_v_blocks_section_tabs" USING btree ("_path");
  CREATE INDEX "_prayers_v_blocks_rich_text_order_idx" ON "_prayers_v_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_rich_text_parent_id_idx" ON "_prayers_v_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "_prayers_v_blocks_rich_text_path_idx" ON "_prayers_v_blocks_rich_text" USING btree ("_path");
  CREATE UNIQUE INDEX "_prayers_v_blocks_rich_text_locales_locale_parent_id_unique" ON "_prayers_v_blocks_rich_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_card_grid_items_order_idx" ON "_prayers_v_blocks_card_grid_items" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_card_grid_items_parent_id_idx" ON "_prayers_v_blocks_card_grid_items" USING btree ("_parent_id");
  CREATE INDEX "_prayers_v_blocks_card_grid_items_icon_idx" ON "_prayers_v_blocks_card_grid_items" USING btree ("icon_id");
  CREATE UNIQUE INDEX "_prayers_v_blocks_card_grid_items_locales_locale_parent_id_u" ON "_prayers_v_blocks_card_grid_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_card_grid_order_idx" ON "_prayers_v_blocks_card_grid" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_card_grid_parent_id_idx" ON "_prayers_v_blocks_card_grid" USING btree ("_parent_id");
  CREATE INDEX "_prayers_v_blocks_card_grid_path_idx" ON "_prayers_v_blocks_card_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "_prayers_v_blocks_card_grid_locales_locale_parent_id_unique" ON "_prayers_v_blocks_card_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_quote_banner_order_idx" ON "_prayers_v_blocks_quote_banner" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_quote_banner_parent_id_idx" ON "_prayers_v_blocks_quote_banner" USING btree ("_parent_id");
  CREATE INDEX "_prayers_v_blocks_quote_banner_path_idx" ON "_prayers_v_blocks_quote_banner" USING btree ("_path");
  CREATE INDEX "_prayers_v_blocks_quote_banner_background_idx" ON "_prayers_v_blocks_quote_banner" USING btree ("background_id");
  CREATE INDEX "_prayers_v_blocks_quote_banner_watermark_idx" ON "_prayers_v_blocks_quote_banner" USING btree ("watermark_id");
  CREATE UNIQUE INDEX "_prayers_v_blocks_quote_banner_locales_locale_parent_id_uniq" ON "_prayers_v_blocks_quote_banner_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_accelerators_items_order_idx" ON "_prayers_v_blocks_accelerators_items" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_accelerators_items_parent_id_idx" ON "_prayers_v_blocks_accelerators_items" USING btree ("_parent_id");
  CREATE INDEX "_prayers_v_blocks_accelerators_items_image_idx" ON "_prayers_v_blocks_accelerators_items" USING btree ("image_id");
  CREATE UNIQUE INDEX "_prayers_v_blocks_accelerators_items_locales_locale_parent_i" ON "_prayers_v_blocks_accelerators_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_accelerators_order_idx" ON "_prayers_v_blocks_accelerators" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_accelerators_parent_id_idx" ON "_prayers_v_blocks_accelerators" USING btree ("_parent_id");
  CREATE INDEX "_prayers_v_blocks_accelerators_path_idx" ON "_prayers_v_blocks_accelerators" USING btree ("_path");
  CREATE UNIQUE INDEX "_prayers_v_blocks_accelerators_locales_locale_parent_id_uniq" ON "_prayers_v_blocks_accelerators_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_posts_feed_filter_items_order_idx" ON "_prayers_v_blocks_posts_feed_filter_items" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_posts_feed_filter_items_parent_id_idx" ON "_prayers_v_blocks_posts_feed_filter_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_prayers_v_blocks_posts_feed_filter_items_locales_locale_par" ON "_prayers_v_blocks_posts_feed_filter_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_posts_feed_order_idx" ON "_prayers_v_blocks_posts_feed" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_posts_feed_parent_id_idx" ON "_prayers_v_blocks_posts_feed" USING btree ("_parent_id");
  CREATE INDEX "_prayers_v_blocks_posts_feed_path_idx" ON "_prayers_v_blocks_posts_feed" USING btree ("_path");
  CREATE UNIQUE INDEX "_prayers_v_blocks_posts_feed_locales_locale_parent_id_unique" ON "_prayers_v_blocks_posts_feed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_gallery_items_order_idx" ON "_prayers_v_blocks_gallery_items" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_gallery_items_parent_id_idx" ON "_prayers_v_blocks_gallery_items" USING btree ("_parent_id");
  CREATE INDEX "_prayers_v_blocks_gallery_items_image_idx" ON "_prayers_v_blocks_gallery_items" USING btree ("image_id");
  CREATE UNIQUE INDEX "_prayers_v_blocks_gallery_items_locales_locale_parent_id_uni" ON "_prayers_v_blocks_gallery_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_gallery_order_idx" ON "_prayers_v_blocks_gallery" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_gallery_parent_id_idx" ON "_prayers_v_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "_prayers_v_blocks_gallery_path_idx" ON "_prayers_v_blocks_gallery" USING btree ("_path");
  CREATE INDEX "_prayers_v_blocks_values_list_items_order_idx" ON "_prayers_v_blocks_values_list_items" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_values_list_items_parent_id_idx" ON "_prayers_v_blocks_values_list_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_prayers_v_blocks_values_list_items_locales_locale_parent_id" ON "_prayers_v_blocks_values_list_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_values_list_order_idx" ON "_prayers_v_blocks_values_list" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_values_list_parent_id_idx" ON "_prayers_v_blocks_values_list" USING btree ("_parent_id");
  CREATE INDEX "_prayers_v_blocks_values_list_path_idx" ON "_prayers_v_blocks_values_list" USING btree ("_path");
  CREATE UNIQUE INDEX "_prayers_v_blocks_values_list_locales_locale_parent_id_uniqu" ON "_prayers_v_blocks_values_list_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_history_grid_paragraphs_order_idx" ON "_prayers_v_blocks_history_grid_paragraphs" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_history_grid_paragraphs_parent_id_idx" ON "_prayers_v_blocks_history_grid_paragraphs" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_prayers_v_blocks_history_grid_paragraphs_locales_locale_par" ON "_prayers_v_blocks_history_grid_paragraphs_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_history_grid_order_idx" ON "_prayers_v_blocks_history_grid" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_history_grid_parent_id_idx" ON "_prayers_v_blocks_history_grid" USING btree ("_parent_id");
  CREATE INDEX "_prayers_v_blocks_history_grid_path_idx" ON "_prayers_v_blocks_history_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "_prayers_v_blocks_history_grid_locales_locale_parent_id_uniq" ON "_prayers_v_blocks_history_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_stats_row_items_order_idx" ON "_prayers_v_blocks_stats_row_items" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_stats_row_items_parent_id_idx" ON "_prayers_v_blocks_stats_row_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_prayers_v_blocks_stats_row_items_locales_locale_parent_id_u" ON "_prayers_v_blocks_stats_row_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_stats_row_order_idx" ON "_prayers_v_blocks_stats_row" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_stats_row_parent_id_idx" ON "_prayers_v_blocks_stats_row" USING btree ("_parent_id");
  CREATE INDEX "_prayers_v_blocks_stats_row_path_idx" ON "_prayers_v_blocks_stats_row" USING btree ("_path");
  CREATE INDEX "_prayers_v_blocks_highlighted_text_order_idx" ON "_prayers_v_blocks_highlighted_text" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_highlighted_text_parent_id_idx" ON "_prayers_v_blocks_highlighted_text" USING btree ("_parent_id");
  CREATE INDEX "_prayers_v_blocks_highlighted_text_path_idx" ON "_prayers_v_blocks_highlighted_text" USING btree ("_path");
  CREATE UNIQUE INDEX "_prayers_v_blocks_highlighted_text_locales_locale_parent_id_" ON "_prayers_v_blocks_highlighted_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_timeline_items_lines_order_idx" ON "_prayers_v_blocks_timeline_items_lines" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_timeline_items_lines_parent_id_idx" ON "_prayers_v_blocks_timeline_items_lines" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_prayers_v_blocks_timeline_items_lines_locales_locale_parent" ON "_prayers_v_blocks_timeline_items_lines_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_timeline_items_order_idx" ON "_prayers_v_blocks_timeline_items" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_timeline_items_parent_id_idx" ON "_prayers_v_blocks_timeline_items" USING btree ("_parent_id");
  CREATE INDEX "_prayers_v_blocks_timeline_order_idx" ON "_prayers_v_blocks_timeline" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_timeline_parent_id_idx" ON "_prayers_v_blocks_timeline" USING btree ("_parent_id");
  CREATE INDEX "_prayers_v_blocks_timeline_path_idx" ON "_prayers_v_blocks_timeline" USING btree ("_path");
  CREATE UNIQUE INDEX "_prayers_v_blocks_timeline_locales_locale_parent_id_unique" ON "_prayers_v_blocks_timeline_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_carousel_slides_order_idx" ON "_prayers_v_blocks_carousel_slides" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_carousel_slides_parent_id_idx" ON "_prayers_v_blocks_carousel_slides" USING btree ("_parent_id");
  CREATE INDEX "_prayers_v_blocks_carousel_slides_image_idx" ON "_prayers_v_blocks_carousel_slides" USING btree ("image_id");
  CREATE UNIQUE INDEX "_prayers_v_blocks_carousel_slides_locales_locale_parent_id_u" ON "_prayers_v_blocks_carousel_slides_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_carousel_order_idx" ON "_prayers_v_blocks_carousel" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_carousel_parent_id_idx" ON "_prayers_v_blocks_carousel" USING btree ("_parent_id");
  CREATE INDEX "_prayers_v_blocks_carousel_path_idx" ON "_prayers_v_blocks_carousel" USING btree ("_path");
  CREATE INDEX "_prayers_v_blocks_people_grid_order_idx" ON "_prayers_v_blocks_people_grid" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_people_grid_parent_id_idx" ON "_prayers_v_blocks_people_grid" USING btree ("_parent_id");
  CREATE INDEX "_prayers_v_blocks_people_grid_path_idx" ON "_prayers_v_blocks_people_grid" USING btree ("_path");
  CREATE INDEX "_prayers_v_blocks_people_grid_hub_idx" ON "_prayers_v_blocks_people_grid" USING btree ("hub_id");
  CREATE UNIQUE INDEX "_prayers_v_blocks_people_grid_locales_locale_parent_id_uniqu" ON "_prayers_v_blocks_people_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_creed_order_idx" ON "_prayers_v_blocks_creed" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_creed_parent_id_idx" ON "_prayers_v_blocks_creed" USING btree ("_parent_id");
  CREATE INDEX "_prayers_v_blocks_creed_path_idx" ON "_prayers_v_blocks_creed" USING btree ("_path");
  CREATE INDEX "_prayers_v_blocks_creed_background_idx" ON "_prayers_v_blocks_creed" USING btree ("background_id");
  CREATE UNIQUE INDEX "_prayers_v_blocks_creed_locales_locale_parent_id_unique" ON "_prayers_v_blocks_creed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_section_intro_order_idx" ON "_prayers_v_blocks_section_intro" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_section_intro_parent_id_idx" ON "_prayers_v_blocks_section_intro" USING btree ("_parent_id");
  CREATE INDEX "_prayers_v_blocks_section_intro_path_idx" ON "_prayers_v_blocks_section_intro" USING btree ("_path");
  CREATE UNIQUE INDEX "_prayers_v_blocks_section_intro_locales_locale_parent_id_uni" ON "_prayers_v_blocks_section_intro_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_data_table_filters_order_idx" ON "_prayers_v_blocks_data_table_filters" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_data_table_filters_parent_id_idx" ON "_prayers_v_blocks_data_table_filters" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_prayers_v_blocks_data_table_filters_locales_locale_parent_i" ON "_prayers_v_blocks_data_table_filters_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_data_table_columns_order_idx" ON "_prayers_v_blocks_data_table_columns" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_data_table_columns_parent_id_idx" ON "_prayers_v_blocks_data_table_columns" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_prayers_v_blocks_data_table_columns_locales_locale_parent_i" ON "_prayers_v_blocks_data_table_columns_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_data_table_rows_cells_order_idx" ON "_prayers_v_blocks_data_table_rows_cells" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_data_table_rows_cells_parent_id_idx" ON "_prayers_v_blocks_data_table_rows_cells" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_prayers_v_blocks_data_table_rows_cells_locales_locale_paren" ON "_prayers_v_blocks_data_table_rows_cells_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_data_table_rows_order_idx" ON "_prayers_v_blocks_data_table_rows" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_data_table_rows_parent_id_idx" ON "_prayers_v_blocks_data_table_rows" USING btree ("_parent_id");
  CREATE INDEX "_prayers_v_blocks_data_table_order_idx" ON "_prayers_v_blocks_data_table" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_data_table_parent_id_idx" ON "_prayers_v_blocks_data_table" USING btree ("_parent_id");
  CREATE INDEX "_prayers_v_blocks_data_table_path_idx" ON "_prayers_v_blocks_data_table" USING btree ("_path");
  CREATE UNIQUE INDEX "_prayers_v_blocks_data_table_locales_locale_parent_id_unique" ON "_prayers_v_blocks_data_table_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_media_card_order_idx" ON "_prayers_v_blocks_media_card" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_media_card_parent_id_idx" ON "_prayers_v_blocks_media_card" USING btree ("_parent_id");
  CREATE INDEX "_prayers_v_blocks_media_card_path_idx" ON "_prayers_v_blocks_media_card" USING btree ("_path");
  CREATE INDEX "_prayers_v_blocks_media_card_image_idx" ON "_prayers_v_blocks_media_card" USING btree ("image_id");
  CREATE UNIQUE INDEX "_prayers_v_blocks_media_card_locales_locale_parent_id_unique" ON "_prayers_v_blocks_media_card_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_department_grid_order_idx" ON "_prayers_v_blocks_department_grid" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_department_grid_parent_id_idx" ON "_prayers_v_blocks_department_grid" USING btree ("_parent_id");
  CREATE INDEX "_prayers_v_blocks_department_grid_path_idx" ON "_prayers_v_blocks_department_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "_prayers_v_blocks_department_grid_locales_locale_parent_id_u" ON "_prayers_v_blocks_department_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_contact_box_order_idx" ON "_prayers_v_blocks_contact_box" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_contact_box_parent_id_idx" ON "_prayers_v_blocks_contact_box" USING btree ("_parent_id");
  CREATE INDEX "_prayers_v_blocks_contact_box_path_idx" ON "_prayers_v_blocks_contact_box" USING btree ("_path");
  CREATE UNIQUE INDEX "_prayers_v_blocks_contact_box_locales_locale_parent_id_uniqu" ON "_prayers_v_blocks_contact_box_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_contact_form_details_items_order_idx" ON "_prayers_v_blocks_contact_form_details_items" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_contact_form_details_items_parent_id_idx" ON "_prayers_v_blocks_contact_form_details_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_prayers_v_blocks_contact_form_details_items_locales_locale_" ON "_prayers_v_blocks_contact_form_details_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_contact_form_details_order_idx" ON "_prayers_v_blocks_contact_form_details" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_contact_form_details_parent_id_idx" ON "_prayers_v_blocks_contact_form_details" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_prayers_v_blocks_contact_form_details_locales_locale_parent" ON "_prayers_v_blocks_contact_form_details_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_contact_form_order_idx" ON "_prayers_v_blocks_contact_form" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_contact_form_parent_id_idx" ON "_prayers_v_blocks_contact_form" USING btree ("_parent_id");
  CREATE INDEX "_prayers_v_blocks_contact_form_path_idx" ON "_prayers_v_blocks_contact_form" USING btree ("_path");
  CREATE UNIQUE INDEX "_prayers_v_blocks_contact_form_locales_locale_parent_id_uniq" ON "_prayers_v_blocks_contact_form_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_process_steps_items_order_idx" ON "_prayers_v_blocks_process_steps_items" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_process_steps_items_parent_id_idx" ON "_prayers_v_blocks_process_steps_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_prayers_v_blocks_process_steps_items_locales_locale_parent_" ON "_prayers_v_blocks_process_steps_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_process_steps_order_idx" ON "_prayers_v_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_process_steps_parent_id_idx" ON "_prayers_v_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "_prayers_v_blocks_process_steps_path_idx" ON "_prayers_v_blocks_process_steps" USING btree ("_path");
  CREATE UNIQUE INDEX "_prayers_v_blocks_process_steps_locales_locale_parent_id_uni" ON "_prayers_v_blocks_process_steps_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_figure_order_idx" ON "_prayers_v_blocks_figure" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_figure_parent_id_idx" ON "_prayers_v_blocks_figure" USING btree ("_parent_id");
  CREATE INDEX "_prayers_v_blocks_figure_path_idx" ON "_prayers_v_blocks_figure" USING btree ("_path");
  CREATE INDEX "_prayers_v_blocks_figure_image_idx" ON "_prayers_v_blocks_figure" USING btree ("image_id");
  CREATE UNIQUE INDEX "_prayers_v_blocks_figure_locales_locale_parent_id_unique" ON "_prayers_v_blocks_figure_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_region_map_regions_order_idx" ON "_prayers_v_blocks_region_map_regions" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_region_map_regions_parent_id_idx" ON "_prayers_v_blocks_region_map_regions" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_prayers_v_blocks_region_map_regions_locales_locale_parent_i" ON "_prayers_v_blocks_region_map_regions_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_blocks_region_map_order_idx" ON "_prayers_v_blocks_region_map" USING btree ("_order");
  CREATE INDEX "_prayers_v_blocks_region_map_parent_id_idx" ON "_prayers_v_blocks_region_map" USING btree ("_parent_id");
  CREATE INDEX "_prayers_v_blocks_region_map_path_idx" ON "_prayers_v_blocks_region_map" USING btree ("_path");
  CREATE UNIQUE INDEX "_prayers_v_blocks_region_map_locales_locale_parent_id_unique" ON "_prayers_v_blocks_region_map_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_parent_idx" ON "_prayers_v" USING btree ("parent_id");
  CREATE INDEX "_prayers_v_version_version_slug_idx" ON "_prayers_v" USING btree ("version_slug");
  CREATE INDEX "_prayers_v_version_version_cover_idx" ON "_prayers_v" USING btree ("version_cover_id");
  CREATE INDEX "_prayers_v_version_version_updated_at_idx" ON "_prayers_v" USING btree ("version_updated_at");
  CREATE INDEX "_prayers_v_version_version_created_at_idx" ON "_prayers_v" USING btree ("version_created_at");
  CREATE INDEX "_prayers_v_version_version__status_idx" ON "_prayers_v" USING btree ("version__status");
  CREATE INDEX "_prayers_v_created_at_idx" ON "_prayers_v" USING btree ("created_at");
  CREATE INDEX "_prayers_v_updated_at_idx" ON "_prayers_v" USING btree ("updated_at");
  CREATE INDEX "_prayers_v_snapshot_idx" ON "_prayers_v" USING btree ("snapshot");
  CREATE INDEX "_prayers_v_published_locale_idx" ON "_prayers_v" USING btree ("published_locale");
  CREATE INDEX "_prayers_v_latest_idx" ON "_prayers_v" USING btree ("latest");
  CREATE UNIQUE INDEX "_prayers_v_locales_locale_parent_id_unique" ON "_prayers_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_prayers_v_rels_order_idx" ON "_prayers_v_rels" USING btree ("order");
  CREATE INDEX "_prayers_v_rels_parent_idx" ON "_prayers_v_rels" USING btree ("parent_id");
  CREATE INDEX "_prayers_v_rels_path_idx" ON "_prayers_v_rels" USING btree ("path");
  CREATE INDEX "_prayers_v_rels_pages_id_idx" ON "_prayers_v_rels" USING btree ("pages_id");
  CREATE INDEX "_prayers_v_rels_posts_id_idx" ON "_prayers_v_rels" USING btree ("posts_id");
  CREATE INDEX "_prayers_v_rels_departments_id_idx" ON "_prayers_v_rels" USING btree ("departments_id");
  CREATE INDEX "_prayers_v_rels_hubs_id_idx" ON "_prayers_v_rels" USING btree ("hubs_id");
  CREATE INDEX "_prayers_v_rels_membership_tiers_id_idx" ON "_prayers_v_rels" USING btree ("membership_tiers_id");
  CREATE INDEX "_prayers_v_rels_prayers_id_idx" ON "_prayers_v_rels" USING btree ("prayers_id");
  CREATE INDEX "_prayers_v_rels_board_members_id_idx" ON "_prayers_v_rels" USING btree ("board_members_id");
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_prayers_fk" FOREIGN KEY ("prayers_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_prayers_fk" FOREIGN KEY ("prayers_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_prayers_fk" FOREIGN KEY ("prayers_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_prayers_fk" FOREIGN KEY ("prayers_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prayers" ADD CONSTRAINT "prayers_cover_id_media_id_fk" FOREIGN KEY ("cover_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "departments_rels" ADD CONSTRAINT "departments_rels_prayers_fk" FOREIGN KEY ("prayers_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_rels" ADD CONSTRAINT "_departments_v_rels_prayers_fk" FOREIGN KEY ("prayers_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_rels" ADD CONSTRAINT "hubs_rels_prayers_fk" FOREIGN KEY ("prayers_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_rels" ADD CONSTRAINT "_hubs_v_rels_prayers_fk" FOREIGN KEY ("prayers_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_rels" ADD CONSTRAINT "membership_tiers_rels_prayers_fk" FOREIGN KEY ("prayers_id") REFERENCES "public"."prayers"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_rels_prayers_id_idx" ON "pages_rels" USING btree ("prayers_id");
  CREATE INDEX "_pages_v_rels_prayers_id_idx" ON "_pages_v_rels" USING btree ("prayers_id");
  CREATE INDEX "posts_rels_prayers_id_idx" ON "posts_rels" USING btree ("prayers_id");
  CREATE INDEX "_posts_v_rels_prayers_id_idx" ON "_posts_v_rels" USING btree ("prayers_id");
  CREATE UNIQUE INDEX "prayers_slug_idx" ON "prayers" USING btree ("slug");
  CREATE INDEX "prayers_cover_idx" ON "prayers" USING btree ("cover_id");
  CREATE INDEX "prayers__status_idx" ON "prayers" USING btree ("_status");
  CREATE INDEX "departments_rels_prayers_id_idx" ON "departments_rels" USING btree ("prayers_id");
  CREATE INDEX "_departments_v_rels_prayers_id_idx" ON "_departments_v_rels" USING btree ("prayers_id");
  CREATE INDEX "hubs_rels_prayers_id_idx" ON "hubs_rels" USING btree ("prayers_id");
  CREATE INDEX "_hubs_v_rels_prayers_id_idx" ON "_hubs_v_rels" USING btree ("prayers_id");
  CREATE INDEX "membership_tiers_rels_prayers_id_idx" ON "membership_tiers_rels" USING btree ("prayers_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_pages_blocks_posts_feed_filter_items_kind" ADD VALUE 'newsArticle' BEFORE 'news';
  ALTER TYPE "public"."enum_pages_blocks_posts_feed_filter_items_kind" ADD VALUE 'prayer';
  ALTER TYPE "public"."enum_pages_blocks_posts_feed_kind" ADD VALUE 'newsArticle' BEFORE 'news';
  ALTER TYPE "public"."enum_pages_blocks_posts_feed_kind" ADD VALUE 'prayer';
  ALTER TYPE "public"."enum__pages_v_blocks_posts_feed_filter_items_kind" ADD VALUE 'newsArticle' BEFORE 'news';
  ALTER TYPE "public"."enum__pages_v_blocks_posts_feed_filter_items_kind" ADD VALUE 'prayer';
  ALTER TYPE "public"."enum__pages_v_blocks_posts_feed_kind" ADD VALUE 'newsArticle' BEFORE 'news';
  ALTER TYPE "public"."enum__pages_v_blocks_posts_feed_kind" ADD VALUE 'prayer';
  ALTER TYPE "public"."enum_posts_blocks_posts_feed_filter_items_kind" ADD VALUE 'newsArticle' BEFORE 'news';
  ALTER TYPE "public"."enum_posts_blocks_posts_feed_filter_items_kind" ADD VALUE 'prayer';
  ALTER TYPE "public"."enum_posts_blocks_posts_feed_kind" ADD VALUE 'newsArticle' BEFORE 'news';
  ALTER TYPE "public"."enum_posts_blocks_posts_feed_kind" ADD VALUE 'prayer';
  ALTER TYPE "public"."enum_posts_kind" ADD VALUE 'prayer';
  ALTER TYPE "public"."enum__posts_v_blocks_posts_feed_filter_items_kind" ADD VALUE 'newsArticle' BEFORE 'news';
  ALTER TYPE "public"."enum__posts_v_blocks_posts_feed_filter_items_kind" ADD VALUE 'prayer';
  ALTER TYPE "public"."enum__posts_v_blocks_posts_feed_kind" ADD VALUE 'newsArticle' BEFORE 'news';
  ALTER TYPE "public"."enum__posts_v_blocks_posts_feed_kind" ADD VALUE 'prayer';
  ALTER TYPE "public"."enum__posts_v_version_kind" ADD VALUE 'prayer';
  ALTER TYPE "public"."enum_departments_blocks_posts_feed_filter_items_kind" ADD VALUE 'newsArticle' BEFORE 'news';
  ALTER TYPE "public"."enum_departments_blocks_posts_feed_filter_items_kind" ADD VALUE 'prayer';
  ALTER TYPE "public"."enum_departments_blocks_posts_feed_kind" ADD VALUE 'newsArticle' BEFORE 'news';
  ALTER TYPE "public"."enum_departments_blocks_posts_feed_kind" ADD VALUE 'prayer';
  ALTER TYPE "public"."enum__departments_v_blocks_posts_feed_filter_items_kind" ADD VALUE 'newsArticle' BEFORE 'news';
  ALTER TYPE "public"."enum__departments_v_blocks_posts_feed_filter_items_kind" ADD VALUE 'prayer';
  ALTER TYPE "public"."enum__departments_v_blocks_posts_feed_kind" ADD VALUE 'newsArticle' BEFORE 'news';
  ALTER TYPE "public"."enum__departments_v_blocks_posts_feed_kind" ADD VALUE 'prayer';
  ALTER TYPE "public"."enum_hubs_blocks_posts_feed_filter_items_kind" ADD VALUE 'newsArticle' BEFORE 'news';
  ALTER TYPE "public"."enum_hubs_blocks_posts_feed_filter_items_kind" ADD VALUE 'prayer';
  ALTER TYPE "public"."enum_hubs_blocks_posts_feed_kind" ADD VALUE 'newsArticle' BEFORE 'news';
  ALTER TYPE "public"."enum_hubs_blocks_posts_feed_kind" ADD VALUE 'prayer';
  ALTER TYPE "public"."enum__hubs_v_blocks_posts_feed_filter_items_kind" ADD VALUE 'newsArticle' BEFORE 'news';
  ALTER TYPE "public"."enum__hubs_v_blocks_posts_feed_filter_items_kind" ADD VALUE 'prayer';
  ALTER TYPE "public"."enum__hubs_v_blocks_posts_feed_kind" ADD VALUE 'newsArticle' BEFORE 'news';
  ALTER TYPE "public"."enum__hubs_v_blocks_posts_feed_kind" ADD VALUE 'prayer';
  ALTER TYPE "public"."enum_membership_tiers_blocks_posts_feed_filter_items_kind" ADD VALUE 'newsArticle' BEFORE 'news';
  ALTER TYPE "public"."enum_membership_tiers_blocks_posts_feed_filter_items_kind" ADD VALUE 'prayer';
  ALTER TYPE "public"."enum_membership_tiers_blocks_posts_feed_kind" ADD VALUE 'newsArticle' BEFORE 'news';
  ALTER TYPE "public"."enum_membership_tiers_blocks_posts_feed_kind" ADD VALUE 'prayer';
  ALTER TABLE "prayers_blocks_page_banner_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_page_banner_links_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_page_banner" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_page_banner_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_section_tabs_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_section_tabs_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_section_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_rich_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_rich_text_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_card_grid_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_card_grid_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_card_grid" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_card_grid_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_quote_banner" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_quote_banner_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_accelerators_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_accelerators_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_accelerators" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_accelerators_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_posts_feed_filter_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_posts_feed_filter_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_posts_feed" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_posts_feed_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_gallery_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_gallery_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_gallery" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_values_list_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_values_list_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_values_list" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_values_list_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_history_grid_paragraphs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_history_grid_paragraphs_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_history_grid" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_history_grid_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_stats_row_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_stats_row_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_stats_row" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_highlighted_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_highlighted_text_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_timeline_items_lines" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_timeline_items_lines_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_timeline_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_timeline" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_timeline_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_carousel_slides" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_carousel_slides_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_carousel" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_people_grid" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_people_grid_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_creed" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_creed_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_section_intro" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_section_intro_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_data_table_filters" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_data_table_filters_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_data_table_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_data_table_columns_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_data_table_rows_cells" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_data_table_rows_cells_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_data_table_rows" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_data_table" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_data_table_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_media_card" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_media_card_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_department_grid" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_department_grid_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_contact_box" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_contact_box_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_contact_form_details_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_contact_form_details_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_contact_form_details" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_contact_form_details_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_contact_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_contact_form_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_process_steps_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_process_steps_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_process_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_process_steps_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_figure" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_figure_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_region_map_regions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_region_map_regions_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_region_map" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_blocks_region_map_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "prayers_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_page_banner_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_page_banner_links_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_page_banner" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_page_banner_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_section_tabs_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_section_tabs_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_section_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_rich_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_rich_text_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_card_grid_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_card_grid_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_card_grid" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_card_grid_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_quote_banner" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_quote_banner_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_accelerators_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_accelerators_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_accelerators" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_accelerators_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_posts_feed_filter_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_posts_feed_filter_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_posts_feed" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_posts_feed_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_gallery_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_gallery_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_gallery" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_values_list_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_values_list_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_values_list" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_values_list_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_history_grid_paragraphs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_history_grid_paragraphs_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_history_grid" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_history_grid_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_stats_row_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_stats_row_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_stats_row" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_highlighted_text" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_highlighted_text_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_timeline_items_lines" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_timeline_items_lines_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_timeline_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_timeline" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_timeline_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_carousel_slides" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_carousel_slides_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_carousel" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_people_grid" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_people_grid_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_creed" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_creed_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_section_intro" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_section_intro_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_data_table_filters" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_data_table_filters_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_data_table_columns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_data_table_columns_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_data_table_rows_cells" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_data_table_rows_cells_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_data_table_rows" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_data_table" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_data_table_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_media_card" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_media_card_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_department_grid" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_department_grid_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_contact_box" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_contact_box_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_contact_form_details_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_contact_form_details_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_contact_form_details" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_contact_form_details_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_contact_form" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_contact_form_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_process_steps_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_process_steps_items_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_process_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_process_steps_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_figure" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_figure_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_region_map_regions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_region_map_regions_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_region_map" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_blocks_region_map_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_prayers_v_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "prayers_blocks_page_banner_links" CASCADE;
  DROP TABLE "prayers_blocks_page_banner_links_locales" CASCADE;
  DROP TABLE "prayers_blocks_page_banner" CASCADE;
  DROP TABLE "prayers_blocks_page_banner_locales" CASCADE;
  DROP TABLE "prayers_blocks_section_tabs_items" CASCADE;
  DROP TABLE "prayers_blocks_section_tabs_items_locales" CASCADE;
  DROP TABLE "prayers_blocks_section_tabs" CASCADE;
  DROP TABLE "prayers_blocks_rich_text" CASCADE;
  DROP TABLE "prayers_blocks_rich_text_locales" CASCADE;
  DROP TABLE "prayers_blocks_card_grid_items" CASCADE;
  DROP TABLE "prayers_blocks_card_grid_items_locales" CASCADE;
  DROP TABLE "prayers_blocks_card_grid" CASCADE;
  DROP TABLE "prayers_blocks_card_grid_locales" CASCADE;
  DROP TABLE "prayers_blocks_quote_banner" CASCADE;
  DROP TABLE "prayers_blocks_quote_banner_locales" CASCADE;
  DROP TABLE "prayers_blocks_accelerators_items" CASCADE;
  DROP TABLE "prayers_blocks_accelerators_items_locales" CASCADE;
  DROP TABLE "prayers_blocks_accelerators" CASCADE;
  DROP TABLE "prayers_blocks_accelerators_locales" CASCADE;
  DROP TABLE "prayers_blocks_posts_feed_filter_items" CASCADE;
  DROP TABLE "prayers_blocks_posts_feed_filter_items_locales" CASCADE;
  DROP TABLE "prayers_blocks_posts_feed" CASCADE;
  DROP TABLE "prayers_blocks_posts_feed_locales" CASCADE;
  DROP TABLE "prayers_blocks_gallery_items" CASCADE;
  DROP TABLE "prayers_blocks_gallery_items_locales" CASCADE;
  DROP TABLE "prayers_blocks_gallery" CASCADE;
  DROP TABLE "prayers_blocks_values_list_items" CASCADE;
  DROP TABLE "prayers_blocks_values_list_items_locales" CASCADE;
  DROP TABLE "prayers_blocks_values_list" CASCADE;
  DROP TABLE "prayers_blocks_values_list_locales" CASCADE;
  DROP TABLE "prayers_blocks_history_grid_paragraphs" CASCADE;
  DROP TABLE "prayers_blocks_history_grid_paragraphs_locales" CASCADE;
  DROP TABLE "prayers_blocks_history_grid" CASCADE;
  DROP TABLE "prayers_blocks_history_grid_locales" CASCADE;
  DROP TABLE "prayers_blocks_stats_row_items" CASCADE;
  DROP TABLE "prayers_blocks_stats_row_items_locales" CASCADE;
  DROP TABLE "prayers_blocks_stats_row" CASCADE;
  DROP TABLE "prayers_blocks_highlighted_text" CASCADE;
  DROP TABLE "prayers_blocks_highlighted_text_locales" CASCADE;
  DROP TABLE "prayers_blocks_timeline_items_lines" CASCADE;
  DROP TABLE "prayers_blocks_timeline_items_lines_locales" CASCADE;
  DROP TABLE "prayers_blocks_timeline_items" CASCADE;
  DROP TABLE "prayers_blocks_timeline" CASCADE;
  DROP TABLE "prayers_blocks_timeline_locales" CASCADE;
  DROP TABLE "prayers_blocks_carousel_slides" CASCADE;
  DROP TABLE "prayers_blocks_carousel_slides_locales" CASCADE;
  DROP TABLE "prayers_blocks_carousel" CASCADE;
  DROP TABLE "prayers_blocks_people_grid" CASCADE;
  DROP TABLE "prayers_blocks_people_grid_locales" CASCADE;
  DROP TABLE "prayers_blocks_creed" CASCADE;
  DROP TABLE "prayers_blocks_creed_locales" CASCADE;
  DROP TABLE "prayers_blocks_section_intro" CASCADE;
  DROP TABLE "prayers_blocks_section_intro_locales" CASCADE;
  DROP TABLE "prayers_blocks_data_table_filters" CASCADE;
  DROP TABLE "prayers_blocks_data_table_filters_locales" CASCADE;
  DROP TABLE "prayers_blocks_data_table_columns" CASCADE;
  DROP TABLE "prayers_blocks_data_table_columns_locales" CASCADE;
  DROP TABLE "prayers_blocks_data_table_rows_cells" CASCADE;
  DROP TABLE "prayers_blocks_data_table_rows_cells_locales" CASCADE;
  DROP TABLE "prayers_blocks_data_table_rows" CASCADE;
  DROP TABLE "prayers_blocks_data_table" CASCADE;
  DROP TABLE "prayers_blocks_data_table_locales" CASCADE;
  DROP TABLE "prayers_blocks_media_card" CASCADE;
  DROP TABLE "prayers_blocks_media_card_locales" CASCADE;
  DROP TABLE "prayers_blocks_department_grid" CASCADE;
  DROP TABLE "prayers_blocks_department_grid_locales" CASCADE;
  DROP TABLE "prayers_blocks_contact_box" CASCADE;
  DROP TABLE "prayers_blocks_contact_box_locales" CASCADE;
  DROP TABLE "prayers_blocks_contact_form_details_items" CASCADE;
  DROP TABLE "prayers_blocks_contact_form_details_items_locales" CASCADE;
  DROP TABLE "prayers_blocks_contact_form_details" CASCADE;
  DROP TABLE "prayers_blocks_contact_form_details_locales" CASCADE;
  DROP TABLE "prayers_blocks_contact_form" CASCADE;
  DROP TABLE "prayers_blocks_contact_form_locales" CASCADE;
  DROP TABLE "prayers_blocks_process_steps_items" CASCADE;
  DROP TABLE "prayers_blocks_process_steps_items_locales" CASCADE;
  DROP TABLE "prayers_blocks_process_steps" CASCADE;
  DROP TABLE "prayers_blocks_process_steps_locales" CASCADE;
  DROP TABLE "prayers_blocks_figure" CASCADE;
  DROP TABLE "prayers_blocks_figure_locales" CASCADE;
  DROP TABLE "prayers_blocks_region_map_regions" CASCADE;
  DROP TABLE "prayers_blocks_region_map_regions_locales" CASCADE;
  DROP TABLE "prayers_blocks_region_map" CASCADE;
  DROP TABLE "prayers_blocks_region_map_locales" CASCADE;
  DROP TABLE "prayers_locales" CASCADE;
  DROP TABLE "prayers_rels" CASCADE;
  DROP TABLE "_prayers_v_blocks_page_banner_links" CASCADE;
  DROP TABLE "_prayers_v_blocks_page_banner_links_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_page_banner" CASCADE;
  DROP TABLE "_prayers_v_blocks_page_banner_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_section_tabs_items" CASCADE;
  DROP TABLE "_prayers_v_blocks_section_tabs_items_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_section_tabs" CASCADE;
  DROP TABLE "_prayers_v_blocks_rich_text" CASCADE;
  DROP TABLE "_prayers_v_blocks_rich_text_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_card_grid_items" CASCADE;
  DROP TABLE "_prayers_v_blocks_card_grid_items_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_card_grid" CASCADE;
  DROP TABLE "_prayers_v_blocks_card_grid_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_quote_banner" CASCADE;
  DROP TABLE "_prayers_v_blocks_quote_banner_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_accelerators_items" CASCADE;
  DROP TABLE "_prayers_v_blocks_accelerators_items_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_accelerators" CASCADE;
  DROP TABLE "_prayers_v_blocks_accelerators_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_posts_feed_filter_items" CASCADE;
  DROP TABLE "_prayers_v_blocks_posts_feed_filter_items_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_posts_feed" CASCADE;
  DROP TABLE "_prayers_v_blocks_posts_feed_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_gallery_items" CASCADE;
  DROP TABLE "_prayers_v_blocks_gallery_items_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_gallery" CASCADE;
  DROP TABLE "_prayers_v_blocks_values_list_items" CASCADE;
  DROP TABLE "_prayers_v_blocks_values_list_items_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_values_list" CASCADE;
  DROP TABLE "_prayers_v_blocks_values_list_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_history_grid_paragraphs" CASCADE;
  DROP TABLE "_prayers_v_blocks_history_grid_paragraphs_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_history_grid" CASCADE;
  DROP TABLE "_prayers_v_blocks_history_grid_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_stats_row_items" CASCADE;
  DROP TABLE "_prayers_v_blocks_stats_row_items_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_stats_row" CASCADE;
  DROP TABLE "_prayers_v_blocks_highlighted_text" CASCADE;
  DROP TABLE "_prayers_v_blocks_highlighted_text_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_timeline_items_lines" CASCADE;
  DROP TABLE "_prayers_v_blocks_timeline_items_lines_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_timeline_items" CASCADE;
  DROP TABLE "_prayers_v_blocks_timeline" CASCADE;
  DROP TABLE "_prayers_v_blocks_timeline_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_carousel_slides" CASCADE;
  DROP TABLE "_prayers_v_blocks_carousel_slides_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_carousel" CASCADE;
  DROP TABLE "_prayers_v_blocks_people_grid" CASCADE;
  DROP TABLE "_prayers_v_blocks_people_grid_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_creed" CASCADE;
  DROP TABLE "_prayers_v_blocks_creed_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_section_intro" CASCADE;
  DROP TABLE "_prayers_v_blocks_section_intro_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_data_table_filters" CASCADE;
  DROP TABLE "_prayers_v_blocks_data_table_filters_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_data_table_columns" CASCADE;
  DROP TABLE "_prayers_v_blocks_data_table_columns_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_data_table_rows_cells" CASCADE;
  DROP TABLE "_prayers_v_blocks_data_table_rows_cells_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_data_table_rows" CASCADE;
  DROP TABLE "_prayers_v_blocks_data_table" CASCADE;
  DROP TABLE "_prayers_v_blocks_data_table_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_media_card" CASCADE;
  DROP TABLE "_prayers_v_blocks_media_card_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_department_grid" CASCADE;
  DROP TABLE "_prayers_v_blocks_department_grid_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_contact_box" CASCADE;
  DROP TABLE "_prayers_v_blocks_contact_box_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_contact_form_details_items" CASCADE;
  DROP TABLE "_prayers_v_blocks_contact_form_details_items_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_contact_form_details" CASCADE;
  DROP TABLE "_prayers_v_blocks_contact_form_details_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_contact_form" CASCADE;
  DROP TABLE "_prayers_v_blocks_contact_form_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_process_steps_items" CASCADE;
  DROP TABLE "_prayers_v_blocks_process_steps_items_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_process_steps" CASCADE;
  DROP TABLE "_prayers_v_blocks_process_steps_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_figure" CASCADE;
  DROP TABLE "_prayers_v_blocks_figure_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_region_map_regions" CASCADE;
  DROP TABLE "_prayers_v_blocks_region_map_regions_locales" CASCADE;
  DROP TABLE "_prayers_v_blocks_region_map" CASCADE;
  DROP TABLE "_prayers_v_blocks_region_map_locales" CASCADE;
  DROP TABLE "_prayers_v" CASCADE;
  DROP TABLE "_prayers_v_locales" CASCADE;
  DROP TABLE "_prayers_v_rels" CASCADE;
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_prayers_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_prayers_fk";
  
  ALTER TABLE "posts_rels" DROP CONSTRAINT "posts_rels_prayers_fk";
  
  ALTER TABLE "_posts_v_rels" DROP CONSTRAINT "_posts_v_rels_prayers_fk";
  
  ALTER TABLE "prayers" DROP CONSTRAINT "prayers_cover_id_media_id_fk";
  
  ALTER TABLE "departments_rels" DROP CONSTRAINT "departments_rels_prayers_fk";
  
  ALTER TABLE "_departments_v_rels" DROP CONSTRAINT "_departments_v_rels_prayers_fk";
  
  ALTER TABLE "hubs_rels" DROP CONSTRAINT "hubs_rels_prayers_fk";
  
  ALTER TABLE "_hubs_v_rels" DROP CONSTRAINT "_hubs_v_rels_prayers_fk";
  
  ALTER TABLE "membership_tiers_rels" DROP CONSTRAINT "membership_tiers_rels_prayers_fk";
  
  DROP INDEX "pages_rels_prayers_id_idx";
  DROP INDEX "_pages_v_rels_prayers_id_idx";
  DROP INDEX "posts_rels_prayers_id_idx";
  DROP INDEX "_posts_v_rels_prayers_id_idx";
  DROP INDEX "prayers_slug_idx";
  DROP INDEX "prayers_cover_idx";
  DROP INDEX "prayers__status_idx";
  DROP INDEX "departments_rels_prayers_id_idx";
  DROP INDEX "_departments_v_rels_prayers_id_idx";
  DROP INDEX "hubs_rels_prayers_id_idx";
  DROP INDEX "_hubs_v_rels_prayers_id_idx";
  DROP INDEX "membership_tiers_rels_prayers_id_idx";
  ALTER TABLE "pages_blocks_posts_feed" DROP COLUMN "collection";
  ALTER TABLE "pages_rels" DROP COLUMN "prayers_id";
  ALTER TABLE "_pages_v_blocks_posts_feed" DROP COLUMN "collection";
  ALTER TABLE "_pages_v_rels" DROP COLUMN "prayers_id";
  ALTER TABLE "posts_blocks_posts_feed" DROP COLUMN "collection";
  ALTER TABLE "posts_rels" DROP COLUMN "prayers_id";
  ALTER TABLE "_posts_v_blocks_posts_feed" DROP COLUMN "collection";
  ALTER TABLE "_posts_v_rels" DROP COLUMN "prayers_id";
  ALTER TABLE "prayers" DROP COLUMN "slug";
  ALTER TABLE "prayers" DROP COLUMN "published_at";
  ALTER TABLE "prayers" DROP COLUMN "cover_id";
  ALTER TABLE "prayers" DROP COLUMN "_status";
  ALTER TABLE "departments_blocks_posts_feed" DROP COLUMN "collection";
  ALTER TABLE "departments_rels" DROP COLUMN "prayers_id";
  ALTER TABLE "_departments_v_blocks_posts_feed" DROP COLUMN "collection";
  ALTER TABLE "_departments_v_rels" DROP COLUMN "prayers_id";
  ALTER TABLE "hubs_blocks_posts_feed" DROP COLUMN "collection";
  ALTER TABLE "hubs_rels" DROP COLUMN "prayers_id";
  ALTER TABLE "_hubs_v_blocks_posts_feed" DROP COLUMN "collection";
  ALTER TABLE "_hubs_v_rels" DROP COLUMN "prayers_id";
  ALTER TABLE "membership_tiers_blocks_posts_feed" DROP COLUMN "collection";
  ALTER TABLE "membership_tiers_rels" DROP COLUMN "prayers_id";
  DROP TYPE "public"."enum_pages_blocks_posts_feed_collection";
  DROP TYPE "public"."enum__pages_v_blocks_posts_feed_collection";
  DROP TYPE "public"."enum_posts_blocks_posts_feed_collection";
  DROP TYPE "public"."enum__posts_v_blocks_posts_feed_collection";
  DROP TYPE "public"."enum_prayers_blocks_page_banner_links_type";
  DROP TYPE "public"."enum_prayers_blocks_page_banner_links_appearance";
  DROP TYPE "public"."enum_prayers_blocks_page_banner_variant";
  DROP TYPE "public"."enum_prayers_blocks_page_banner_align";
  DROP TYPE "public"."enum_prayers_blocks_section_tabs_items_type";
  DROP TYPE "public"."enum_prayers_blocks_section_tabs_variant";
  DROP TYPE "public"."enum_prayers_blocks_section_tabs_align";
  DROP TYPE "public"."enum_prayers_blocks_rich_text_header_align";
  DROP TYPE "public"."enum_prayers_blocks_rich_text_width";
  DROP TYPE "public"."enum_prayers_blocks_rich_text_background";
  DROP TYPE "public"."enum_prayers_blocks_card_grid_items_link_type";
  DROP TYPE "public"."enum_prayers_blocks_card_grid_variant";
  DROP TYPE "public"."enum_prayers_blocks_card_grid_header_align";
  DROP TYPE "public"."enum_prayers_blocks_card_grid_background";
  DROP TYPE "public"."enum_prayers_blocks_quote_banner_variant";
  DROP TYPE "public"."enum_prayers_blocks_quote_banner_cta_type";
  DROP TYPE "public"."enum_prayers_blocks_quote_banner_cta_appearance";
  DROP TYPE "public"."enum_prayers_blocks_accelerators_items_link_type";
  DROP TYPE "public"."enum_prayers_blocks_accelerators_header_align";
  DROP TYPE "public"."enum_prayers_blocks_posts_feed_filter_items_kind";
  DROP TYPE "public"."enum_prayers_blocks_posts_feed_variant";
  DROP TYPE "public"."enum_prayers_blocks_posts_feed_header_align";
  DROP TYPE "public"."enum_prayers_blocks_posts_feed_collection";
  DROP TYPE "public"."enum_prayers_blocks_posts_feed_source";
  DROP TYPE "public"."enum_prayers_blocks_posts_feed_kind";
  DROP TYPE "public"."enum_prayers_blocks_posts_feed_filter_style";
  DROP TYPE "public"."enum_prayers_blocks_posts_feed_more_link_type";
  DROP TYPE "public"."enum_prayers_blocks_gallery_variant";
  DROP TYPE "public"."enum_prayers_blocks_history_grid_title_tone";
  DROP TYPE "public"."enum_prayers_blocks_people_grid_variant";
  DROP TYPE "public"."enum_prayers_blocks_people_grid_source";
  DROP TYPE "public"."enum_prayers_blocks_people_grid_group";
  DROP TYPE "public"."enum_prayers_blocks_data_table_header_align";
  DROP TYPE "public"."enum_prayers_blocks_data_table_variant";
  DROP TYPE "public"."enum_prayers_blocks_department_grid_header_align";
  DROP TYPE "public"."enum_prayers_blocks_department_grid_source";
  DROP TYPE "public"."enum_prayers_blocks_process_steps_header_align";
  DROP TYPE "public"."enum_prayers_blocks_figure_variant";
  DROP TYPE "public"."enum_prayers_blocks_region_map_header_align";
  DROP TYPE "public"."enum_prayers_status";
  DROP TYPE "public"."enum__prayers_v_blocks_page_banner_links_type";
  DROP TYPE "public"."enum__prayers_v_blocks_page_banner_links_appearance";
  DROP TYPE "public"."enum__prayers_v_blocks_page_banner_variant";
  DROP TYPE "public"."enum__prayers_v_blocks_page_banner_align";
  DROP TYPE "public"."enum__prayers_v_blocks_section_tabs_items_type";
  DROP TYPE "public"."enum__prayers_v_blocks_section_tabs_variant";
  DROP TYPE "public"."enum__prayers_v_blocks_section_tabs_align";
  DROP TYPE "public"."enum__prayers_v_blocks_rich_text_header_align";
  DROP TYPE "public"."enum__prayers_v_blocks_rich_text_width";
  DROP TYPE "public"."enum__prayers_v_blocks_rich_text_background";
  DROP TYPE "public"."enum__prayers_v_blocks_card_grid_items_link_type";
  DROP TYPE "public"."enum__prayers_v_blocks_card_grid_variant";
  DROP TYPE "public"."enum__prayers_v_blocks_card_grid_header_align";
  DROP TYPE "public"."enum__prayers_v_blocks_card_grid_background";
  DROP TYPE "public"."enum__prayers_v_blocks_quote_banner_variant";
  DROP TYPE "public"."enum__prayers_v_blocks_quote_banner_cta_type";
  DROP TYPE "public"."enum__prayers_v_blocks_quote_banner_cta_appearance";
  DROP TYPE "public"."enum__prayers_v_blocks_accelerators_items_link_type";
  DROP TYPE "public"."enum__prayers_v_blocks_accelerators_header_align";
  DROP TYPE "public"."enum__prayers_v_blocks_posts_feed_filter_items_kind";
  DROP TYPE "public"."enum__prayers_v_blocks_posts_feed_variant";
  DROP TYPE "public"."enum__prayers_v_blocks_posts_feed_header_align";
  DROP TYPE "public"."enum__prayers_v_blocks_posts_feed_collection";
  DROP TYPE "public"."enum__prayers_v_blocks_posts_feed_source";
  DROP TYPE "public"."enum__prayers_v_blocks_posts_feed_kind";
  DROP TYPE "public"."enum__prayers_v_blocks_posts_feed_filter_style";
  DROP TYPE "public"."enum__prayers_v_blocks_posts_feed_more_link_type";
  DROP TYPE "public"."enum__prayers_v_blocks_gallery_variant";
  DROP TYPE "public"."enum__prayers_v_blocks_history_grid_title_tone";
  DROP TYPE "public"."enum__prayers_v_blocks_people_grid_variant";
  DROP TYPE "public"."enum__prayers_v_blocks_people_grid_source";
  DROP TYPE "public"."enum__prayers_v_blocks_people_grid_group";
  DROP TYPE "public"."enum__prayers_v_blocks_data_table_header_align";
  DROP TYPE "public"."enum__prayers_v_blocks_data_table_variant";
  DROP TYPE "public"."enum__prayers_v_blocks_department_grid_header_align";
  DROP TYPE "public"."enum__prayers_v_blocks_department_grid_source";
  DROP TYPE "public"."enum__prayers_v_blocks_process_steps_header_align";
  DROP TYPE "public"."enum__prayers_v_blocks_figure_variant";
  DROP TYPE "public"."enum__prayers_v_blocks_region_map_header_align";
  DROP TYPE "public"."enum__prayers_v_version_status";
  DROP TYPE "public"."enum__prayers_v_published_locale";
  DROP TYPE "public"."enum_departments_blocks_posts_feed_collection";
  DROP TYPE "public"."enum__departments_v_blocks_posts_feed_collection";
  DROP TYPE "public"."enum_hubs_blocks_posts_feed_collection";
  DROP TYPE "public"."enum__hubs_v_blocks_posts_feed_collection";
  DROP TYPE "public"."enum_membership_tiers_blocks_posts_feed_collection";`)
}
