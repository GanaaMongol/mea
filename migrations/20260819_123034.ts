import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('mn', 'en');
  CREATE TYPE "public"."enum_pages_blocks_page_banner_links_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_page_banner_links_appearance" AS ENUM('default', 'primary', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_page_banner_variant" AS ENUM('hub', 'vision', 'dept', 'deptDetail', 'news', 'region', 'imageOnly', 'hubGradient');
  CREATE TYPE "public"."enum_pages_blocks_page_banner_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_section_tabs_items_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_section_tabs_variant" AS ENUM('dept', 'bar', 'cap');
  CREATE TYPE "public"."enum_pages_blocks_section_tabs_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_rich_text_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_rich_text_width" AS ENUM('narrow', 'wide');
  CREATE TYPE "public"."enum_pages_blocks_rich_text_background" AS ENUM('none', 'white', 'warm', 'article');
  CREATE TYPE "public"."enum_pages_blocks_card_grid_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_card_grid_variant" AS ENUM('info', 'mission', 'ack', 'step');
  CREATE TYPE "public"."enum_pages_blocks_card_grid_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_card_grid_background" AS ENUM('warm', 'white');
  CREATE TYPE "public"."enum_pages_blocks_quote_banner_variant" AS ENUM('quote', 'cta', 'dept', 'visionGoal');
  CREATE TYPE "public"."enum_pages_blocks_quote_banner_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_quote_banner_cta_appearance" AS ENUM('default', 'primary', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_accelerators_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_accelerators_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_posts_feed_filter_items_kind" AS ENUM('all', 'news', 'article');
  CREATE TYPE "public"."enum_pages_blocks_posts_feed_variant" AS ENUM('plain', 'bordered', 'related');
  CREATE TYPE "public"."enum_pages_blocks_posts_feed_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_posts_feed_source" AS ENUM('auto', 'manual');
  CREATE TYPE "public"."enum_pages_blocks_posts_feed_kind" AS ENUM('all', 'news', 'article');
  CREATE TYPE "public"."enum_pages_blocks_posts_feed_filter_style" AS ENUM('buttons', 'tabs');
  CREATE TYPE "public"."enum_pages_blocks_posts_feed_more_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_gallery_variant" AS ENUM('mosaic', 'carousel', 'grid');
  CREATE TYPE "public"."enum_pages_blocks_history_grid_title_tone" AS ENUM('primary', 'neutral');
  CREATE TYPE "public"."enum_pages_blocks_people_grid_variant" AS ENUM('board', 'regionTeam');
  CREATE TYPE "public"."enum_pages_blocks_people_grid_source" AS ENUM('group', 'manual');
  CREATE TYPE "public"."enum_pages_blocks_people_grid_group" AS ENUM('leadership', 'board', 'team', 'region');
  CREATE TYPE "public"."enum_pages_blocks_data_table_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_data_table_variant" AS ENUM('region', 'plain', 'list');
  CREATE TYPE "public"."enum_pages_blocks_department_grid_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_department_grid_source" AS ENUM('auto', 'manual');
  CREATE TYPE "public"."enum_pages_blocks_process_steps_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_blocks_figure_variant" AS ENUM('map', 'wide');
  CREATE TYPE "public"."enum_pages_blocks_region_map_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_blocks_page_banner_links_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_page_banner_links_appearance" AS ENUM('default', 'primary', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_page_banner_variant" AS ENUM('hub', 'vision', 'dept', 'deptDetail', 'news', 'region', 'imageOnly', 'hubGradient');
  CREATE TYPE "public"."enum__pages_v_blocks_page_banner_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_section_tabs_items_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_section_tabs_variant" AS ENUM('dept', 'bar', 'cap');
  CREATE TYPE "public"."enum__pages_v_blocks_section_tabs_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_rich_text_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_rich_text_width" AS ENUM('narrow', 'wide');
  CREATE TYPE "public"."enum__pages_v_blocks_rich_text_background" AS ENUM('none', 'white', 'warm', 'article');
  CREATE TYPE "public"."enum__pages_v_blocks_card_grid_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_card_grid_variant" AS ENUM('info', 'mission', 'ack', 'step');
  CREATE TYPE "public"."enum__pages_v_blocks_card_grid_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_card_grid_background" AS ENUM('warm', 'white');
  CREATE TYPE "public"."enum__pages_v_blocks_quote_banner_variant" AS ENUM('quote', 'cta', 'dept', 'visionGoal');
  CREATE TYPE "public"."enum__pages_v_blocks_quote_banner_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_quote_banner_cta_appearance" AS ENUM('default', 'primary', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_accelerators_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_accelerators_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_posts_feed_filter_items_kind" AS ENUM('all', 'news', 'article');
  CREATE TYPE "public"."enum__pages_v_blocks_posts_feed_variant" AS ENUM('plain', 'bordered', 'related');
  CREATE TYPE "public"."enum__pages_v_blocks_posts_feed_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_posts_feed_source" AS ENUM('auto', 'manual');
  CREATE TYPE "public"."enum__pages_v_blocks_posts_feed_kind" AS ENUM('all', 'news', 'article');
  CREATE TYPE "public"."enum__pages_v_blocks_posts_feed_filter_style" AS ENUM('buttons', 'tabs');
  CREATE TYPE "public"."enum__pages_v_blocks_posts_feed_more_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_variant" AS ENUM('mosaic', 'carousel', 'grid');
  CREATE TYPE "public"."enum__pages_v_blocks_history_grid_title_tone" AS ENUM('primary', 'neutral');
  CREATE TYPE "public"."enum__pages_v_blocks_people_grid_variant" AS ENUM('board', 'regionTeam');
  CREATE TYPE "public"."enum__pages_v_blocks_people_grid_source" AS ENUM('group', 'manual');
  CREATE TYPE "public"."enum__pages_v_blocks_people_grid_group" AS ENUM('leadership', 'board', 'team', 'region');
  CREATE TYPE "public"."enum__pages_v_blocks_data_table_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_data_table_variant" AS ENUM('region', 'plain', 'list');
  CREATE TYPE "public"."enum__pages_v_blocks_department_grid_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_department_grid_source" AS ENUM('auto', 'manual');
  CREATE TYPE "public"."enum__pages_v_blocks_process_steps_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__pages_v_blocks_figure_variant" AS ENUM('map', 'wide');
  CREATE TYPE "public"."enum__pages_v_blocks_region_map_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_published_locale" AS ENUM('mn', 'en');
  CREATE TYPE "public"."enum_posts_blocks_page_banner_links_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_posts_blocks_page_banner_links_appearance" AS ENUM('default', 'primary', 'outline');
  CREATE TYPE "public"."enum_posts_blocks_page_banner_variant" AS ENUM('hub', 'vision', 'dept', 'deptDetail', 'news', 'region', 'imageOnly', 'hubGradient');
  CREATE TYPE "public"."enum_posts_blocks_page_banner_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_posts_blocks_section_tabs_items_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_posts_blocks_section_tabs_variant" AS ENUM('dept', 'bar', 'cap');
  CREATE TYPE "public"."enum_posts_blocks_section_tabs_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_posts_blocks_rich_text_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_posts_blocks_rich_text_width" AS ENUM('narrow', 'wide');
  CREATE TYPE "public"."enum_posts_blocks_rich_text_background" AS ENUM('none', 'white', 'warm', 'article');
  CREATE TYPE "public"."enum_posts_blocks_card_grid_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_posts_blocks_card_grid_variant" AS ENUM('info', 'mission', 'ack', 'step');
  CREATE TYPE "public"."enum_posts_blocks_card_grid_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_posts_blocks_card_grid_background" AS ENUM('warm', 'white');
  CREATE TYPE "public"."enum_posts_blocks_quote_banner_variant" AS ENUM('quote', 'cta', 'dept', 'visionGoal');
  CREATE TYPE "public"."enum_posts_blocks_quote_banner_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_posts_blocks_quote_banner_cta_appearance" AS ENUM('default', 'primary', 'outline');
  CREATE TYPE "public"."enum_posts_blocks_accelerators_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_posts_blocks_accelerators_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_posts_blocks_posts_feed_filter_items_kind" AS ENUM('all', 'news', 'article');
  CREATE TYPE "public"."enum_posts_blocks_posts_feed_variant" AS ENUM('plain', 'bordered', 'related');
  CREATE TYPE "public"."enum_posts_blocks_posts_feed_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_posts_blocks_posts_feed_source" AS ENUM('auto', 'manual');
  CREATE TYPE "public"."enum_posts_blocks_posts_feed_kind" AS ENUM('all', 'news', 'article');
  CREATE TYPE "public"."enum_posts_blocks_posts_feed_filter_style" AS ENUM('buttons', 'tabs');
  CREATE TYPE "public"."enum_posts_blocks_posts_feed_more_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_posts_blocks_gallery_variant" AS ENUM('mosaic', 'carousel', 'grid');
  CREATE TYPE "public"."enum_posts_blocks_history_grid_title_tone" AS ENUM('primary', 'neutral');
  CREATE TYPE "public"."enum_posts_blocks_people_grid_variant" AS ENUM('board', 'regionTeam');
  CREATE TYPE "public"."enum_posts_blocks_people_grid_source" AS ENUM('group', 'manual');
  CREATE TYPE "public"."enum_posts_blocks_people_grid_group" AS ENUM('leadership', 'board', 'team', 'region');
  CREATE TYPE "public"."enum_posts_blocks_data_table_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_posts_blocks_data_table_variant" AS ENUM('region', 'plain', 'list');
  CREATE TYPE "public"."enum_posts_blocks_department_grid_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_posts_blocks_department_grid_source" AS ENUM('auto', 'manual');
  CREATE TYPE "public"."enum_posts_blocks_process_steps_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_posts_blocks_figure_variant" AS ENUM('map', 'wide');
  CREATE TYPE "public"."enum_posts_blocks_region_map_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_posts_kind" AS ENUM('news', 'article');
  CREATE TYPE "public"."enum_posts_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_blocks_page_banner_links_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__posts_v_blocks_page_banner_links_appearance" AS ENUM('default', 'primary', 'outline');
  CREATE TYPE "public"."enum__posts_v_blocks_page_banner_variant" AS ENUM('hub', 'vision', 'dept', 'deptDetail', 'news', 'region', 'imageOnly', 'hubGradient');
  CREATE TYPE "public"."enum__posts_v_blocks_page_banner_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__posts_v_blocks_section_tabs_items_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__posts_v_blocks_section_tabs_variant" AS ENUM('dept', 'bar', 'cap');
  CREATE TYPE "public"."enum__posts_v_blocks_section_tabs_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__posts_v_blocks_rich_text_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__posts_v_blocks_rich_text_width" AS ENUM('narrow', 'wide');
  CREATE TYPE "public"."enum__posts_v_blocks_rich_text_background" AS ENUM('none', 'white', 'warm', 'article');
  CREATE TYPE "public"."enum__posts_v_blocks_card_grid_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__posts_v_blocks_card_grid_variant" AS ENUM('info', 'mission', 'ack', 'step');
  CREATE TYPE "public"."enum__posts_v_blocks_card_grid_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__posts_v_blocks_card_grid_background" AS ENUM('warm', 'white');
  CREATE TYPE "public"."enum__posts_v_blocks_quote_banner_variant" AS ENUM('quote', 'cta', 'dept', 'visionGoal');
  CREATE TYPE "public"."enum__posts_v_blocks_quote_banner_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__posts_v_blocks_quote_banner_cta_appearance" AS ENUM('default', 'primary', 'outline');
  CREATE TYPE "public"."enum__posts_v_blocks_accelerators_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__posts_v_blocks_accelerators_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__posts_v_blocks_posts_feed_filter_items_kind" AS ENUM('all', 'news', 'article');
  CREATE TYPE "public"."enum__posts_v_blocks_posts_feed_variant" AS ENUM('plain', 'bordered', 'related');
  CREATE TYPE "public"."enum__posts_v_blocks_posts_feed_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__posts_v_blocks_posts_feed_source" AS ENUM('auto', 'manual');
  CREATE TYPE "public"."enum__posts_v_blocks_posts_feed_kind" AS ENUM('all', 'news', 'article');
  CREATE TYPE "public"."enum__posts_v_blocks_posts_feed_filter_style" AS ENUM('buttons', 'tabs');
  CREATE TYPE "public"."enum__posts_v_blocks_posts_feed_more_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__posts_v_blocks_gallery_variant" AS ENUM('mosaic', 'carousel', 'grid');
  CREATE TYPE "public"."enum__posts_v_blocks_history_grid_title_tone" AS ENUM('primary', 'neutral');
  CREATE TYPE "public"."enum__posts_v_blocks_people_grid_variant" AS ENUM('board', 'regionTeam');
  CREATE TYPE "public"."enum__posts_v_blocks_people_grid_source" AS ENUM('group', 'manual');
  CREATE TYPE "public"."enum__posts_v_blocks_people_grid_group" AS ENUM('leadership', 'board', 'team', 'region');
  CREATE TYPE "public"."enum__posts_v_blocks_data_table_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__posts_v_blocks_data_table_variant" AS ENUM('region', 'plain', 'list');
  CREATE TYPE "public"."enum__posts_v_blocks_department_grid_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__posts_v_blocks_department_grid_source" AS ENUM('auto', 'manual');
  CREATE TYPE "public"."enum__posts_v_blocks_process_steps_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__posts_v_blocks_figure_variant" AS ENUM('map', 'wide');
  CREATE TYPE "public"."enum__posts_v_blocks_region_map_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__posts_v_version_kind" AS ENUM('news', 'article');
  CREATE TYPE "public"."enum__posts_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_published_locale" AS ENUM('mn', 'en');
  CREATE TYPE "public"."enum_departments_blocks_page_banner_links_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_departments_blocks_page_banner_links_appearance" AS ENUM('default', 'primary', 'outline');
  CREATE TYPE "public"."enum_departments_blocks_page_banner_variant" AS ENUM('hub', 'vision', 'dept', 'deptDetail', 'news', 'region', 'imageOnly', 'hubGradient');
  CREATE TYPE "public"."enum_departments_blocks_page_banner_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_departments_blocks_section_tabs_items_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_departments_blocks_section_tabs_variant" AS ENUM('dept', 'bar', 'cap');
  CREATE TYPE "public"."enum_departments_blocks_section_tabs_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_departments_blocks_rich_text_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_departments_blocks_rich_text_width" AS ENUM('narrow', 'wide');
  CREATE TYPE "public"."enum_departments_blocks_rich_text_background" AS ENUM('none', 'white', 'warm', 'article');
  CREATE TYPE "public"."enum_departments_blocks_card_grid_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_departments_blocks_card_grid_variant" AS ENUM('info', 'mission', 'ack', 'step');
  CREATE TYPE "public"."enum_departments_blocks_card_grid_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_departments_blocks_card_grid_background" AS ENUM('warm', 'white');
  CREATE TYPE "public"."enum_departments_blocks_quote_banner_variant" AS ENUM('quote', 'cta', 'dept', 'visionGoal');
  CREATE TYPE "public"."enum_departments_blocks_quote_banner_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_departments_blocks_quote_banner_cta_appearance" AS ENUM('default', 'primary', 'outline');
  CREATE TYPE "public"."enum_departments_blocks_accelerators_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_departments_blocks_accelerators_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_departments_blocks_posts_feed_filter_items_kind" AS ENUM('all', 'news', 'article');
  CREATE TYPE "public"."enum_departments_blocks_posts_feed_variant" AS ENUM('plain', 'bordered', 'related');
  CREATE TYPE "public"."enum_departments_blocks_posts_feed_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_departments_blocks_posts_feed_source" AS ENUM('auto', 'manual');
  CREATE TYPE "public"."enum_departments_blocks_posts_feed_kind" AS ENUM('all', 'news', 'article');
  CREATE TYPE "public"."enum_departments_blocks_posts_feed_filter_style" AS ENUM('buttons', 'tabs');
  CREATE TYPE "public"."enum_departments_blocks_posts_feed_more_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_departments_blocks_gallery_variant" AS ENUM('mosaic', 'carousel', 'grid');
  CREATE TYPE "public"."enum_departments_blocks_history_grid_title_tone" AS ENUM('primary', 'neutral');
  CREATE TYPE "public"."enum_departments_blocks_people_grid_variant" AS ENUM('board', 'regionTeam');
  CREATE TYPE "public"."enum_departments_blocks_people_grid_source" AS ENUM('group', 'manual');
  CREATE TYPE "public"."enum_departments_blocks_people_grid_group" AS ENUM('leadership', 'board', 'team', 'region');
  CREATE TYPE "public"."enum_departments_blocks_data_table_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_departments_blocks_data_table_variant" AS ENUM('region', 'plain', 'list');
  CREATE TYPE "public"."enum_departments_blocks_department_grid_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_departments_blocks_department_grid_source" AS ENUM('auto', 'manual');
  CREATE TYPE "public"."enum_departments_blocks_process_steps_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_departments_blocks_figure_variant" AS ENUM('map', 'wide');
  CREATE TYPE "public"."enum_departments_blocks_region_map_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_departments_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__departments_v_blocks_page_banner_links_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__departments_v_blocks_page_banner_links_appearance" AS ENUM('default', 'primary', 'outline');
  CREATE TYPE "public"."enum__departments_v_blocks_page_banner_variant" AS ENUM('hub', 'vision', 'dept', 'deptDetail', 'news', 'region', 'imageOnly', 'hubGradient');
  CREATE TYPE "public"."enum__departments_v_blocks_page_banner_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__departments_v_blocks_section_tabs_items_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__departments_v_blocks_section_tabs_variant" AS ENUM('dept', 'bar', 'cap');
  CREATE TYPE "public"."enum__departments_v_blocks_section_tabs_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__departments_v_blocks_rich_text_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__departments_v_blocks_rich_text_width" AS ENUM('narrow', 'wide');
  CREATE TYPE "public"."enum__departments_v_blocks_rich_text_background" AS ENUM('none', 'white', 'warm', 'article');
  CREATE TYPE "public"."enum__departments_v_blocks_card_grid_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__departments_v_blocks_card_grid_variant" AS ENUM('info', 'mission', 'ack', 'step');
  CREATE TYPE "public"."enum__departments_v_blocks_card_grid_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__departments_v_blocks_card_grid_background" AS ENUM('warm', 'white');
  CREATE TYPE "public"."enum__departments_v_blocks_quote_banner_variant" AS ENUM('quote', 'cta', 'dept', 'visionGoal');
  CREATE TYPE "public"."enum__departments_v_blocks_quote_banner_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__departments_v_blocks_quote_banner_cta_appearance" AS ENUM('default', 'primary', 'outline');
  CREATE TYPE "public"."enum__departments_v_blocks_accelerators_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__departments_v_blocks_accelerators_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__departments_v_blocks_posts_feed_filter_items_kind" AS ENUM('all', 'news', 'article');
  CREATE TYPE "public"."enum__departments_v_blocks_posts_feed_variant" AS ENUM('plain', 'bordered', 'related');
  CREATE TYPE "public"."enum__departments_v_blocks_posts_feed_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__departments_v_blocks_posts_feed_source" AS ENUM('auto', 'manual');
  CREATE TYPE "public"."enum__departments_v_blocks_posts_feed_kind" AS ENUM('all', 'news', 'article');
  CREATE TYPE "public"."enum__departments_v_blocks_posts_feed_filter_style" AS ENUM('buttons', 'tabs');
  CREATE TYPE "public"."enum__departments_v_blocks_posts_feed_more_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__departments_v_blocks_gallery_variant" AS ENUM('mosaic', 'carousel', 'grid');
  CREATE TYPE "public"."enum__departments_v_blocks_history_grid_title_tone" AS ENUM('primary', 'neutral');
  CREATE TYPE "public"."enum__departments_v_blocks_people_grid_variant" AS ENUM('board', 'regionTeam');
  CREATE TYPE "public"."enum__departments_v_blocks_people_grid_source" AS ENUM('group', 'manual');
  CREATE TYPE "public"."enum__departments_v_blocks_people_grid_group" AS ENUM('leadership', 'board', 'team', 'region');
  CREATE TYPE "public"."enum__departments_v_blocks_data_table_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__departments_v_blocks_data_table_variant" AS ENUM('region', 'plain', 'list');
  CREATE TYPE "public"."enum__departments_v_blocks_department_grid_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__departments_v_blocks_department_grid_source" AS ENUM('auto', 'manual');
  CREATE TYPE "public"."enum__departments_v_blocks_process_steps_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__departments_v_blocks_figure_variant" AS ENUM('map', 'wide');
  CREATE TYPE "public"."enum__departments_v_blocks_region_map_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__departments_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__departments_v_published_locale" AS ENUM('mn', 'en');
  CREATE TYPE "public"."enum_hubs_blocks_page_banner_links_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_hubs_blocks_page_banner_links_appearance" AS ENUM('default', 'primary', 'outline');
  CREATE TYPE "public"."enum_hubs_blocks_page_banner_variant" AS ENUM('hub', 'vision', 'dept', 'deptDetail', 'news', 'region', 'imageOnly', 'hubGradient');
  CREATE TYPE "public"."enum_hubs_blocks_page_banner_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_hubs_blocks_section_tabs_items_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_hubs_blocks_section_tabs_variant" AS ENUM('dept', 'bar', 'cap');
  CREATE TYPE "public"."enum_hubs_blocks_section_tabs_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_hubs_blocks_rich_text_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_hubs_blocks_rich_text_width" AS ENUM('narrow', 'wide');
  CREATE TYPE "public"."enum_hubs_blocks_rich_text_background" AS ENUM('none', 'white', 'warm', 'article');
  CREATE TYPE "public"."enum_hubs_blocks_card_grid_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_hubs_blocks_card_grid_variant" AS ENUM('info', 'mission', 'ack', 'step');
  CREATE TYPE "public"."enum_hubs_blocks_card_grid_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_hubs_blocks_card_grid_background" AS ENUM('warm', 'white');
  CREATE TYPE "public"."enum_hubs_blocks_quote_banner_variant" AS ENUM('quote', 'cta', 'dept', 'visionGoal');
  CREATE TYPE "public"."enum_hubs_blocks_quote_banner_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_hubs_blocks_quote_banner_cta_appearance" AS ENUM('default', 'primary', 'outline');
  CREATE TYPE "public"."enum_hubs_blocks_accelerators_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_hubs_blocks_accelerators_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_hubs_blocks_posts_feed_filter_items_kind" AS ENUM('all', 'news', 'article');
  CREATE TYPE "public"."enum_hubs_blocks_posts_feed_variant" AS ENUM('plain', 'bordered', 'related');
  CREATE TYPE "public"."enum_hubs_blocks_posts_feed_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_hubs_blocks_posts_feed_source" AS ENUM('auto', 'manual');
  CREATE TYPE "public"."enum_hubs_blocks_posts_feed_kind" AS ENUM('all', 'news', 'article');
  CREATE TYPE "public"."enum_hubs_blocks_posts_feed_filter_style" AS ENUM('buttons', 'tabs');
  CREATE TYPE "public"."enum_hubs_blocks_posts_feed_more_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_hubs_blocks_gallery_variant" AS ENUM('mosaic', 'carousel', 'grid');
  CREATE TYPE "public"."enum_hubs_blocks_history_grid_title_tone" AS ENUM('primary', 'neutral');
  CREATE TYPE "public"."enum_hubs_blocks_people_grid_variant" AS ENUM('board', 'regionTeam');
  CREATE TYPE "public"."enum_hubs_blocks_people_grid_source" AS ENUM('group', 'manual');
  CREATE TYPE "public"."enum_hubs_blocks_people_grid_group" AS ENUM('leadership', 'board', 'team', 'region');
  CREATE TYPE "public"."enum_hubs_blocks_data_table_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_hubs_blocks_data_table_variant" AS ENUM('region', 'plain', 'list');
  CREATE TYPE "public"."enum_hubs_blocks_department_grid_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_hubs_blocks_department_grid_source" AS ENUM('auto', 'manual');
  CREATE TYPE "public"."enum_hubs_blocks_process_steps_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_hubs_blocks_figure_variant" AS ENUM('map', 'wide');
  CREATE TYPE "public"."enum_hubs_blocks_region_map_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_hubs_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__hubs_v_blocks_page_banner_links_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__hubs_v_blocks_page_banner_links_appearance" AS ENUM('default', 'primary', 'outline');
  CREATE TYPE "public"."enum__hubs_v_blocks_page_banner_variant" AS ENUM('hub', 'vision', 'dept', 'deptDetail', 'news', 'region', 'imageOnly', 'hubGradient');
  CREATE TYPE "public"."enum__hubs_v_blocks_page_banner_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__hubs_v_blocks_section_tabs_items_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__hubs_v_blocks_section_tabs_variant" AS ENUM('dept', 'bar', 'cap');
  CREATE TYPE "public"."enum__hubs_v_blocks_section_tabs_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__hubs_v_blocks_rich_text_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__hubs_v_blocks_rich_text_width" AS ENUM('narrow', 'wide');
  CREATE TYPE "public"."enum__hubs_v_blocks_rich_text_background" AS ENUM('none', 'white', 'warm', 'article');
  CREATE TYPE "public"."enum__hubs_v_blocks_card_grid_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__hubs_v_blocks_card_grid_variant" AS ENUM('info', 'mission', 'ack', 'step');
  CREATE TYPE "public"."enum__hubs_v_blocks_card_grid_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__hubs_v_blocks_card_grid_background" AS ENUM('warm', 'white');
  CREATE TYPE "public"."enum__hubs_v_blocks_quote_banner_variant" AS ENUM('quote', 'cta', 'dept', 'visionGoal');
  CREATE TYPE "public"."enum__hubs_v_blocks_quote_banner_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__hubs_v_blocks_quote_banner_cta_appearance" AS ENUM('default', 'primary', 'outline');
  CREATE TYPE "public"."enum__hubs_v_blocks_accelerators_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__hubs_v_blocks_accelerators_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__hubs_v_blocks_posts_feed_filter_items_kind" AS ENUM('all', 'news', 'article');
  CREATE TYPE "public"."enum__hubs_v_blocks_posts_feed_variant" AS ENUM('plain', 'bordered', 'related');
  CREATE TYPE "public"."enum__hubs_v_blocks_posts_feed_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__hubs_v_blocks_posts_feed_source" AS ENUM('auto', 'manual');
  CREATE TYPE "public"."enum__hubs_v_blocks_posts_feed_kind" AS ENUM('all', 'news', 'article');
  CREATE TYPE "public"."enum__hubs_v_blocks_posts_feed_filter_style" AS ENUM('buttons', 'tabs');
  CREATE TYPE "public"."enum__hubs_v_blocks_posts_feed_more_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__hubs_v_blocks_gallery_variant" AS ENUM('mosaic', 'carousel', 'grid');
  CREATE TYPE "public"."enum__hubs_v_blocks_history_grid_title_tone" AS ENUM('primary', 'neutral');
  CREATE TYPE "public"."enum__hubs_v_blocks_people_grid_variant" AS ENUM('board', 'regionTeam');
  CREATE TYPE "public"."enum__hubs_v_blocks_people_grid_source" AS ENUM('group', 'manual');
  CREATE TYPE "public"."enum__hubs_v_blocks_people_grid_group" AS ENUM('leadership', 'board', 'team', 'region');
  CREATE TYPE "public"."enum__hubs_v_blocks_data_table_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__hubs_v_blocks_data_table_variant" AS ENUM('region', 'plain', 'list');
  CREATE TYPE "public"."enum__hubs_v_blocks_department_grid_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__hubs_v_blocks_department_grid_source" AS ENUM('auto', 'manual');
  CREATE TYPE "public"."enum__hubs_v_blocks_process_steps_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__hubs_v_blocks_figure_variant" AS ENUM('map', 'wide');
  CREATE TYPE "public"."enum__hubs_v_blocks_region_map_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__hubs_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__hubs_v_published_locale" AS ENUM('mn', 'en');
  CREATE TYPE "public"."enum_board_members_group" AS ENUM('leadership', 'board', 'team', 'region');
  CREATE TYPE "public"."enum_membership_tiers_blocks_page_banner_links_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_membership_tiers_blocks_page_banner_links_appearance" AS ENUM('default', 'primary', 'outline');
  CREATE TYPE "public"."enum_membership_tiers_blocks_page_banner_variant" AS ENUM('hub', 'vision', 'dept', 'deptDetail', 'news', 'region', 'imageOnly', 'hubGradient');
  CREATE TYPE "public"."enum_membership_tiers_blocks_page_banner_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_membership_tiers_blocks_section_tabs_items_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_membership_tiers_blocks_section_tabs_variant" AS ENUM('dept', 'bar', 'cap');
  CREATE TYPE "public"."enum_membership_tiers_blocks_section_tabs_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_membership_tiers_blocks_rich_text_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_membership_tiers_blocks_rich_text_width" AS ENUM('narrow', 'wide');
  CREATE TYPE "public"."enum_membership_tiers_blocks_rich_text_background" AS ENUM('none', 'white', 'warm', 'article');
  CREATE TYPE "public"."enum_membership_tiers_blocks_card_grid_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_membership_tiers_blocks_card_grid_variant" AS ENUM('info', 'mission', 'ack', 'step');
  CREATE TYPE "public"."enum_membership_tiers_blocks_card_grid_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_membership_tiers_blocks_card_grid_background" AS ENUM('warm', 'white');
  CREATE TYPE "public"."enum_membership_tiers_blocks_quote_banner_variant" AS ENUM('quote', 'cta', 'dept', 'visionGoal');
  CREATE TYPE "public"."enum_membership_tiers_blocks_quote_banner_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_membership_tiers_blocks_quote_banner_cta_appearance" AS ENUM('default', 'primary', 'outline');
  CREATE TYPE "public"."enum_membership_tiers_blocks_accelerators_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_membership_tiers_blocks_accelerators_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_membership_tiers_blocks_posts_feed_filter_items_kind" AS ENUM('all', 'news', 'article');
  CREATE TYPE "public"."enum_membership_tiers_blocks_posts_feed_variant" AS ENUM('plain', 'bordered', 'related');
  CREATE TYPE "public"."enum_membership_tiers_blocks_posts_feed_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_membership_tiers_blocks_posts_feed_source" AS ENUM('auto', 'manual');
  CREATE TYPE "public"."enum_membership_tiers_blocks_posts_feed_kind" AS ENUM('all', 'news', 'article');
  CREATE TYPE "public"."enum_membership_tiers_blocks_posts_feed_filter_style" AS ENUM('buttons', 'tabs');
  CREATE TYPE "public"."enum_membership_tiers_blocks_posts_feed_more_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_membership_tiers_blocks_gallery_variant" AS ENUM('mosaic', 'carousel', 'grid');
  CREATE TYPE "public"."enum_membership_tiers_blocks_history_grid_title_tone" AS ENUM('primary', 'neutral');
  CREATE TYPE "public"."enum_membership_tiers_blocks_people_grid_variant" AS ENUM('board', 'regionTeam');
  CREATE TYPE "public"."enum_membership_tiers_blocks_people_grid_source" AS ENUM('group', 'manual');
  CREATE TYPE "public"."enum_membership_tiers_blocks_people_grid_group" AS ENUM('leadership', 'board', 'team', 'region');
  CREATE TYPE "public"."enum_membership_tiers_blocks_data_table_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_membership_tiers_blocks_data_table_variant" AS ENUM('region', 'plain', 'list');
  CREATE TYPE "public"."enum_membership_tiers_blocks_department_grid_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_membership_tiers_blocks_department_grid_source" AS ENUM('auto', 'manual');
  CREATE TYPE "public"."enum_membership_tiers_blocks_process_steps_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_membership_tiers_blocks_figure_variant" AS ENUM('map', 'wide');
  CREATE TYPE "public"."enum_membership_tiers_blocks_region_map_header_align" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_members_status" AS ENUM('pending', 'approved', 'suspended');
  CREATE TYPE "public"."enum_feedback_status" AS ENUM('new', 'read', 'answered', 'archived');
  CREATE TYPE "public"."enum_theme_font_display" AS ENUM('playfair', 'manrope', 'inter');
  CREATE TYPE "public"."enum_theme_font_body" AS ENUM('playfair', 'manrope', 'inter');
  CREATE TYPE "public"."enum_theme_font_ui" AS ENUM('playfair', 'manrope', 'inter');
  CREATE TYPE "public"."enum_site_settings_announcement_links_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_site_settings_header_nav_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_site_settings_footer_top_links_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_site_settings_footer_nav_groups_links_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_site_settings_footer_social_links_platform" AS ENUM('facebook', 'instagram', 'youtube');
  CREATE TYPE "public"."enum_site_settings_footer_legal_links_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_site_settings_announcement_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_site_settings_header_login_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_site_settings_auth_login_forgot_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_site_settings_auth_login_register_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_site_settings_auth_login_back_link_type" AS ENUM('reference', 'custom');
  CREATE TABLE "pages_blocks_page_banner_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_pages_blocks_page_banner_links_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar,
  	"appearance" "enum_pages_blocks_page_banner_links_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_page_banner_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_page_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_pages_blocks_page_banner_variant" DEFAULT 'hub',
  	"background_id" integer,
  	"watermark_id" integer,
  	"height" numeric,
  	"align" "enum_pages_blocks_page_banner_align" DEFAULT 'left',
  	"overlay" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_page_banner_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"tag" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_section_tabs_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_pages_blocks_section_tabs_items_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar
  );
  
  CREATE TABLE "pages_blocks_section_tabs_items_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_section_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_pages_blocks_section_tabs_variant" DEFAULT 'dept',
  	"align" "enum_pages_blocks_section_tabs_align" DEFAULT 'left',
  	"plain" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_pages_blocks_rich_text_header_align" DEFAULT 'left',
  	"width" "enum_pages_blocks_rich_text_width" DEFAULT 'narrow',
  	"background" "enum_pages_blocks_rich_text_background" DEFAULT 'none',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_rich_text_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_card_grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"badge" varchar,
  	"link_type" "enum_pages_blocks_card_grid_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "pages_blocks_card_grid_items_locales" (
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_card_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_pages_blocks_card_grid_variant" DEFAULT 'info',
  	"header_align" "enum_pages_blocks_card_grid_header_align" DEFAULT 'left',
  	"background" "enum_pages_blocks_card_grid_background" DEFAULT 'warm',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_card_grid_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_quote_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_pages_blocks_quote_banner_variant" DEFAULT 'quote',
  	"background_id" integer,
  	"watermark_id" integer,
  	"cta_type" "enum_pages_blocks_quote_banner_cta_type" DEFAULT 'reference',
  	"cta_new_tab" boolean,
  	"cta_url" varchar,
  	"cta_appearance" "enum_pages_blocks_quote_banner_cta_appearance" DEFAULT 'default',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_quote_banner_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"author" varchar,
  	"cta_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_accelerators_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"link_type" "enum_pages_blocks_accelerators_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "pages_blocks_accelerators_items_locales" (
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_accelerators" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_pages_blocks_accelerators_header_align" DEFAULT 'left',
  	"numbered" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_accelerators_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_posts_feed_filter_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kind" "enum_pages_blocks_posts_feed_filter_items_kind" DEFAULT 'all'
  );
  
  CREATE TABLE "pages_blocks_posts_feed_filter_items_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_posts_feed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_pages_blocks_posts_feed_variant" DEFAULT 'plain',
  	"header_align" "enum_pages_blocks_posts_feed_header_align" DEFAULT 'left',
  	"source" "enum_pages_blocks_posts_feed_source" DEFAULT 'auto',
  	"limit" numeric DEFAULT 4,
  	"kind" "enum_pages_blocks_posts_feed_kind" DEFAULT 'all',
  	"filter_enabled" boolean DEFAULT false,
  	"filter_style" "enum_pages_blocks_posts_feed_filter_style" DEFAULT 'buttons',
  	"more_link_type" "enum_pages_blocks_posts_feed_more_link_type" DEFAULT 'reference',
  	"more_link_new_tab" boolean,
  	"more_link_url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_posts_feed_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"more_link_label" varchar,
  	"read_label" varchar DEFAULT 'Унших',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "pages_blocks_gallery_items_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_pages_blocks_gallery_variant" DEFAULT 'mosaic',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_values_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_values_list_items_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_values_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_values_list_locales" (
  	"title" varchar,
  	"verse" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_history_grid_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_history_grid_paragraphs_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_history_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title_tone" "enum_pages_blocks_history_grid_title_tone" DEFAULT 'primary',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_history_grid_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_stats_row_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_stats_row_items_locales" (
  	"number" varchar,
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_stats_row" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_highlighted_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_highlighted_text_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_timeline_items_lines" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_timeline_items_lines_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_timeline_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"year" varchar,
  	"active" boolean DEFAULT false
  );
  
  CREATE TABLE "pages_blocks_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_timeline_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_carousel_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "pages_blocks_carousel_slides_locales" (
  	"alt" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_people_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_pages_blocks_people_grid_variant" DEFAULT 'board',
  	"source" "enum_pages_blocks_people_grid_source" DEFAULT 'group',
  	"group" "enum_pages_blocks_people_grid_group" DEFAULT 'board',
  	"hub_id" integer,
  	"limit" numeric DEFAULT 12,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_people_grid_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_creed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_creed_locales" (
  	"title" varchar,
  	"intro" varchar,
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_section_intro" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_section_intro_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_data_table_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"column" numeric
  );
  
  CREATE TABLE "pages_blocks_data_table_filters_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_data_table_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_data_table_columns_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_data_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_data_table_rows_cells_locales" (
  	"value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_data_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_data_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_pages_blocks_data_table_header_align" DEFAULT 'left',
  	"variant" "enum_pages_blocks_data_table_variant" DEFAULT 'region',
  	"region_column" numeric,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_data_table_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_media_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_media_card_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_department_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_pages_blocks_department_grid_header_align" DEFAULT 'left',
  	"source" "enum_pages_blocks_department_grid_source" DEFAULT 'auto',
  	"limit" numeric DEFAULT 12,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_department_grid_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_contact_box" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"phone" varchar,
  	"email" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_contact_box_locales" (
  	"title" varchar DEFAULT 'Манай үйлчлэлтэй холбогдох:',
  	"person_name" varchar,
  	"person_role" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_contact_form_details_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar
  );
  
  CREATE TABLE "pages_blocks_contact_form_details_items_locales" (
  	"value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_contact_form_details" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pages_blocks_contact_form_details_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_contact_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_contact_form_locales" (
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
  
  CREATE TABLE "pages_blocks_process_steps_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar
  );
  
  CREATE TABLE "pages_blocks_process_steps_items_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_pages_blocks_process_steps_header_align" DEFAULT 'left',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_process_steps_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_figure" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"variant" "enum_pages_blocks_figure_variant" DEFAULT 'map',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_figure_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_region_map_regions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"path_id" varchar
  );
  
  CREATE TABLE "pages_blocks_region_map_regions_locales" (
  	"name" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_region_map" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_pages_blocks_region_map_header_align" DEFAULT 'left',
  	"link_to_table" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_region_map_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "pages_locales" (
  	"title" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"departments_id" integer,
  	"hubs_id" integer,
  	"membership_tiers_id" integer,
  	"board_members_id" integer
  );
  
  CREATE TABLE "_pages_v_blocks_page_banner_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__pages_v_blocks_page_banner_links_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar,
  	"appearance" "enum__pages_v_blocks_page_banner_links_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_page_banner_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_page_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__pages_v_blocks_page_banner_variant" DEFAULT 'hub',
  	"background_id" integer,
  	"watermark_id" integer,
  	"height" numeric,
  	"align" "enum__pages_v_blocks_page_banner_align" DEFAULT 'left',
  	"overlay" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_page_banner_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"tag" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_section_tabs_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__pages_v_blocks_section_tabs_items_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_section_tabs_items_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_section_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__pages_v_blocks_section_tabs_variant" DEFAULT 'dept',
  	"align" "enum__pages_v_blocks_section_tabs_align" DEFAULT 'left',
  	"plain" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__pages_v_blocks_rich_text_header_align" DEFAULT 'left',
  	"width" "enum__pages_v_blocks_rich_text_width" DEFAULT 'narrow',
  	"background" "enum__pages_v_blocks_rich_text_background" DEFAULT 'none',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_rich_text_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_card_grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"badge" varchar,
  	"link_type" "enum__pages_v_blocks_card_grid_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_card_grid_items_locales" (
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_card_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__pages_v_blocks_card_grid_variant" DEFAULT 'info',
  	"header_align" "enum__pages_v_blocks_card_grid_header_align" DEFAULT 'left',
  	"background" "enum__pages_v_blocks_card_grid_background" DEFAULT 'warm',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_card_grid_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_quote_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__pages_v_blocks_quote_banner_variant" DEFAULT 'quote',
  	"background_id" integer,
  	"watermark_id" integer,
  	"cta_type" "enum__pages_v_blocks_quote_banner_cta_type" DEFAULT 'reference',
  	"cta_new_tab" boolean,
  	"cta_url" varchar,
  	"cta_appearance" "enum__pages_v_blocks_quote_banner_cta_appearance" DEFAULT 'default',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_quote_banner_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"author" varchar,
  	"cta_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_accelerators_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"link_type" "enum__pages_v_blocks_accelerators_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_accelerators_items_locales" (
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_accelerators" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__pages_v_blocks_accelerators_header_align" DEFAULT 'left',
  	"numbered" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_accelerators_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_posts_feed_filter_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kind" "enum__pages_v_blocks_posts_feed_filter_items_kind" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_posts_feed_filter_items_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_posts_feed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__pages_v_blocks_posts_feed_variant" DEFAULT 'plain',
  	"header_align" "enum__pages_v_blocks_posts_feed_header_align" DEFAULT 'left',
  	"source" "enum__pages_v_blocks_posts_feed_source" DEFAULT 'auto',
  	"limit" numeric DEFAULT 4,
  	"kind" "enum__pages_v_blocks_posts_feed_kind" DEFAULT 'all',
  	"filter_enabled" boolean DEFAULT false,
  	"filter_style" "enum__pages_v_blocks_posts_feed_filter_style" DEFAULT 'buttons',
  	"more_link_type" "enum__pages_v_blocks_posts_feed_more_link_type" DEFAULT 'reference',
  	"more_link_new_tab" boolean,
  	"more_link_url" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_posts_feed_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"more_link_label" varchar,
  	"read_label" varchar DEFAULT 'Унших',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_gallery_items_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__pages_v_blocks_gallery_variant" DEFAULT 'mosaic',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_values_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_values_list_items_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_values_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_values_list_locales" (
  	"title" varchar,
  	"verse" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_history_grid_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_history_grid_paragraphs_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_history_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title_tone" "enum__pages_v_blocks_history_grid_title_tone" DEFAULT 'primary',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_history_grid_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_stats_row_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_stats_row_items_locales" (
  	"number" varchar,
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_stats_row" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_highlighted_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_highlighted_text_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_timeline_items_lines" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_timeline_items_lines_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_timeline_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"year" varchar,
  	"active" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_timeline_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_carousel_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_carousel_slides_locales" (
  	"alt" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_people_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__pages_v_blocks_people_grid_variant" DEFAULT 'board',
  	"source" "enum__pages_v_blocks_people_grid_source" DEFAULT 'group',
  	"group" "enum__pages_v_blocks_people_grid_group" DEFAULT 'board',
  	"hub_id" integer,
  	"limit" numeric DEFAULT 12,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_people_grid_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_creed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"background_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_creed_locales" (
  	"title" varchar,
  	"intro" varchar,
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_section_intro" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_section_intro_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_data_table_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"column" numeric,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_data_table_filters_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_data_table_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_data_table_columns_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_data_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_data_table_rows_cells_locales" (
  	"value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_data_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_data_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__pages_v_blocks_data_table_header_align" DEFAULT 'left',
  	"variant" "enum__pages_v_blocks_data_table_variant" DEFAULT 'region',
  	"region_column" numeric,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_data_table_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_media_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_media_card_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_department_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__pages_v_blocks_department_grid_header_align" DEFAULT 'left',
  	"source" "enum__pages_v_blocks_department_grid_source" DEFAULT 'auto',
  	"limit" numeric DEFAULT 12,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_department_grid_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_contact_box" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"phone" varchar,
  	"email" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_contact_box_locales" (
  	"title" varchar DEFAULT 'Манай үйлчлэлтэй холбогдох:',
  	"person_name" varchar,
  	"person_role" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_contact_form_details_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_contact_form_details_items_locales" (
  	"value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_contact_form_details" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_contact_form_details_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_contact_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_contact_form_locales" (
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
  
  CREATE TABLE "_pages_v_blocks_process_steps_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"number" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_process_steps_items_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__pages_v_blocks_process_steps_header_align" DEFAULT 'left',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_process_steps_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_figure" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"variant" "enum__pages_v_blocks_figure_variant" DEFAULT 'map',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_figure_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_region_map_regions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"path_id" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_region_map_regions_locales" (
  	"name" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_region_map" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__pages_v_blocks_region_map_header_align" DEFAULT 'left',
  	"link_to_table" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_region_map_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_slug" varchar,
  	"version_meta_image_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__pages_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_pages_v_locales" (
  	"version_title" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"departments_id" integer,
  	"hubs_id" integer,
  	"membership_tiers_id" integer,
  	"board_members_id" integer
  );
  
  CREATE TABLE "posts_blocks_page_banner_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_posts_blocks_page_banner_links_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar,
  	"appearance" "enum_posts_blocks_page_banner_links_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "posts_blocks_page_banner_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_page_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_posts_blocks_page_banner_variant" DEFAULT 'hub',
  	"background_id" integer,
  	"watermark_id" integer,
  	"height" numeric,
  	"align" "enum_posts_blocks_page_banner_align" DEFAULT 'left',
  	"overlay" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_page_banner_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"tag" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_section_tabs_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_posts_blocks_section_tabs_items_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar
  );
  
  CREATE TABLE "posts_blocks_section_tabs_items_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_section_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_posts_blocks_section_tabs_variant" DEFAULT 'dept',
  	"align" "enum_posts_blocks_section_tabs_align" DEFAULT 'left',
  	"plain" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_posts_blocks_rich_text_header_align" DEFAULT 'left',
  	"width" "enum_posts_blocks_rich_text_width" DEFAULT 'narrow',
  	"background" "enum_posts_blocks_rich_text_background" DEFAULT 'none',
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_rich_text_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_card_grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"badge" varchar,
  	"link_type" "enum_posts_blocks_card_grid_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "posts_blocks_card_grid_items_locales" (
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_card_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_posts_blocks_card_grid_variant" DEFAULT 'info',
  	"header_align" "enum_posts_blocks_card_grid_header_align" DEFAULT 'left',
  	"background" "enum_posts_blocks_card_grid_background" DEFAULT 'warm',
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_card_grid_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_quote_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_posts_blocks_quote_banner_variant" DEFAULT 'quote',
  	"background_id" integer,
  	"watermark_id" integer,
  	"cta_type" "enum_posts_blocks_quote_banner_cta_type" DEFAULT 'reference',
  	"cta_new_tab" boolean,
  	"cta_url" varchar,
  	"cta_appearance" "enum_posts_blocks_quote_banner_cta_appearance" DEFAULT 'default',
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_quote_banner_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"author" varchar,
  	"cta_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_accelerators_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"link_type" "enum_posts_blocks_accelerators_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "posts_blocks_accelerators_items_locales" (
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_accelerators" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_posts_blocks_accelerators_header_align" DEFAULT 'left',
  	"numbered" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_accelerators_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_posts_feed_filter_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kind" "enum_posts_blocks_posts_feed_filter_items_kind" DEFAULT 'all'
  );
  
  CREATE TABLE "posts_blocks_posts_feed_filter_items_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_posts_feed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_posts_blocks_posts_feed_variant" DEFAULT 'plain',
  	"header_align" "enum_posts_blocks_posts_feed_header_align" DEFAULT 'left',
  	"source" "enum_posts_blocks_posts_feed_source" DEFAULT 'auto',
  	"limit" numeric DEFAULT 4,
  	"kind" "enum_posts_blocks_posts_feed_kind" DEFAULT 'all',
  	"filter_enabled" boolean DEFAULT false,
  	"filter_style" "enum_posts_blocks_posts_feed_filter_style" DEFAULT 'buttons',
  	"more_link_type" "enum_posts_blocks_posts_feed_more_link_type" DEFAULT 'reference',
  	"more_link_new_tab" boolean,
  	"more_link_url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_posts_feed_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"more_link_label" varchar,
  	"read_label" varchar DEFAULT 'Унших',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "posts_blocks_gallery_items_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_posts_blocks_gallery_variant" DEFAULT 'mosaic',
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_values_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "posts_blocks_values_list_items_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_values_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_values_list_locales" (
  	"title" varchar,
  	"verse" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_history_grid_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "posts_blocks_history_grid_paragraphs_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_history_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title_tone" "enum_posts_blocks_history_grid_title_tone" DEFAULT 'primary',
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_history_grid_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_stats_row_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "posts_blocks_stats_row_items_locales" (
  	"number" varchar,
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_stats_row" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_highlighted_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_highlighted_text_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_timeline_items_lines" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "posts_blocks_timeline_items_lines_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_timeline_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"year" varchar,
  	"active" boolean DEFAULT false
  );
  
  CREATE TABLE "posts_blocks_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_timeline_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_carousel_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "posts_blocks_carousel_slides_locales" (
  	"alt" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_people_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_posts_blocks_people_grid_variant" DEFAULT 'board',
  	"source" "enum_posts_blocks_people_grid_source" DEFAULT 'group',
  	"group" "enum_posts_blocks_people_grid_group" DEFAULT 'board',
  	"hub_id" integer,
  	"limit" numeric DEFAULT 12,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_people_grid_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_creed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_creed_locales" (
  	"title" varchar,
  	"intro" varchar,
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_section_intro" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_section_intro_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_data_table_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"column" numeric
  );
  
  CREATE TABLE "posts_blocks_data_table_filters_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_data_table_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "posts_blocks_data_table_columns_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_data_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "posts_blocks_data_table_rows_cells_locales" (
  	"value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_data_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "posts_blocks_data_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_posts_blocks_data_table_header_align" DEFAULT 'left',
  	"variant" "enum_posts_blocks_data_table_variant" DEFAULT 'region',
  	"region_column" numeric,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_data_table_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_media_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_media_card_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_department_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_posts_blocks_department_grid_header_align" DEFAULT 'left',
  	"source" "enum_posts_blocks_department_grid_source" DEFAULT 'auto',
  	"limit" numeric DEFAULT 12,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_department_grid_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_contact_box" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"phone" varchar,
  	"email" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_contact_box_locales" (
  	"title" varchar DEFAULT 'Манай үйлчлэлтэй холбогдох:',
  	"person_name" varchar,
  	"person_role" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_contact_form_details_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar
  );
  
  CREATE TABLE "posts_blocks_contact_form_details_items_locales" (
  	"value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_contact_form_details" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "posts_blocks_contact_form_details_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_contact_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_contact_form_locales" (
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
  
  CREATE TABLE "posts_blocks_process_steps_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar
  );
  
  CREATE TABLE "posts_blocks_process_steps_items_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_posts_blocks_process_steps_header_align" DEFAULT 'left',
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_process_steps_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_figure" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"variant" "enum_posts_blocks_figure_variant" DEFAULT 'map',
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_figure_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_region_map_regions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"path_id" varchar
  );
  
  CREATE TABLE "posts_blocks_region_map_regions_locales" (
  	"name" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts_blocks_region_map" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_posts_blocks_region_map_header_align" DEFAULT 'left',
  	"link_to_table" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "posts_blocks_region_map_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "posts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar,
  	"kind" "enum_posts_kind" DEFAULT 'news',
  	"published_at" timestamp(3) with time zone,
  	"cover_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_posts_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "posts_locales" (
  	"title" varchar,
  	"excerpt" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "posts_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"departments_id" integer,
  	"hubs_id" integer,
  	"membership_tiers_id" integer,
  	"board_members_id" integer
  );
  
  CREATE TABLE "_posts_v_blocks_page_banner_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__posts_v_blocks_page_banner_links_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar,
  	"appearance" "enum__posts_v_blocks_page_banner_links_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_page_banner_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_page_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__posts_v_blocks_page_banner_variant" DEFAULT 'hub',
  	"background_id" integer,
  	"watermark_id" integer,
  	"height" numeric,
  	"align" "enum__posts_v_blocks_page_banner_align" DEFAULT 'left',
  	"overlay" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_page_banner_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"tag" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_section_tabs_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__posts_v_blocks_section_tabs_items_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_section_tabs_items_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_section_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__posts_v_blocks_section_tabs_variant" DEFAULT 'dept',
  	"align" "enum__posts_v_blocks_section_tabs_align" DEFAULT 'left',
  	"plain" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__posts_v_blocks_rich_text_header_align" DEFAULT 'left',
  	"width" "enum__posts_v_blocks_rich_text_width" DEFAULT 'narrow',
  	"background" "enum__posts_v_blocks_rich_text_background" DEFAULT 'none',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_rich_text_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_card_grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"badge" varchar,
  	"link_type" "enum__posts_v_blocks_card_grid_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_card_grid_items_locales" (
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_card_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__posts_v_blocks_card_grid_variant" DEFAULT 'info',
  	"header_align" "enum__posts_v_blocks_card_grid_header_align" DEFAULT 'left',
  	"background" "enum__posts_v_blocks_card_grid_background" DEFAULT 'warm',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_card_grid_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_quote_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__posts_v_blocks_quote_banner_variant" DEFAULT 'quote',
  	"background_id" integer,
  	"watermark_id" integer,
  	"cta_type" "enum__posts_v_blocks_quote_banner_cta_type" DEFAULT 'reference',
  	"cta_new_tab" boolean,
  	"cta_url" varchar,
  	"cta_appearance" "enum__posts_v_blocks_quote_banner_cta_appearance" DEFAULT 'default',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_quote_banner_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"author" varchar,
  	"cta_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_accelerators_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"link_type" "enum__posts_v_blocks_accelerators_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_accelerators_items_locales" (
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_accelerators" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__posts_v_blocks_accelerators_header_align" DEFAULT 'left',
  	"numbered" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_accelerators_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_posts_feed_filter_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kind" "enum__posts_v_blocks_posts_feed_filter_items_kind" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_posts_feed_filter_items_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_posts_feed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__posts_v_blocks_posts_feed_variant" DEFAULT 'plain',
  	"header_align" "enum__posts_v_blocks_posts_feed_header_align" DEFAULT 'left',
  	"source" "enum__posts_v_blocks_posts_feed_source" DEFAULT 'auto',
  	"limit" numeric DEFAULT 4,
  	"kind" "enum__posts_v_blocks_posts_feed_kind" DEFAULT 'all',
  	"filter_enabled" boolean DEFAULT false,
  	"filter_style" "enum__posts_v_blocks_posts_feed_filter_style" DEFAULT 'buttons',
  	"more_link_type" "enum__posts_v_blocks_posts_feed_more_link_type" DEFAULT 'reference',
  	"more_link_new_tab" boolean,
  	"more_link_url" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_posts_feed_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"more_link_label" varchar,
  	"read_label" varchar DEFAULT 'Унших',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_gallery_items_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__posts_v_blocks_gallery_variant" DEFAULT 'mosaic',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_values_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_values_list_items_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_values_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_values_list_locales" (
  	"title" varchar,
  	"verse" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_history_grid_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_history_grid_paragraphs_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_history_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title_tone" "enum__posts_v_blocks_history_grid_title_tone" DEFAULT 'primary',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_history_grid_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_stats_row_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_stats_row_items_locales" (
  	"number" varchar,
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_stats_row" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_highlighted_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_highlighted_text_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_timeline_items_lines" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_timeline_items_lines_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_timeline_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"year" varchar,
  	"active" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_timeline_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_carousel_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_carousel_slides_locales" (
  	"alt" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_people_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__posts_v_blocks_people_grid_variant" DEFAULT 'board',
  	"source" "enum__posts_v_blocks_people_grid_source" DEFAULT 'group',
  	"group" "enum__posts_v_blocks_people_grid_group" DEFAULT 'board',
  	"hub_id" integer,
  	"limit" numeric DEFAULT 12,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_people_grid_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_creed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"background_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_creed_locales" (
  	"title" varchar,
  	"intro" varchar,
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_section_intro" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_section_intro_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_data_table_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"column" numeric,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_data_table_filters_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_data_table_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_data_table_columns_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_data_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_data_table_rows_cells_locales" (
  	"value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_data_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_data_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__posts_v_blocks_data_table_header_align" DEFAULT 'left',
  	"variant" "enum__posts_v_blocks_data_table_variant" DEFAULT 'region',
  	"region_column" numeric,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_data_table_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_media_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_media_card_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_department_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__posts_v_blocks_department_grid_header_align" DEFAULT 'left',
  	"source" "enum__posts_v_blocks_department_grid_source" DEFAULT 'auto',
  	"limit" numeric DEFAULT 12,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_department_grid_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_contact_box" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"phone" varchar,
  	"email" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_contact_box_locales" (
  	"title" varchar DEFAULT 'Манай үйлчлэлтэй холбогдох:',
  	"person_name" varchar,
  	"person_role" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_contact_form_details_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_contact_form_details_items_locales" (
  	"value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_contact_form_details" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_contact_form_details_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_contact_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_contact_form_locales" (
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
  
  CREATE TABLE "_posts_v_blocks_process_steps_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"number" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_process_steps_items_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__posts_v_blocks_process_steps_header_align" DEFAULT 'left',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_process_steps_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_figure" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"variant" "enum__posts_v_blocks_figure_variant" DEFAULT 'map',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_figure_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_region_map_regions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"path_id" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_region_map_regions_locales" (
  	"name" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_blocks_region_map" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__posts_v_blocks_region_map_header_align" DEFAULT 'left',
  	"link_to_table" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_posts_v_blocks_region_map_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_slug" varchar,
  	"version_kind" "enum__posts_v_version_kind" DEFAULT 'news',
  	"version_published_at" timestamp(3) with time zone,
  	"version_cover_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__posts_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__posts_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_posts_v_locales" (
  	"version_title" varchar,
  	"version_excerpt" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"departments_id" integer,
  	"hubs_id" integer,
  	"membership_tiers_id" integer,
  	"board_members_id" integer
  );
  
  CREATE TABLE "departments_blocks_page_banner_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_departments_blocks_page_banner_links_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar,
  	"appearance" "enum_departments_blocks_page_banner_links_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "departments_blocks_page_banner_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_page_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_departments_blocks_page_banner_variant" DEFAULT 'hub',
  	"background_id" integer,
  	"watermark_id" integer,
  	"height" numeric,
  	"align" "enum_departments_blocks_page_banner_align" DEFAULT 'left',
  	"overlay" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "departments_blocks_page_banner_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"tag" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_section_tabs_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_departments_blocks_section_tabs_items_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar
  );
  
  CREATE TABLE "departments_blocks_section_tabs_items_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_section_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_departments_blocks_section_tabs_variant" DEFAULT 'dept',
  	"align" "enum_departments_blocks_section_tabs_align" DEFAULT 'left',
  	"plain" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE "departments_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_departments_blocks_rich_text_header_align" DEFAULT 'left',
  	"width" "enum_departments_blocks_rich_text_width" DEFAULT 'narrow',
  	"background" "enum_departments_blocks_rich_text_background" DEFAULT 'none',
  	"block_name" varchar
  );
  
  CREATE TABLE "departments_blocks_rich_text_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_card_grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"badge" varchar,
  	"link_type" "enum_departments_blocks_card_grid_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "departments_blocks_card_grid_items_locales" (
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_card_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_departments_blocks_card_grid_variant" DEFAULT 'info',
  	"header_align" "enum_departments_blocks_card_grid_header_align" DEFAULT 'left',
  	"background" "enum_departments_blocks_card_grid_background" DEFAULT 'warm',
  	"block_name" varchar
  );
  
  CREATE TABLE "departments_blocks_card_grid_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_quote_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_departments_blocks_quote_banner_variant" DEFAULT 'quote',
  	"background_id" integer,
  	"watermark_id" integer,
  	"cta_type" "enum_departments_blocks_quote_banner_cta_type" DEFAULT 'reference',
  	"cta_new_tab" boolean,
  	"cta_url" varchar,
  	"cta_appearance" "enum_departments_blocks_quote_banner_cta_appearance" DEFAULT 'default',
  	"block_name" varchar
  );
  
  CREATE TABLE "departments_blocks_quote_banner_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"author" varchar,
  	"cta_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_accelerators_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"link_type" "enum_departments_blocks_accelerators_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "departments_blocks_accelerators_items_locales" (
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_accelerators" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_departments_blocks_accelerators_header_align" DEFAULT 'left',
  	"numbered" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "departments_blocks_accelerators_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_posts_feed_filter_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kind" "enum_departments_blocks_posts_feed_filter_items_kind" DEFAULT 'all'
  );
  
  CREATE TABLE "departments_blocks_posts_feed_filter_items_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_posts_feed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_departments_blocks_posts_feed_variant" DEFAULT 'plain',
  	"header_align" "enum_departments_blocks_posts_feed_header_align" DEFAULT 'left',
  	"source" "enum_departments_blocks_posts_feed_source" DEFAULT 'auto',
  	"limit" numeric DEFAULT 4,
  	"kind" "enum_departments_blocks_posts_feed_kind" DEFAULT 'all',
  	"filter_enabled" boolean DEFAULT false,
  	"filter_style" "enum_departments_blocks_posts_feed_filter_style" DEFAULT 'buttons',
  	"more_link_type" "enum_departments_blocks_posts_feed_more_link_type" DEFAULT 'reference',
  	"more_link_new_tab" boolean,
  	"more_link_url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "departments_blocks_posts_feed_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"more_link_label" varchar,
  	"read_label" varchar DEFAULT 'Унших',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "departments_blocks_gallery_items_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_departments_blocks_gallery_variant" DEFAULT 'mosaic',
  	"block_name" varchar
  );
  
  CREATE TABLE "departments_blocks_values_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "departments_blocks_values_list_items_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_values_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "departments_blocks_values_list_locales" (
  	"title" varchar,
  	"verse" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_history_grid_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "departments_blocks_history_grid_paragraphs_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_history_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title_tone" "enum_departments_blocks_history_grid_title_tone" DEFAULT 'primary',
  	"block_name" varchar
  );
  
  CREATE TABLE "departments_blocks_history_grid_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_stats_row_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "departments_blocks_stats_row_items_locales" (
  	"number" varchar,
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_stats_row" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "departments_blocks_highlighted_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "departments_blocks_highlighted_text_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_timeline_items_lines" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "departments_blocks_timeline_items_lines_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_timeline_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"year" varchar,
  	"active" boolean DEFAULT false
  );
  
  CREATE TABLE "departments_blocks_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "departments_blocks_timeline_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_carousel_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "departments_blocks_carousel_slides_locales" (
  	"alt" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "departments_blocks_people_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_departments_blocks_people_grid_variant" DEFAULT 'board',
  	"source" "enum_departments_blocks_people_grid_source" DEFAULT 'group',
  	"group" "enum_departments_blocks_people_grid_group" DEFAULT 'board',
  	"hub_id" integer,
  	"limit" numeric DEFAULT 12,
  	"block_name" varchar
  );
  
  CREATE TABLE "departments_blocks_people_grid_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_creed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "departments_blocks_creed_locales" (
  	"title" varchar,
  	"intro" varchar,
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_section_intro" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "departments_blocks_section_intro_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_data_table_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"column" numeric
  );
  
  CREATE TABLE "departments_blocks_data_table_filters_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_data_table_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "departments_blocks_data_table_columns_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_data_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "departments_blocks_data_table_rows_cells_locales" (
  	"value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_data_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "departments_blocks_data_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_departments_blocks_data_table_header_align" DEFAULT 'left',
  	"variant" "enum_departments_blocks_data_table_variant" DEFAULT 'region',
  	"region_column" numeric,
  	"block_name" varchar
  );
  
  CREATE TABLE "departments_blocks_data_table_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_media_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "departments_blocks_media_card_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_department_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_departments_blocks_department_grid_header_align" DEFAULT 'left',
  	"source" "enum_departments_blocks_department_grid_source" DEFAULT 'auto',
  	"limit" numeric DEFAULT 12,
  	"block_name" varchar
  );
  
  CREATE TABLE "departments_blocks_department_grid_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_contact_box" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"phone" varchar,
  	"email" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "departments_blocks_contact_box_locales" (
  	"title" varchar DEFAULT 'Манай үйлчлэлтэй холбогдох:',
  	"person_name" varchar,
  	"person_role" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_contact_form_details_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar
  );
  
  CREATE TABLE "departments_blocks_contact_form_details_items_locales" (
  	"value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_contact_form_details" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "departments_blocks_contact_form_details_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_contact_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "departments_blocks_contact_form_locales" (
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
  
  CREATE TABLE "departments_blocks_process_steps_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar
  );
  
  CREATE TABLE "departments_blocks_process_steps_items_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_departments_blocks_process_steps_header_align" DEFAULT 'left',
  	"block_name" varchar
  );
  
  CREATE TABLE "departments_blocks_process_steps_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_figure" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"variant" "enum_departments_blocks_figure_variant" DEFAULT 'map',
  	"block_name" varchar
  );
  
  CREATE TABLE "departments_blocks_figure_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_region_map_regions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"path_id" varchar
  );
  
  CREATE TABLE "departments_blocks_region_map_regions_locales" (
  	"name" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments_blocks_region_map" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_departments_blocks_region_map_header_align" DEFAULT 'left',
  	"link_to_table" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "departments_blocks_region_map_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "departments" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar,
  	"order" numeric,
  	"image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_departments_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "departments_locales" (
  	"name" varchar,
  	"lead" varchar,
  	"excerpt" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "departments_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"departments_id" integer,
  	"hubs_id" integer,
  	"membership_tiers_id" integer,
  	"board_members_id" integer
  );
  
  CREATE TABLE "_departments_v_blocks_page_banner_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__departments_v_blocks_page_banner_links_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar,
  	"appearance" "enum__departments_v_blocks_page_banner_links_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_page_banner_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_page_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__departments_v_blocks_page_banner_variant" DEFAULT 'hub',
  	"background_id" integer,
  	"watermark_id" integer,
  	"height" numeric,
  	"align" "enum__departments_v_blocks_page_banner_align" DEFAULT 'left',
  	"overlay" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_page_banner_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"tag" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_section_tabs_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__departments_v_blocks_section_tabs_items_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_section_tabs_items_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_section_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__departments_v_blocks_section_tabs_variant" DEFAULT 'dept',
  	"align" "enum__departments_v_blocks_section_tabs_align" DEFAULT 'left',
  	"plain" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__departments_v_blocks_rich_text_header_align" DEFAULT 'left',
  	"width" "enum__departments_v_blocks_rich_text_width" DEFAULT 'narrow',
  	"background" "enum__departments_v_blocks_rich_text_background" DEFAULT 'none',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_rich_text_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_card_grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"badge" varchar,
  	"link_type" "enum__departments_v_blocks_card_grid_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_card_grid_items_locales" (
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_card_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__departments_v_blocks_card_grid_variant" DEFAULT 'info',
  	"header_align" "enum__departments_v_blocks_card_grid_header_align" DEFAULT 'left',
  	"background" "enum__departments_v_blocks_card_grid_background" DEFAULT 'warm',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_card_grid_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_quote_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__departments_v_blocks_quote_banner_variant" DEFAULT 'quote',
  	"background_id" integer,
  	"watermark_id" integer,
  	"cta_type" "enum__departments_v_blocks_quote_banner_cta_type" DEFAULT 'reference',
  	"cta_new_tab" boolean,
  	"cta_url" varchar,
  	"cta_appearance" "enum__departments_v_blocks_quote_banner_cta_appearance" DEFAULT 'default',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_quote_banner_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"author" varchar,
  	"cta_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_accelerators_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"link_type" "enum__departments_v_blocks_accelerators_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_accelerators_items_locales" (
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_accelerators" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__departments_v_blocks_accelerators_header_align" DEFAULT 'left',
  	"numbered" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_accelerators_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_posts_feed_filter_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kind" "enum__departments_v_blocks_posts_feed_filter_items_kind" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_posts_feed_filter_items_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_posts_feed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__departments_v_blocks_posts_feed_variant" DEFAULT 'plain',
  	"header_align" "enum__departments_v_blocks_posts_feed_header_align" DEFAULT 'left',
  	"source" "enum__departments_v_blocks_posts_feed_source" DEFAULT 'auto',
  	"limit" numeric DEFAULT 4,
  	"kind" "enum__departments_v_blocks_posts_feed_kind" DEFAULT 'all',
  	"filter_enabled" boolean DEFAULT false,
  	"filter_style" "enum__departments_v_blocks_posts_feed_filter_style" DEFAULT 'buttons',
  	"more_link_type" "enum__departments_v_blocks_posts_feed_more_link_type" DEFAULT 'reference',
  	"more_link_new_tab" boolean,
  	"more_link_url" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_posts_feed_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"more_link_label" varchar,
  	"read_label" varchar DEFAULT 'Унших',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_gallery_items_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__departments_v_blocks_gallery_variant" DEFAULT 'mosaic',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_values_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_values_list_items_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_values_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_values_list_locales" (
  	"title" varchar,
  	"verse" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_history_grid_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_history_grid_paragraphs_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_history_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title_tone" "enum__departments_v_blocks_history_grid_title_tone" DEFAULT 'primary',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_history_grid_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_stats_row_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_stats_row_items_locales" (
  	"number" varchar,
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_stats_row" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_highlighted_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_highlighted_text_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_timeline_items_lines" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_timeline_items_lines_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_timeline_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"year" varchar,
  	"active" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_timeline_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_carousel_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_carousel_slides_locales" (
  	"alt" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_people_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__departments_v_blocks_people_grid_variant" DEFAULT 'board',
  	"source" "enum__departments_v_blocks_people_grid_source" DEFAULT 'group',
  	"group" "enum__departments_v_blocks_people_grid_group" DEFAULT 'board',
  	"hub_id" integer,
  	"limit" numeric DEFAULT 12,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_people_grid_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_creed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"background_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_creed_locales" (
  	"title" varchar,
  	"intro" varchar,
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_section_intro" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_section_intro_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_data_table_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"column" numeric,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_data_table_filters_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_data_table_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_data_table_columns_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_data_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_data_table_rows_cells_locales" (
  	"value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_data_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_data_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__departments_v_blocks_data_table_header_align" DEFAULT 'left',
  	"variant" "enum__departments_v_blocks_data_table_variant" DEFAULT 'region',
  	"region_column" numeric,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_data_table_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_media_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_media_card_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_department_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__departments_v_blocks_department_grid_header_align" DEFAULT 'left',
  	"source" "enum__departments_v_blocks_department_grid_source" DEFAULT 'auto',
  	"limit" numeric DEFAULT 12,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_department_grid_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_contact_box" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"phone" varchar,
  	"email" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_contact_box_locales" (
  	"title" varchar DEFAULT 'Манай үйлчлэлтэй холбогдох:',
  	"person_name" varchar,
  	"person_role" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_contact_form_details_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_contact_form_details_items_locales" (
  	"value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_contact_form_details" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_contact_form_details_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_contact_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_contact_form_locales" (
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
  
  CREATE TABLE "_departments_v_blocks_process_steps_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"number" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_process_steps_items_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__departments_v_blocks_process_steps_header_align" DEFAULT 'left',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_process_steps_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_figure" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"variant" "enum__departments_v_blocks_figure_variant" DEFAULT 'map',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_figure_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_region_map_regions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"path_id" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_region_map_regions_locales" (
  	"name" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_blocks_region_map" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__departments_v_blocks_region_map_header_align" DEFAULT 'left',
  	"link_to_table" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_departments_v_blocks_region_map_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_slug" varchar,
  	"version_order" numeric,
  	"version_image_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__departments_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__departments_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_departments_v_locales" (
  	"version_name" varchar,
  	"version_lead" varchar,
  	"version_excerpt" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_departments_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"departments_id" integer,
  	"hubs_id" integer,
  	"membership_tiers_id" integer,
  	"board_members_id" integer
  );
  
  CREATE TABLE "hubs_blocks_page_banner_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_hubs_blocks_page_banner_links_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar,
  	"appearance" "enum_hubs_blocks_page_banner_links_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "hubs_blocks_page_banner_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_page_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_hubs_blocks_page_banner_variant" DEFAULT 'hub',
  	"background_id" integer,
  	"watermark_id" integer,
  	"height" numeric,
  	"align" "enum_hubs_blocks_page_banner_align" DEFAULT 'left',
  	"overlay" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "hubs_blocks_page_banner_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"tag" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_section_tabs_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_hubs_blocks_section_tabs_items_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar
  );
  
  CREATE TABLE "hubs_blocks_section_tabs_items_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_section_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_hubs_blocks_section_tabs_variant" DEFAULT 'dept',
  	"align" "enum_hubs_blocks_section_tabs_align" DEFAULT 'left',
  	"plain" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE "hubs_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_hubs_blocks_rich_text_header_align" DEFAULT 'left',
  	"width" "enum_hubs_blocks_rich_text_width" DEFAULT 'narrow',
  	"background" "enum_hubs_blocks_rich_text_background" DEFAULT 'none',
  	"block_name" varchar
  );
  
  CREATE TABLE "hubs_blocks_rich_text_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_card_grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"badge" varchar,
  	"link_type" "enum_hubs_blocks_card_grid_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "hubs_blocks_card_grid_items_locales" (
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_card_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_hubs_blocks_card_grid_variant" DEFAULT 'info',
  	"header_align" "enum_hubs_blocks_card_grid_header_align" DEFAULT 'left',
  	"background" "enum_hubs_blocks_card_grid_background" DEFAULT 'warm',
  	"block_name" varchar
  );
  
  CREATE TABLE "hubs_blocks_card_grid_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_quote_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_hubs_blocks_quote_banner_variant" DEFAULT 'quote',
  	"background_id" integer,
  	"watermark_id" integer,
  	"cta_type" "enum_hubs_blocks_quote_banner_cta_type" DEFAULT 'reference',
  	"cta_new_tab" boolean,
  	"cta_url" varchar,
  	"cta_appearance" "enum_hubs_blocks_quote_banner_cta_appearance" DEFAULT 'default',
  	"block_name" varchar
  );
  
  CREATE TABLE "hubs_blocks_quote_banner_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"author" varchar,
  	"cta_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_accelerators_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"link_type" "enum_hubs_blocks_accelerators_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "hubs_blocks_accelerators_items_locales" (
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_accelerators" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_hubs_blocks_accelerators_header_align" DEFAULT 'left',
  	"numbered" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "hubs_blocks_accelerators_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_posts_feed_filter_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kind" "enum_hubs_blocks_posts_feed_filter_items_kind" DEFAULT 'all'
  );
  
  CREATE TABLE "hubs_blocks_posts_feed_filter_items_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_posts_feed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_hubs_blocks_posts_feed_variant" DEFAULT 'plain',
  	"header_align" "enum_hubs_blocks_posts_feed_header_align" DEFAULT 'left',
  	"source" "enum_hubs_blocks_posts_feed_source" DEFAULT 'auto',
  	"limit" numeric DEFAULT 4,
  	"kind" "enum_hubs_blocks_posts_feed_kind" DEFAULT 'all',
  	"filter_enabled" boolean DEFAULT false,
  	"filter_style" "enum_hubs_blocks_posts_feed_filter_style" DEFAULT 'buttons',
  	"more_link_type" "enum_hubs_blocks_posts_feed_more_link_type" DEFAULT 'reference',
  	"more_link_new_tab" boolean,
  	"more_link_url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "hubs_blocks_posts_feed_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"more_link_label" varchar,
  	"read_label" varchar DEFAULT 'Унших',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "hubs_blocks_gallery_items_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_hubs_blocks_gallery_variant" DEFAULT 'mosaic',
  	"block_name" varchar
  );
  
  CREATE TABLE "hubs_blocks_values_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_values_list_items_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_values_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "hubs_blocks_values_list_locales" (
  	"title" varchar,
  	"verse" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_history_grid_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_history_grid_paragraphs_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_history_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title_tone" "enum_hubs_blocks_history_grid_title_tone" DEFAULT 'primary',
  	"block_name" varchar
  );
  
  CREATE TABLE "hubs_blocks_history_grid_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_stats_row_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_stats_row_items_locales" (
  	"number" varchar,
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_stats_row" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "hubs_blocks_highlighted_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "hubs_blocks_highlighted_text_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_timeline_items_lines" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_timeline_items_lines_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_timeline_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"year" varchar,
  	"active" boolean DEFAULT false
  );
  
  CREATE TABLE "hubs_blocks_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "hubs_blocks_timeline_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_carousel_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "hubs_blocks_carousel_slides_locales" (
  	"alt" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "hubs_blocks_people_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_hubs_blocks_people_grid_variant" DEFAULT 'board',
  	"source" "enum_hubs_blocks_people_grid_source" DEFAULT 'group',
  	"group" "enum_hubs_blocks_people_grid_group" DEFAULT 'board',
  	"hub_id" integer,
  	"limit" numeric DEFAULT 12,
  	"block_name" varchar
  );
  
  CREATE TABLE "hubs_blocks_people_grid_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_creed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "hubs_blocks_creed_locales" (
  	"title" varchar,
  	"intro" varchar,
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_section_intro" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "hubs_blocks_section_intro_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_data_table_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"column" numeric
  );
  
  CREATE TABLE "hubs_blocks_data_table_filters_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_data_table_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_data_table_columns_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_data_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_data_table_rows_cells_locales" (
  	"value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_data_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_data_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_hubs_blocks_data_table_header_align" DEFAULT 'left',
  	"variant" "enum_hubs_blocks_data_table_variant" DEFAULT 'region',
  	"region_column" numeric,
  	"block_name" varchar
  );
  
  CREATE TABLE "hubs_blocks_data_table_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_media_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "hubs_blocks_media_card_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_department_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_hubs_blocks_department_grid_header_align" DEFAULT 'left',
  	"source" "enum_hubs_blocks_department_grid_source" DEFAULT 'auto',
  	"limit" numeric DEFAULT 12,
  	"block_name" varchar
  );
  
  CREATE TABLE "hubs_blocks_department_grid_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_contact_box" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"phone" varchar,
  	"email" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "hubs_blocks_contact_box_locales" (
  	"title" varchar DEFAULT 'Манай үйлчлэлтэй холбогдох:',
  	"person_name" varchar,
  	"person_role" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_contact_form_details_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar
  );
  
  CREATE TABLE "hubs_blocks_contact_form_details_items_locales" (
  	"value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_contact_form_details" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_contact_form_details_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_contact_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "hubs_blocks_contact_form_locales" (
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
  
  CREATE TABLE "hubs_blocks_process_steps_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar
  );
  
  CREATE TABLE "hubs_blocks_process_steps_items_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_hubs_blocks_process_steps_header_align" DEFAULT 'left',
  	"block_name" varchar
  );
  
  CREATE TABLE "hubs_blocks_process_steps_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_figure" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"variant" "enum_hubs_blocks_figure_variant" DEFAULT 'map',
  	"block_name" varchar
  );
  
  CREATE TABLE "hubs_blocks_figure_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_region_map_regions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"path_id" varchar
  );
  
  CREATE TABLE "hubs_blocks_region_map_regions_locales" (
  	"name" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs_blocks_region_map" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_hubs_blocks_region_map_header_align" DEFAULT 'left',
  	"link_to_table" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "hubs_blocks_region_map_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "hubs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_hubs_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "hubs_locales" (
  	"name" varchar,
  	"region" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "hubs_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"departments_id" integer,
  	"hubs_id" integer,
  	"membership_tiers_id" integer,
  	"board_members_id" integer
  );
  
  CREATE TABLE "_hubs_v_blocks_page_banner_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__hubs_v_blocks_page_banner_links_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar,
  	"appearance" "enum__hubs_v_blocks_page_banner_links_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_page_banner_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_page_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__hubs_v_blocks_page_banner_variant" DEFAULT 'hub',
  	"background_id" integer,
  	"watermark_id" integer,
  	"height" numeric,
  	"align" "enum__hubs_v_blocks_page_banner_align" DEFAULT 'left',
  	"overlay" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_page_banner_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"tag" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_section_tabs_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__hubs_v_blocks_section_tabs_items_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_section_tabs_items_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_section_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__hubs_v_blocks_section_tabs_variant" DEFAULT 'dept',
  	"align" "enum__hubs_v_blocks_section_tabs_align" DEFAULT 'left',
  	"plain" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__hubs_v_blocks_rich_text_header_align" DEFAULT 'left',
  	"width" "enum__hubs_v_blocks_rich_text_width" DEFAULT 'narrow',
  	"background" "enum__hubs_v_blocks_rich_text_background" DEFAULT 'none',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_rich_text_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_card_grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"badge" varchar,
  	"link_type" "enum__hubs_v_blocks_card_grid_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_card_grid_items_locales" (
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_card_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__hubs_v_blocks_card_grid_variant" DEFAULT 'info',
  	"header_align" "enum__hubs_v_blocks_card_grid_header_align" DEFAULT 'left',
  	"background" "enum__hubs_v_blocks_card_grid_background" DEFAULT 'warm',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_card_grid_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_quote_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__hubs_v_blocks_quote_banner_variant" DEFAULT 'quote',
  	"background_id" integer,
  	"watermark_id" integer,
  	"cta_type" "enum__hubs_v_blocks_quote_banner_cta_type" DEFAULT 'reference',
  	"cta_new_tab" boolean,
  	"cta_url" varchar,
  	"cta_appearance" "enum__hubs_v_blocks_quote_banner_cta_appearance" DEFAULT 'default',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_quote_banner_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"author" varchar,
  	"cta_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_accelerators_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"link_type" "enum__hubs_v_blocks_accelerators_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_accelerators_items_locales" (
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_accelerators" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__hubs_v_blocks_accelerators_header_align" DEFAULT 'left',
  	"numbered" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_accelerators_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_posts_feed_filter_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"kind" "enum__hubs_v_blocks_posts_feed_filter_items_kind" DEFAULT 'all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_posts_feed_filter_items_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_posts_feed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__hubs_v_blocks_posts_feed_variant" DEFAULT 'plain',
  	"header_align" "enum__hubs_v_blocks_posts_feed_header_align" DEFAULT 'left',
  	"source" "enum__hubs_v_blocks_posts_feed_source" DEFAULT 'auto',
  	"limit" numeric DEFAULT 4,
  	"kind" "enum__hubs_v_blocks_posts_feed_kind" DEFAULT 'all',
  	"filter_enabled" boolean DEFAULT false,
  	"filter_style" "enum__hubs_v_blocks_posts_feed_filter_style" DEFAULT 'buttons',
  	"more_link_type" "enum__hubs_v_blocks_posts_feed_more_link_type" DEFAULT 'reference',
  	"more_link_new_tab" boolean,
  	"more_link_url" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_posts_feed_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"more_link_label" varchar,
  	"read_label" varchar DEFAULT 'Унших',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_gallery_items_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__hubs_v_blocks_gallery_variant" DEFAULT 'mosaic',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_values_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_values_list_items_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_values_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_values_list_locales" (
  	"title" varchar,
  	"verse" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_history_grid_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_history_grid_paragraphs_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_history_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title_tone" "enum__hubs_v_blocks_history_grid_title_tone" DEFAULT 'primary',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_history_grid_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_stats_row_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_stats_row_items_locales" (
  	"number" varchar,
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_stats_row" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_highlighted_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_highlighted_text_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_timeline_items_lines" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_timeline_items_lines_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_timeline_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"year" varchar,
  	"active" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_timeline_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_carousel_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_carousel_slides_locales" (
  	"alt" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_people_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"variant" "enum__hubs_v_blocks_people_grid_variant" DEFAULT 'board',
  	"source" "enum__hubs_v_blocks_people_grid_source" DEFAULT 'group',
  	"group" "enum__hubs_v_blocks_people_grid_group" DEFAULT 'board',
  	"hub_id" integer,
  	"limit" numeric DEFAULT 12,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_people_grid_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_creed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"background_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_creed_locales" (
  	"title" varchar,
  	"intro" varchar,
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_section_intro" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_section_intro_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_data_table_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"column" numeric,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_data_table_filters_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_data_table_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_data_table_columns_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_data_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_data_table_rows_cells_locales" (
  	"value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_data_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_data_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__hubs_v_blocks_data_table_header_align" DEFAULT 'left',
  	"variant" "enum__hubs_v_blocks_data_table_variant" DEFAULT 'region',
  	"region_column" numeric,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_data_table_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_media_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_media_card_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_department_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__hubs_v_blocks_department_grid_header_align" DEFAULT 'left',
  	"source" "enum__hubs_v_blocks_department_grid_source" DEFAULT 'auto',
  	"limit" numeric DEFAULT 12,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_department_grid_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_contact_box" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"phone" varchar,
  	"email" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_contact_box_locales" (
  	"title" varchar DEFAULT 'Манай үйлчлэлтэй холбогдох:',
  	"person_name" varchar,
  	"person_role" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_contact_form_details_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_contact_form_details_items_locales" (
  	"value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_contact_form_details" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_contact_form_details_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_contact_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_contact_form_locales" (
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
  
  CREATE TABLE "_hubs_v_blocks_process_steps_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"number" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_process_steps_items_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__hubs_v_blocks_process_steps_header_align" DEFAULT 'left',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_process_steps_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_figure" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"variant" "enum__hubs_v_blocks_figure_variant" DEFAULT 'map',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_figure_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_region_map_regions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"path_id" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_region_map_regions_locales" (
  	"name" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_blocks_region_map" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_align" "enum__hubs_v_blocks_region_map_header_align" DEFAULT 'left',
  	"link_to_table" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_hubs_v_blocks_region_map_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__hubs_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__hubs_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE "_hubs_v_locales" (
  	"version_name" varchar,
  	"version_region" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_hubs_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"departments_id" integer,
  	"hubs_id" integer,
  	"membership_tiers_id" integer,
  	"board_members_id" integer
  );
  
  CREATE TABLE "board_members" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"photo_id" integer,
  	"group" "enum_board_members_group" DEFAULT 'board' NOT NULL,
  	"department_id" integer,
  	"hub_id" integer,
  	"order" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "board_members_locales" (
  	"name" varchar NOT NULL,
  	"role" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "membership_tiers_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "membership_tiers_benefits_locales" (
  	"text" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_requirements" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "membership_tiers_requirements_locales" (
  	"text" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_page_banner_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_membership_tiers_blocks_page_banner_links_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar,
  	"appearance" "enum_membership_tiers_blocks_page_banner_links_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "membership_tiers_blocks_page_banner_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_page_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_membership_tiers_blocks_page_banner_variant" DEFAULT 'hub' NOT NULL,
  	"background_id" integer,
  	"watermark_id" integer,
  	"height" numeric,
  	"align" "enum_membership_tiers_blocks_page_banner_align" DEFAULT 'left',
  	"overlay" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "membership_tiers_blocks_page_banner_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"tag" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_section_tabs_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_membership_tiers_blocks_section_tabs_items_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar
  );
  
  CREATE TABLE "membership_tiers_blocks_section_tabs_items_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_section_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_membership_tiers_blocks_section_tabs_variant" DEFAULT 'dept' NOT NULL,
  	"align" "enum_membership_tiers_blocks_section_tabs_align" DEFAULT 'left',
  	"plain" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE "membership_tiers_blocks_rich_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_membership_tiers_blocks_rich_text_header_align" DEFAULT 'left',
  	"width" "enum_membership_tiers_blocks_rich_text_width" DEFAULT 'narrow',
  	"background" "enum_membership_tiers_blocks_rich_text_background" DEFAULT 'none',
  	"block_name" varchar
  );
  
  CREATE TABLE "membership_tiers_blocks_rich_text_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"content" jsonb NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_card_grid_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"badge" varchar,
  	"link_type" "enum_membership_tiers_blocks_card_grid_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "membership_tiers_blocks_card_grid_items_locales" (
  	"title" varchar NOT NULL,
  	"text" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_card_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_membership_tiers_blocks_card_grid_variant" DEFAULT 'info' NOT NULL,
  	"header_align" "enum_membership_tiers_blocks_card_grid_header_align" DEFAULT 'left',
  	"background" "enum_membership_tiers_blocks_card_grid_background" DEFAULT 'warm',
  	"block_name" varchar
  );
  
  CREATE TABLE "membership_tiers_blocks_card_grid_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_quote_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_membership_tiers_blocks_quote_banner_variant" DEFAULT 'quote' NOT NULL,
  	"background_id" integer,
  	"watermark_id" integer,
  	"cta_type" "enum_membership_tiers_blocks_quote_banner_cta_type" DEFAULT 'reference',
  	"cta_new_tab" boolean,
  	"cta_url" varchar,
  	"cta_appearance" "enum_membership_tiers_blocks_quote_banner_cta_appearance" DEFAULT 'default',
  	"block_name" varchar
  );
  
  CREATE TABLE "membership_tiers_blocks_quote_banner_locales" (
  	"overline" varchar,
  	"title" varchar NOT NULL,
  	"author" varchar,
  	"cta_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_accelerators_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"link_type" "enum_membership_tiers_blocks_accelerators_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "membership_tiers_blocks_accelerators_items_locales" (
  	"title" varchar NOT NULL,
  	"text" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_accelerators" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_membership_tiers_blocks_accelerators_header_align" DEFAULT 'left',
  	"numbered" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "membership_tiers_blocks_accelerators_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_posts_feed_filter_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kind" "enum_membership_tiers_blocks_posts_feed_filter_items_kind" DEFAULT 'all'
  );
  
  CREATE TABLE "membership_tiers_blocks_posts_feed_filter_items_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_posts_feed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_membership_tiers_blocks_posts_feed_variant" DEFAULT 'plain' NOT NULL,
  	"header_align" "enum_membership_tiers_blocks_posts_feed_header_align" DEFAULT 'left',
  	"source" "enum_membership_tiers_blocks_posts_feed_source" DEFAULT 'auto' NOT NULL,
  	"limit" numeric DEFAULT 4,
  	"kind" "enum_membership_tiers_blocks_posts_feed_kind" DEFAULT 'all',
  	"filter_enabled" boolean DEFAULT false,
  	"filter_style" "enum_membership_tiers_blocks_posts_feed_filter_style" DEFAULT 'buttons',
  	"more_link_type" "enum_membership_tiers_blocks_posts_feed_more_link_type" DEFAULT 'reference',
  	"more_link_new_tab" boolean,
  	"more_link_url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "membership_tiers_blocks_posts_feed_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"more_link_label" varchar,
  	"read_label" varchar DEFAULT 'Унших',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_gallery_items_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_membership_tiers_blocks_gallery_variant" DEFAULT 'mosaic' NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "membership_tiers_blocks_values_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_values_list_items_locales" (
  	"text" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_values_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "membership_tiers_blocks_values_list_locales" (
  	"title" varchar NOT NULL,
  	"verse" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_history_grid_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_history_grid_paragraphs_locales" (
  	"text" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_history_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title_tone" "enum_membership_tiers_blocks_history_grid_title_tone" DEFAULT 'primary',
  	"block_name" varchar
  );
  
  CREATE TABLE "membership_tiers_blocks_history_grid_locales" (
  	"overline" varchar,
  	"title" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_stats_row_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_stats_row_items_locales" (
  	"number" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_stats_row" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "membership_tiers_blocks_highlighted_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "membership_tiers_blocks_highlighted_text_locales" (
  	"text" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_timeline_items_lines" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_timeline_items_lines_locales" (
  	"text" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_timeline_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"year" varchar NOT NULL,
  	"active" boolean DEFAULT false
  );
  
  CREATE TABLE "membership_tiers_blocks_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "membership_tiers_blocks_timeline_locales" (
  	"overline" varchar,
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_carousel_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_carousel_slides_locales" (
  	"alt" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "membership_tiers_blocks_people_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"variant" "enum_membership_tiers_blocks_people_grid_variant" DEFAULT 'board',
  	"source" "enum_membership_tiers_blocks_people_grid_source" DEFAULT 'group',
  	"group" "enum_membership_tiers_blocks_people_grid_group" DEFAULT 'board',
  	"hub_id" integer,
  	"limit" numeric DEFAULT 12,
  	"block_name" varchar
  );
  
  CREATE TABLE "membership_tiers_blocks_people_grid_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_creed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "membership_tiers_blocks_creed_locales" (
  	"title" varchar NOT NULL,
  	"intro" varchar,
  	"text" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_section_intro" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "membership_tiers_blocks_section_intro_locales" (
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_data_table_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"column" numeric
  );
  
  CREATE TABLE "membership_tiers_blocks_data_table_filters_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_data_table_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_data_table_columns_locales" (
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_data_table_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_data_table_rows_cells_locales" (
  	"value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_data_table_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_data_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_membership_tiers_blocks_data_table_header_align" DEFAULT 'left',
  	"variant" "enum_membership_tiers_blocks_data_table_variant" DEFAULT 'region',
  	"region_column" numeric,
  	"block_name" varchar
  );
  
  CREATE TABLE "membership_tiers_blocks_data_table_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_media_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "membership_tiers_blocks_media_card_locales" (
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_department_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_membership_tiers_blocks_department_grid_header_align" DEFAULT 'left',
  	"source" "enum_membership_tiers_blocks_department_grid_source" DEFAULT 'auto',
  	"limit" numeric DEFAULT 12,
  	"block_name" varchar
  );
  
  CREATE TABLE "membership_tiers_blocks_department_grid_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_contact_box" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"phone" varchar,
  	"email" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "membership_tiers_blocks_contact_box_locales" (
  	"title" varchar DEFAULT 'Манай үйлчлэлтэй холбогдох:' NOT NULL,
  	"person_name" varchar,
  	"person_role" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_contact_form_details_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar
  );
  
  CREATE TABLE "membership_tiers_blocks_contact_form_details_items_locales" (
  	"value" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_contact_form_details" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_contact_form_details_locales" (
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_contact_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "membership_tiers_blocks_contact_form_locales" (
  	"title" varchar NOT NULL,
  	"form_title" varchar NOT NULL,
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
  
  CREATE TABLE "membership_tiers_blocks_process_steps_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar
  );
  
  CREATE TABLE "membership_tiers_blocks_process_steps_items_locales" (
  	"text" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_membership_tiers_blocks_process_steps_header_align" DEFAULT 'left',
  	"block_name" varchar
  );
  
  CREATE TABLE "membership_tiers_blocks_process_steps_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_figure" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"variant" "enum_membership_tiers_blocks_figure_variant" DEFAULT 'map',
  	"block_name" varchar
  );
  
  CREATE TABLE "membership_tiers_blocks_figure_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_region_map_regions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"path_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_region_map_regions_locales" (
  	"name" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers_blocks_region_map" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_align" "enum_membership_tiers_blocks_region_map_header_align" DEFAULT 'left',
  	"link_to_table" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "membership_tiers_blocks_region_map_locales" (
  	"header_label" varchar,
  	"header_title" varchar,
  	"header_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "membership_tiers" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"order" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "membership_tiers_locales" (
  	"name" varchar NOT NULL,
  	"price" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "membership_tiers_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"departments_id" integer,
  	"hubs_id" integer,
  	"membership_tiers_id" integer,
  	"board_members_id" integer
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_card_url" varchar,
  	"sizes_card_width" numeric,
  	"sizes_card_height" numeric,
  	"sizes_card_mime_type" varchar,
  	"sizes_card_filesize" numeric,
  	"sizes_card_filename" varchar,
  	"sizes_wide_url" varchar,
  	"sizes_wide_width" numeric,
  	"sizes_wide_height" numeric,
  	"sizes_wide_mime_type" varchar,
  	"sizes_wide_filesize" numeric,
  	"sizes_wide_filename" varchar
  );
  
  CREATE TABLE "media_locales" (
  	"alt" varchar,
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "members_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "members" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"full_name" varchar NOT NULL,
  	"phone" varchar,
  	"organization" varchar,
  	"tier_id" integer,
  	"status" "enum_members_status" DEFAULT 'pending' NOT NULL,
  	"notes" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "feedback" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"phone" varchar NOT NULL,
  	"message" varchar NOT NULL,
  	"status" "enum_feedback_status" DEFAULT 'new' NOT NULL,
  	"source_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"departments_id" integer,
  	"hubs_id" integer,
  	"board_members_id" integer,
  	"membership_tiers_id" integer,
  	"media_id" integer,
  	"members_id" integer,
  	"feedback_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"members_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "theme" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"primary" varchar DEFAULT '#1465be' NOT NULL,
  	"primary_dark" varchar DEFAULT '#10539b' NOT NULL,
  	"primary_light" varchar DEFAULT '#3461e3' NOT NULL,
  	"neutral0" varchar DEFAULT '#ffffff' NOT NULL,
  	"neutral50" varchar DEFAULT '#fcfaf8' NOT NULL,
  	"neutral100" varchar DEFAULT '#f7f7f7' NOT NULL,
  	"neutral150" varchar DEFAULT '#f3f0e9' NOT NULL,
  	"neutral200" varchar DEFAULT '#e5e4e1' NOT NULL,
  	"neutral300" varchar DEFAULT '#d1d1d1' NOT NULL,
  	"neutral400" varchar DEFAULT '#7d7869' NOT NULL,
  	"neutral500" varchar DEFAULT '#5c584c' NOT NULL,
  	"neutral600" varchar DEFAULT '#2a2a2a' NOT NULL,
  	"neutral700" varchar DEFAULT '#1a1812' NOT NULL,
  	"neutral800" varchar DEFAULT '#171a20' NOT NULL,
  	"neutral900" varchar DEFAULT '#0d0d0d' NOT NULL,
  	"border_medium" varchar DEFAULT '#d4d3cf' NOT NULL,
  	"accent_red" varchar DEFAULT '#e53935' NOT NULL,
  	"link" varchar DEFAULT '#3461e3' NOT NULL,
  	"font_display" "enum_theme_font_display" DEFAULT 'playfair' NOT NULL,
  	"font_body" "enum_theme_font_body" DEFAULT 'manrope' NOT NULL,
  	"font_ui" "enum_theme_font_ui" DEFAULT 'inter' NOT NULL,
  	"text_display" varchar DEFAULT '48px' NOT NULL,
  	"text_h1" varchar DEFAULT '32px' NOT NULL,
  	"text_h2" varchar DEFAULT '24px' NOT NULL,
  	"text_h3" varchar DEFAULT '20px' NOT NULL,
  	"text_h4" varchar DEFAULT '18px' NOT NULL,
  	"text_body" varchar DEFAULT '16px' NOT NULL,
  	"text_sm" varchar DEFAULT '14px' NOT NULL,
  	"text_caption" varchar DEFAULT '12px' NOT NULL,
  	"section_pad" varchar DEFAULT '96px' NOT NULL,
  	"gutter" varchar DEFAULT '24px' NOT NULL,
  	"container_max" varchar DEFAULT '1360px' NOT NULL,
  	"radius_sm" varchar DEFAULT '4px' NOT NULL,
  	"radius_md" varchar DEFAULT '8px' NOT NULL,
  	"radius_lg" varchar DEFAULT '12px' NOT NULL,
  	"radius2xl" varchar DEFAULT '24px' NOT NULL,
  	"radius_full" varchar DEFAULT '9999px' NOT NULL,
  	"padding_md" varchar DEFAULT '16px' NOT NULL,
  	"padding_lg" varchar DEFAULT '24px' NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "site_settings_announcement_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_site_settings_announcement_links_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar
  );
  
  CREATE TABLE "site_settings_announcement_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "site_settings_header_nav" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_site_settings_header_nav_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar
  );
  
  CREATE TABLE "site_settings_header_nav_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "site_settings_footer_top_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_site_settings_footer_top_links_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar
  );
  
  CREATE TABLE "site_settings_footer_top_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "site_settings_footer_contact_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar
  );
  
  CREATE TABLE "site_settings_footer_contact_items_locales" (
  	"value" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "site_settings_footer_nav_groups_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_site_settings_footer_nav_groups_links_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar
  );
  
  CREATE TABLE "site_settings_footer_nav_groups_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "site_settings_footer_nav_groups" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "site_settings_footer_nav_groups_locales" (
  	"title" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "site_settings_footer_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_site_settings_footer_social_links_platform" NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "site_settings_footer_legal_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_site_settings_footer_legal_links_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar
  );
  
  CREATE TABLE "site_settings_footer_legal_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"announcement_enabled" boolean DEFAULT true,
  	"announcement_cta_type" "enum_site_settings_announcement_cta_type" DEFAULT 'reference',
  	"announcement_cta_new_tab" boolean,
  	"announcement_cta_url" varchar,
  	"announcement_show_language_switcher" boolean DEFAULT true,
  	"header_logo_id" integer,
  	"header_show_search" boolean DEFAULT true,
  	"header_login_link_type" "enum_site_settings_header_login_link_type" DEFAULT 'reference',
  	"header_login_link_new_tab" boolean,
  	"header_login_link_url" varchar,
  	"newsletter_enabled" boolean DEFAULT true,
  	"footer_logo_id" integer,
  	"auth_login_forgot_link_type" "enum_site_settings_auth_login_forgot_link_type" DEFAULT 'reference',
  	"auth_login_forgot_link_new_tab" boolean,
  	"auth_login_forgot_link_url" varchar,
  	"auth_login_register_link_type" "enum_site_settings_auth_login_register_link_type" DEFAULT 'reference',
  	"auth_login_register_link_new_tab" boolean,
  	"auth_login_register_link_url" varchar,
  	"auth_login_back_link_type" "enum_site_settings_auth_login_back_link_type" DEFAULT 'reference',
  	"auth_login_back_link_new_tab" boolean,
  	"auth_login_back_link_url" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "site_settings_locales" (
  	"announcement_text" varchar,
  	"announcement_cta_label" varchar,
  	"header_login_link_label" varchar,
  	"newsletter_title" varchar,
  	"newsletter_description" varchar,
  	"newsletter_placeholder" varchar,
  	"newsletter_button_label" varchar,
  	"footer_contact_title" varchar,
  	"footer_copyright" varchar,
  	"auth_login_title" varchar DEFAULT 'Нэвтрэх',
  	"auth_login_identifier_label" varchar DEFAULT 'Утасны дугаар',
  	"auth_login_identifier_placeholder" varchar DEFAULT '99112233',
  	"auth_login_password_label" varchar DEFAULT 'Нууц үг',
  	"auth_login_password_placeholder" varchar DEFAULT '••••••••',
  	"auth_login_submit_label" varchar DEFAULT 'Нэвтрэх',
  	"auth_login_divider_label" varchar DEFAULT 'Эсвэл',
  	"auth_login_forgot_link_label" varchar,
  	"auth_login_register_link_label" varchar,
  	"auth_login_back_link_label" varchar,
  	"auth_profile_header_link_label" varchar DEFAULT 'Профайл',
  	"auth_profile_greeting" varchar DEFAULT 'Тавтай морил, {name}',
  	"auth_profile_menu_account_label" varchar DEFAULT 'Хэрэглэгч',
  	"auth_profile_menu_logout_label" varchar DEFAULT 'Системээс Гарах',
  	"auth_profile_panel_title" varchar DEFAULT 'Хэрэглэгчийн Тохиргоо',
  	"auth_profile_edit_label" varchar DEFAULT 'Мэдээлэл өөрчлөх',
  	"auth_profile_general_title" varchar DEFAULT 'Ерөнхий Мэдээлэл',
  	"auth_profile_phone_label" varchar DEFAULT 'Утасны дугаар',
  	"auth_profile_email_label" varchar DEFAULT 'Цахим шуудан',
  	"auth_profile_password_title" varchar DEFAULT 'Нууц үг',
  	"auth_profile_password_edit_label" varchar DEFAULT 'Нууц үг солих',
  	"auth_profile_password_field_label" varchar DEFAULT 'Нууц үг',
  	"auth_profile_password_current_label" varchar DEFAULT 'Одоогийн нууц үг',
  	"auth_profile_password_new_label" varchar DEFAULT 'Шинэ нууц үг',
  	"auth_profile_password_confirm_label" varchar DEFAULT 'Шинэ нууц үгээ давтах',
  	"auth_profile_password_submit_label" varchar DEFAULT 'Хадгалах',
  	"auth_profile_password_cancel_label" varchar DEFAULT 'Болих',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "site_settings_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"departments_id" integer,
  	"hubs_id" integer,
  	"membership_tiers_id" integer
  );
  
  ALTER TABLE "pages_blocks_page_banner_links" ADD CONSTRAINT "pages_blocks_page_banner_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_page_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_page_banner_links_locales" ADD CONSTRAINT "pages_blocks_page_banner_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_page_banner_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_page_banner" ADD CONSTRAINT "pages_blocks_page_banner_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_page_banner" ADD CONSTRAINT "pages_blocks_page_banner_watermark_id_media_id_fk" FOREIGN KEY ("watermark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_page_banner" ADD CONSTRAINT "pages_blocks_page_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_page_banner_locales" ADD CONSTRAINT "pages_blocks_page_banner_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_page_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_section_tabs_items" ADD CONSTRAINT "pages_blocks_section_tabs_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_section_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_section_tabs_items_locales" ADD CONSTRAINT "pages_blocks_section_tabs_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_section_tabs_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_section_tabs" ADD CONSTRAINT "pages_blocks_section_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_rich_text" ADD CONSTRAINT "pages_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_rich_text_locales" ADD CONSTRAINT "pages_blocks_rich_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_card_grid_items" ADD CONSTRAINT "pages_blocks_card_grid_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_card_grid_items" ADD CONSTRAINT "pages_blocks_card_grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_card_grid_items_locales" ADD CONSTRAINT "pages_blocks_card_grid_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_card_grid_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_card_grid" ADD CONSTRAINT "pages_blocks_card_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_card_grid_locales" ADD CONSTRAINT "pages_blocks_card_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_quote_banner" ADD CONSTRAINT "pages_blocks_quote_banner_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_quote_banner" ADD CONSTRAINT "pages_blocks_quote_banner_watermark_id_media_id_fk" FOREIGN KEY ("watermark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_quote_banner" ADD CONSTRAINT "pages_blocks_quote_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_quote_banner_locales" ADD CONSTRAINT "pages_blocks_quote_banner_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_quote_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_accelerators_items" ADD CONSTRAINT "pages_blocks_accelerators_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_accelerators_items" ADD CONSTRAINT "pages_blocks_accelerators_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_accelerators"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_accelerators_items_locales" ADD CONSTRAINT "pages_blocks_accelerators_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_accelerators_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_accelerators" ADD CONSTRAINT "pages_blocks_accelerators_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_accelerators_locales" ADD CONSTRAINT "pages_blocks_accelerators_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_accelerators"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_posts_feed_filter_items" ADD CONSTRAINT "pages_blocks_posts_feed_filter_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_posts_feed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_posts_feed_filter_items_locales" ADD CONSTRAINT "pages_blocks_posts_feed_filter_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_posts_feed_filter_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_posts_feed" ADD CONSTRAINT "pages_blocks_posts_feed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_posts_feed_locales" ADD CONSTRAINT "pages_blocks_posts_feed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_posts_feed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery_items" ADD CONSTRAINT "pages_blocks_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery_items" ADD CONSTRAINT "pages_blocks_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery_items_locales" ADD CONSTRAINT "pages_blocks_gallery_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gallery_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery" ADD CONSTRAINT "pages_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_values_list_items" ADD CONSTRAINT "pages_blocks_values_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_values_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_values_list_items_locales" ADD CONSTRAINT "pages_blocks_values_list_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_values_list_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_values_list" ADD CONSTRAINT "pages_blocks_values_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_values_list_locales" ADD CONSTRAINT "pages_blocks_values_list_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_values_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_history_grid_paragraphs" ADD CONSTRAINT "pages_blocks_history_grid_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_history_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_history_grid_paragraphs_locales" ADD CONSTRAINT "pages_blocks_history_grid_paragraphs_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_history_grid_paragraphs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_history_grid" ADD CONSTRAINT "pages_blocks_history_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_history_grid_locales" ADD CONSTRAINT "pages_blocks_history_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_history_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_stats_row_items" ADD CONSTRAINT "pages_blocks_stats_row_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_stats_row"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_stats_row_items_locales" ADD CONSTRAINT "pages_blocks_stats_row_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_stats_row_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_stats_row" ADD CONSTRAINT "pages_blocks_stats_row_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_highlighted_text" ADD CONSTRAINT "pages_blocks_highlighted_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_highlighted_text_locales" ADD CONSTRAINT "pages_blocks_highlighted_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_highlighted_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline_items_lines" ADD CONSTRAINT "pages_blocks_timeline_items_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_timeline_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline_items_lines_locales" ADD CONSTRAINT "pages_blocks_timeline_items_lines_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_timeline_items_lines"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline_items" ADD CONSTRAINT "pages_blocks_timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline" ADD CONSTRAINT "pages_blocks_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline_locales" ADD CONSTRAINT "pages_blocks_timeline_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_carousel_slides" ADD CONSTRAINT "pages_blocks_carousel_slides_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_carousel_slides" ADD CONSTRAINT "pages_blocks_carousel_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_carousel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_carousel_slides_locales" ADD CONSTRAINT "pages_blocks_carousel_slides_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_carousel_slides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_carousel" ADD CONSTRAINT "pages_blocks_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_people_grid" ADD CONSTRAINT "pages_blocks_people_grid_hub_id_hubs_id_fk" FOREIGN KEY ("hub_id") REFERENCES "public"."hubs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_people_grid" ADD CONSTRAINT "pages_blocks_people_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_people_grid_locales" ADD CONSTRAINT "pages_blocks_people_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_people_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_creed" ADD CONSTRAINT "pages_blocks_creed_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_creed" ADD CONSTRAINT "pages_blocks_creed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_creed_locales" ADD CONSTRAINT "pages_blocks_creed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_creed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_section_intro" ADD CONSTRAINT "pages_blocks_section_intro_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_section_intro_locales" ADD CONSTRAINT "pages_blocks_section_intro_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_section_intro"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_data_table_filters" ADD CONSTRAINT "pages_blocks_data_table_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_data_table_filters_locales" ADD CONSTRAINT "pages_blocks_data_table_filters_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_data_table_filters"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_data_table_columns" ADD CONSTRAINT "pages_blocks_data_table_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_data_table_columns_locales" ADD CONSTRAINT "pages_blocks_data_table_columns_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_data_table_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_data_table_rows_cells" ADD CONSTRAINT "pages_blocks_data_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_data_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_data_table_rows_cells_locales" ADD CONSTRAINT "pages_blocks_data_table_rows_cells_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_data_table_rows_cells"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_data_table_rows" ADD CONSTRAINT "pages_blocks_data_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_data_table" ADD CONSTRAINT "pages_blocks_data_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_data_table_locales" ADD CONSTRAINT "pages_blocks_data_table_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_card" ADD CONSTRAINT "pages_blocks_media_card_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_card" ADD CONSTRAINT "pages_blocks_media_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_card_locales" ADD CONSTRAINT "pages_blocks_media_card_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_media_card"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_department_grid" ADD CONSTRAINT "pages_blocks_department_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_department_grid_locales" ADD CONSTRAINT "pages_blocks_department_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_department_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact_box" ADD CONSTRAINT "pages_blocks_contact_box_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact_box_locales" ADD CONSTRAINT "pages_blocks_contact_box_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_contact_box"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact_form_details_items" ADD CONSTRAINT "pages_blocks_contact_form_details_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_contact_form_details"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact_form_details_items_locales" ADD CONSTRAINT "pages_blocks_contact_form_details_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_contact_form_details_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact_form_details" ADD CONSTRAINT "pages_blocks_contact_form_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_contact_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact_form_details_locales" ADD CONSTRAINT "pages_blocks_contact_form_details_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_contact_form_details"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact_form" ADD CONSTRAINT "pages_blocks_contact_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact_form_locales" ADD CONSTRAINT "pages_blocks_contact_form_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_contact_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_process_steps_items" ADD CONSTRAINT "pages_blocks_process_steps_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_process_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_process_steps_items_locales" ADD CONSTRAINT "pages_blocks_process_steps_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_process_steps_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_process_steps" ADD CONSTRAINT "pages_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_process_steps_locales" ADD CONSTRAINT "pages_blocks_process_steps_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_process_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_figure" ADD CONSTRAINT "pages_blocks_figure_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_figure" ADD CONSTRAINT "pages_blocks_figure_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_figure_locales" ADD CONSTRAINT "pages_blocks_figure_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_figure"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_region_map_regions" ADD CONSTRAINT "pages_blocks_region_map_regions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_region_map"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_region_map_regions_locales" ADD CONSTRAINT "pages_blocks_region_map_regions_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_region_map_regions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_region_map" ADD CONSTRAINT "pages_blocks_region_map_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_region_map_locales" ADD CONSTRAINT "pages_blocks_region_map_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_region_map"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_departments_fk" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_hubs_fk" FOREIGN KEY ("hubs_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_membership_tiers_fk" FOREIGN KEY ("membership_tiers_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_board_members_fk" FOREIGN KEY ("board_members_id") REFERENCES "public"."board_members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_page_banner_links" ADD CONSTRAINT "_pages_v_blocks_page_banner_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_page_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_page_banner_links_locales" ADD CONSTRAINT "_pages_v_blocks_page_banner_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_page_banner_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_page_banner" ADD CONSTRAINT "_pages_v_blocks_page_banner_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_page_banner" ADD CONSTRAINT "_pages_v_blocks_page_banner_watermark_id_media_id_fk" FOREIGN KEY ("watermark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_page_banner" ADD CONSTRAINT "_pages_v_blocks_page_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_page_banner_locales" ADD CONSTRAINT "_pages_v_blocks_page_banner_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_page_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_section_tabs_items" ADD CONSTRAINT "_pages_v_blocks_section_tabs_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_section_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_section_tabs_items_locales" ADD CONSTRAINT "_pages_v_blocks_section_tabs_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_section_tabs_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_section_tabs" ADD CONSTRAINT "_pages_v_blocks_section_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_rich_text" ADD CONSTRAINT "_pages_v_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_rich_text_locales" ADD CONSTRAINT "_pages_v_blocks_rich_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_card_grid_items" ADD CONSTRAINT "_pages_v_blocks_card_grid_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_card_grid_items" ADD CONSTRAINT "_pages_v_blocks_card_grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_card_grid_items_locales" ADD CONSTRAINT "_pages_v_blocks_card_grid_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_card_grid_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_card_grid" ADD CONSTRAINT "_pages_v_blocks_card_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_card_grid_locales" ADD CONSTRAINT "_pages_v_blocks_card_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_quote_banner" ADD CONSTRAINT "_pages_v_blocks_quote_banner_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_quote_banner" ADD CONSTRAINT "_pages_v_blocks_quote_banner_watermark_id_media_id_fk" FOREIGN KEY ("watermark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_quote_banner" ADD CONSTRAINT "_pages_v_blocks_quote_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_quote_banner_locales" ADD CONSTRAINT "_pages_v_blocks_quote_banner_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_quote_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_accelerators_items" ADD CONSTRAINT "_pages_v_blocks_accelerators_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_accelerators_items" ADD CONSTRAINT "_pages_v_blocks_accelerators_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_accelerators"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_accelerators_items_locales" ADD CONSTRAINT "_pages_v_blocks_accelerators_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_accelerators_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_accelerators" ADD CONSTRAINT "_pages_v_blocks_accelerators_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_accelerators_locales" ADD CONSTRAINT "_pages_v_blocks_accelerators_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_accelerators"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_posts_feed_filter_items" ADD CONSTRAINT "_pages_v_blocks_posts_feed_filter_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_posts_feed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_posts_feed_filter_items_locales" ADD CONSTRAINT "_pages_v_blocks_posts_feed_filter_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_posts_feed_filter_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_posts_feed" ADD CONSTRAINT "_pages_v_blocks_posts_feed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_posts_feed_locales" ADD CONSTRAINT "_pages_v_blocks_posts_feed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_posts_feed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery_items" ADD CONSTRAINT "_pages_v_blocks_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery_items" ADD CONSTRAINT "_pages_v_blocks_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery_items_locales" ADD CONSTRAINT "_pages_v_blocks_gallery_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_gallery_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery" ADD CONSTRAINT "_pages_v_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_values_list_items" ADD CONSTRAINT "_pages_v_blocks_values_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_values_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_values_list_items_locales" ADD CONSTRAINT "_pages_v_blocks_values_list_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_values_list_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_values_list" ADD CONSTRAINT "_pages_v_blocks_values_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_values_list_locales" ADD CONSTRAINT "_pages_v_blocks_values_list_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_values_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_history_grid_paragraphs" ADD CONSTRAINT "_pages_v_blocks_history_grid_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_history_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_history_grid_paragraphs_locales" ADD CONSTRAINT "_pages_v_blocks_history_grid_paragraphs_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_history_grid_paragraphs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_history_grid" ADD CONSTRAINT "_pages_v_blocks_history_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_history_grid_locales" ADD CONSTRAINT "_pages_v_blocks_history_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_history_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_stats_row_items" ADD CONSTRAINT "_pages_v_blocks_stats_row_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_stats_row"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_stats_row_items_locales" ADD CONSTRAINT "_pages_v_blocks_stats_row_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_stats_row_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_stats_row" ADD CONSTRAINT "_pages_v_blocks_stats_row_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_highlighted_text" ADD CONSTRAINT "_pages_v_blocks_highlighted_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_highlighted_text_locales" ADD CONSTRAINT "_pages_v_blocks_highlighted_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_highlighted_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline_items_lines" ADD CONSTRAINT "_pages_v_blocks_timeline_items_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_timeline_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline_items_lines_locales" ADD CONSTRAINT "_pages_v_blocks_timeline_items_lines_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_timeline_items_lines"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline_items" ADD CONSTRAINT "_pages_v_blocks_timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline" ADD CONSTRAINT "_pages_v_blocks_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline_locales" ADD CONSTRAINT "_pages_v_blocks_timeline_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_carousel_slides" ADD CONSTRAINT "_pages_v_blocks_carousel_slides_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_carousel_slides" ADD CONSTRAINT "_pages_v_blocks_carousel_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_carousel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_carousel_slides_locales" ADD CONSTRAINT "_pages_v_blocks_carousel_slides_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_carousel_slides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_carousel" ADD CONSTRAINT "_pages_v_blocks_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_people_grid" ADD CONSTRAINT "_pages_v_blocks_people_grid_hub_id_hubs_id_fk" FOREIGN KEY ("hub_id") REFERENCES "public"."hubs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_people_grid" ADD CONSTRAINT "_pages_v_blocks_people_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_people_grid_locales" ADD CONSTRAINT "_pages_v_blocks_people_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_people_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_creed" ADD CONSTRAINT "_pages_v_blocks_creed_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_creed" ADD CONSTRAINT "_pages_v_blocks_creed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_creed_locales" ADD CONSTRAINT "_pages_v_blocks_creed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_creed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_section_intro" ADD CONSTRAINT "_pages_v_blocks_section_intro_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_section_intro_locales" ADD CONSTRAINT "_pages_v_blocks_section_intro_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_section_intro"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_data_table_filters" ADD CONSTRAINT "_pages_v_blocks_data_table_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_data_table_filters_locales" ADD CONSTRAINT "_pages_v_blocks_data_table_filters_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_data_table_filters"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_data_table_columns" ADD CONSTRAINT "_pages_v_blocks_data_table_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_data_table_columns_locales" ADD CONSTRAINT "_pages_v_blocks_data_table_columns_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_data_table_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_data_table_rows_cells" ADD CONSTRAINT "_pages_v_blocks_data_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_data_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_data_table_rows_cells_locales" ADD CONSTRAINT "_pages_v_blocks_data_table_rows_cells_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_data_table_rows_cells"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_data_table_rows" ADD CONSTRAINT "_pages_v_blocks_data_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_data_table" ADD CONSTRAINT "_pages_v_blocks_data_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_data_table_locales" ADD CONSTRAINT "_pages_v_blocks_data_table_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_card" ADD CONSTRAINT "_pages_v_blocks_media_card_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_card" ADD CONSTRAINT "_pages_v_blocks_media_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_card_locales" ADD CONSTRAINT "_pages_v_blocks_media_card_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_media_card"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_department_grid" ADD CONSTRAINT "_pages_v_blocks_department_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_department_grid_locales" ADD CONSTRAINT "_pages_v_blocks_department_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_department_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact_box" ADD CONSTRAINT "_pages_v_blocks_contact_box_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact_box_locales" ADD CONSTRAINT "_pages_v_blocks_contact_box_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_contact_box"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact_form_details_items" ADD CONSTRAINT "_pages_v_blocks_contact_form_details_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_contact_form_details"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact_form_details_items_locales" ADD CONSTRAINT "_pages_v_blocks_contact_form_details_items_locales_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_contact_form_details_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact_form_details" ADD CONSTRAINT "_pages_v_blocks_contact_form_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_contact_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact_form_details_locales" ADD CONSTRAINT "_pages_v_blocks_contact_form_details_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_contact_form_details"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact_form" ADD CONSTRAINT "_pages_v_blocks_contact_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact_form_locales" ADD CONSTRAINT "_pages_v_blocks_contact_form_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_contact_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_process_steps_items" ADD CONSTRAINT "_pages_v_blocks_process_steps_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_process_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_process_steps_items_locales" ADD CONSTRAINT "_pages_v_blocks_process_steps_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_process_steps_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_process_steps" ADD CONSTRAINT "_pages_v_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_process_steps_locales" ADD CONSTRAINT "_pages_v_blocks_process_steps_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_process_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_figure" ADD CONSTRAINT "_pages_v_blocks_figure_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_figure" ADD CONSTRAINT "_pages_v_blocks_figure_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_figure_locales" ADD CONSTRAINT "_pages_v_blocks_figure_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_figure"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_region_map_regions" ADD CONSTRAINT "_pages_v_blocks_region_map_regions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_region_map"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_region_map_regions_locales" ADD CONSTRAINT "_pages_v_blocks_region_map_regions_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_region_map_regions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_region_map" ADD CONSTRAINT "_pages_v_blocks_region_map_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_region_map_locales" ADD CONSTRAINT "_pages_v_blocks_region_map_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_region_map"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_departments_fk" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_hubs_fk" FOREIGN KEY ("hubs_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_membership_tiers_fk" FOREIGN KEY ("membership_tiers_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_board_members_fk" FOREIGN KEY ("board_members_id") REFERENCES "public"."board_members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_page_banner_links" ADD CONSTRAINT "posts_blocks_page_banner_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_page_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_page_banner_links_locales" ADD CONSTRAINT "posts_blocks_page_banner_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_page_banner_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_page_banner" ADD CONSTRAINT "posts_blocks_page_banner_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_page_banner" ADD CONSTRAINT "posts_blocks_page_banner_watermark_id_media_id_fk" FOREIGN KEY ("watermark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_page_banner" ADD CONSTRAINT "posts_blocks_page_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_page_banner_locales" ADD CONSTRAINT "posts_blocks_page_banner_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_page_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_section_tabs_items" ADD CONSTRAINT "posts_blocks_section_tabs_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_section_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_section_tabs_items_locales" ADD CONSTRAINT "posts_blocks_section_tabs_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_section_tabs_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_section_tabs" ADD CONSTRAINT "posts_blocks_section_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_rich_text" ADD CONSTRAINT "posts_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_rich_text_locales" ADD CONSTRAINT "posts_blocks_rich_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_card_grid_items" ADD CONSTRAINT "posts_blocks_card_grid_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_card_grid_items" ADD CONSTRAINT "posts_blocks_card_grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_card_grid_items_locales" ADD CONSTRAINT "posts_blocks_card_grid_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_card_grid_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_card_grid" ADD CONSTRAINT "posts_blocks_card_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_card_grid_locales" ADD CONSTRAINT "posts_blocks_card_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_quote_banner" ADD CONSTRAINT "posts_blocks_quote_banner_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_quote_banner" ADD CONSTRAINT "posts_blocks_quote_banner_watermark_id_media_id_fk" FOREIGN KEY ("watermark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_quote_banner" ADD CONSTRAINT "posts_blocks_quote_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_quote_banner_locales" ADD CONSTRAINT "posts_blocks_quote_banner_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_quote_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_accelerators_items" ADD CONSTRAINT "posts_blocks_accelerators_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_accelerators_items" ADD CONSTRAINT "posts_blocks_accelerators_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_accelerators"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_accelerators_items_locales" ADD CONSTRAINT "posts_blocks_accelerators_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_accelerators_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_accelerators" ADD CONSTRAINT "posts_blocks_accelerators_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_accelerators_locales" ADD CONSTRAINT "posts_blocks_accelerators_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_accelerators"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_posts_feed_filter_items" ADD CONSTRAINT "posts_blocks_posts_feed_filter_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_posts_feed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_posts_feed_filter_items_locales" ADD CONSTRAINT "posts_blocks_posts_feed_filter_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_posts_feed_filter_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_posts_feed" ADD CONSTRAINT "posts_blocks_posts_feed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_posts_feed_locales" ADD CONSTRAINT "posts_blocks_posts_feed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_posts_feed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_gallery_items" ADD CONSTRAINT "posts_blocks_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_gallery_items" ADD CONSTRAINT "posts_blocks_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_gallery_items_locales" ADD CONSTRAINT "posts_blocks_gallery_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_gallery_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_gallery" ADD CONSTRAINT "posts_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_values_list_items" ADD CONSTRAINT "posts_blocks_values_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_values_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_values_list_items_locales" ADD CONSTRAINT "posts_blocks_values_list_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_values_list_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_values_list" ADD CONSTRAINT "posts_blocks_values_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_values_list_locales" ADD CONSTRAINT "posts_blocks_values_list_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_values_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_history_grid_paragraphs" ADD CONSTRAINT "posts_blocks_history_grid_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_history_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_history_grid_paragraphs_locales" ADD CONSTRAINT "posts_blocks_history_grid_paragraphs_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_history_grid_paragraphs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_history_grid" ADD CONSTRAINT "posts_blocks_history_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_history_grid_locales" ADD CONSTRAINT "posts_blocks_history_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_history_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_stats_row_items" ADD CONSTRAINT "posts_blocks_stats_row_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_stats_row"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_stats_row_items_locales" ADD CONSTRAINT "posts_blocks_stats_row_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_stats_row_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_stats_row" ADD CONSTRAINT "posts_blocks_stats_row_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_highlighted_text" ADD CONSTRAINT "posts_blocks_highlighted_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_highlighted_text_locales" ADD CONSTRAINT "posts_blocks_highlighted_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_highlighted_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_timeline_items_lines" ADD CONSTRAINT "posts_blocks_timeline_items_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_timeline_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_timeline_items_lines_locales" ADD CONSTRAINT "posts_blocks_timeline_items_lines_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_timeline_items_lines"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_timeline_items" ADD CONSTRAINT "posts_blocks_timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_timeline" ADD CONSTRAINT "posts_blocks_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_timeline_locales" ADD CONSTRAINT "posts_blocks_timeline_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_carousel_slides" ADD CONSTRAINT "posts_blocks_carousel_slides_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_carousel_slides" ADD CONSTRAINT "posts_blocks_carousel_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_carousel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_carousel_slides_locales" ADD CONSTRAINT "posts_blocks_carousel_slides_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_carousel_slides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_carousel" ADD CONSTRAINT "posts_blocks_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_people_grid" ADD CONSTRAINT "posts_blocks_people_grid_hub_id_hubs_id_fk" FOREIGN KEY ("hub_id") REFERENCES "public"."hubs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_people_grid" ADD CONSTRAINT "posts_blocks_people_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_people_grid_locales" ADD CONSTRAINT "posts_blocks_people_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_people_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_creed" ADD CONSTRAINT "posts_blocks_creed_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_creed" ADD CONSTRAINT "posts_blocks_creed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_creed_locales" ADD CONSTRAINT "posts_blocks_creed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_creed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_section_intro" ADD CONSTRAINT "posts_blocks_section_intro_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_section_intro_locales" ADD CONSTRAINT "posts_blocks_section_intro_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_section_intro"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_data_table_filters" ADD CONSTRAINT "posts_blocks_data_table_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_data_table_filters_locales" ADD CONSTRAINT "posts_blocks_data_table_filters_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_data_table_filters"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_data_table_columns" ADD CONSTRAINT "posts_blocks_data_table_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_data_table_columns_locales" ADD CONSTRAINT "posts_blocks_data_table_columns_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_data_table_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_data_table_rows_cells" ADD CONSTRAINT "posts_blocks_data_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_data_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_data_table_rows_cells_locales" ADD CONSTRAINT "posts_blocks_data_table_rows_cells_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_data_table_rows_cells"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_data_table_rows" ADD CONSTRAINT "posts_blocks_data_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_data_table" ADD CONSTRAINT "posts_blocks_data_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_data_table_locales" ADD CONSTRAINT "posts_blocks_data_table_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_media_card" ADD CONSTRAINT "posts_blocks_media_card_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_media_card" ADD CONSTRAINT "posts_blocks_media_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_media_card_locales" ADD CONSTRAINT "posts_blocks_media_card_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_media_card"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_department_grid" ADD CONSTRAINT "posts_blocks_department_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_department_grid_locales" ADD CONSTRAINT "posts_blocks_department_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_department_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_contact_box" ADD CONSTRAINT "posts_blocks_contact_box_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_contact_box_locales" ADD CONSTRAINT "posts_blocks_contact_box_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_contact_box"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_contact_form_details_items" ADD CONSTRAINT "posts_blocks_contact_form_details_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_contact_form_details"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_contact_form_details_items_locales" ADD CONSTRAINT "posts_blocks_contact_form_details_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_contact_form_details_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_contact_form_details" ADD CONSTRAINT "posts_blocks_contact_form_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_contact_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_contact_form_details_locales" ADD CONSTRAINT "posts_blocks_contact_form_details_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_contact_form_details"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_contact_form" ADD CONSTRAINT "posts_blocks_contact_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_contact_form_locales" ADD CONSTRAINT "posts_blocks_contact_form_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_contact_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_process_steps_items" ADD CONSTRAINT "posts_blocks_process_steps_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_process_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_process_steps_items_locales" ADD CONSTRAINT "posts_blocks_process_steps_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_process_steps_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_process_steps" ADD CONSTRAINT "posts_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_process_steps_locales" ADD CONSTRAINT "posts_blocks_process_steps_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_process_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_figure" ADD CONSTRAINT "posts_blocks_figure_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_blocks_figure" ADD CONSTRAINT "posts_blocks_figure_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_figure_locales" ADD CONSTRAINT "posts_blocks_figure_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_figure"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_region_map_regions" ADD CONSTRAINT "posts_blocks_region_map_regions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_region_map"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_region_map_regions_locales" ADD CONSTRAINT "posts_blocks_region_map_regions_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_region_map_regions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_region_map" ADD CONSTRAINT "posts_blocks_region_map_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_blocks_region_map_locales" ADD CONSTRAINT "posts_blocks_region_map_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts_blocks_region_map"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_cover_id_media_id_fk" FOREIGN KEY ("cover_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_locales" ADD CONSTRAINT "posts_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_departments_fk" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_hubs_fk" FOREIGN KEY ("hubs_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_membership_tiers_fk" FOREIGN KEY ("membership_tiers_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_board_members_fk" FOREIGN KEY ("board_members_id") REFERENCES "public"."board_members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_page_banner_links" ADD CONSTRAINT "_posts_v_blocks_page_banner_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_page_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_page_banner_links_locales" ADD CONSTRAINT "_posts_v_blocks_page_banner_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_page_banner_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_page_banner" ADD CONSTRAINT "_posts_v_blocks_page_banner_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_page_banner" ADD CONSTRAINT "_posts_v_blocks_page_banner_watermark_id_media_id_fk" FOREIGN KEY ("watermark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_page_banner" ADD CONSTRAINT "_posts_v_blocks_page_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_page_banner_locales" ADD CONSTRAINT "_posts_v_blocks_page_banner_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_page_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_section_tabs_items" ADD CONSTRAINT "_posts_v_blocks_section_tabs_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_section_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_section_tabs_items_locales" ADD CONSTRAINT "_posts_v_blocks_section_tabs_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_section_tabs_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_section_tabs" ADD CONSTRAINT "_posts_v_blocks_section_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_rich_text" ADD CONSTRAINT "_posts_v_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_rich_text_locales" ADD CONSTRAINT "_posts_v_blocks_rich_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_card_grid_items" ADD CONSTRAINT "_posts_v_blocks_card_grid_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_card_grid_items" ADD CONSTRAINT "_posts_v_blocks_card_grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_card_grid_items_locales" ADD CONSTRAINT "_posts_v_blocks_card_grid_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_card_grid_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_card_grid" ADD CONSTRAINT "_posts_v_blocks_card_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_card_grid_locales" ADD CONSTRAINT "_posts_v_blocks_card_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_quote_banner" ADD CONSTRAINT "_posts_v_blocks_quote_banner_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_quote_banner" ADD CONSTRAINT "_posts_v_blocks_quote_banner_watermark_id_media_id_fk" FOREIGN KEY ("watermark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_quote_banner" ADD CONSTRAINT "_posts_v_blocks_quote_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_quote_banner_locales" ADD CONSTRAINT "_posts_v_blocks_quote_banner_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_quote_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_accelerators_items" ADD CONSTRAINT "_posts_v_blocks_accelerators_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_accelerators_items" ADD CONSTRAINT "_posts_v_blocks_accelerators_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_accelerators"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_accelerators_items_locales" ADD CONSTRAINT "_posts_v_blocks_accelerators_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_accelerators_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_accelerators" ADD CONSTRAINT "_posts_v_blocks_accelerators_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_accelerators_locales" ADD CONSTRAINT "_posts_v_blocks_accelerators_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_accelerators"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_posts_feed_filter_items" ADD CONSTRAINT "_posts_v_blocks_posts_feed_filter_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_posts_feed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_posts_feed_filter_items_locales" ADD CONSTRAINT "_posts_v_blocks_posts_feed_filter_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_posts_feed_filter_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_posts_feed" ADD CONSTRAINT "_posts_v_blocks_posts_feed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_posts_feed_locales" ADD CONSTRAINT "_posts_v_blocks_posts_feed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_posts_feed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_gallery_items" ADD CONSTRAINT "_posts_v_blocks_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_gallery_items" ADD CONSTRAINT "_posts_v_blocks_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_gallery_items_locales" ADD CONSTRAINT "_posts_v_blocks_gallery_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_gallery_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_gallery" ADD CONSTRAINT "_posts_v_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_values_list_items" ADD CONSTRAINT "_posts_v_blocks_values_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_values_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_values_list_items_locales" ADD CONSTRAINT "_posts_v_blocks_values_list_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_values_list_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_values_list" ADD CONSTRAINT "_posts_v_blocks_values_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_values_list_locales" ADD CONSTRAINT "_posts_v_blocks_values_list_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_values_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_history_grid_paragraphs" ADD CONSTRAINT "_posts_v_blocks_history_grid_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_history_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_history_grid_paragraphs_locales" ADD CONSTRAINT "_posts_v_blocks_history_grid_paragraphs_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_history_grid_paragraphs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_history_grid" ADD CONSTRAINT "_posts_v_blocks_history_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_history_grid_locales" ADD CONSTRAINT "_posts_v_blocks_history_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_history_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_stats_row_items" ADD CONSTRAINT "_posts_v_blocks_stats_row_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_stats_row"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_stats_row_items_locales" ADD CONSTRAINT "_posts_v_blocks_stats_row_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_stats_row_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_stats_row" ADD CONSTRAINT "_posts_v_blocks_stats_row_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_highlighted_text" ADD CONSTRAINT "_posts_v_blocks_highlighted_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_highlighted_text_locales" ADD CONSTRAINT "_posts_v_blocks_highlighted_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_highlighted_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_timeline_items_lines" ADD CONSTRAINT "_posts_v_blocks_timeline_items_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_timeline_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_timeline_items_lines_locales" ADD CONSTRAINT "_posts_v_blocks_timeline_items_lines_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_timeline_items_lines"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_timeline_items" ADD CONSTRAINT "_posts_v_blocks_timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_timeline" ADD CONSTRAINT "_posts_v_blocks_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_timeline_locales" ADD CONSTRAINT "_posts_v_blocks_timeline_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_carousel_slides" ADD CONSTRAINT "_posts_v_blocks_carousel_slides_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_carousel_slides" ADD CONSTRAINT "_posts_v_blocks_carousel_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_carousel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_carousel_slides_locales" ADD CONSTRAINT "_posts_v_blocks_carousel_slides_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_carousel_slides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_carousel" ADD CONSTRAINT "_posts_v_blocks_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_people_grid" ADD CONSTRAINT "_posts_v_blocks_people_grid_hub_id_hubs_id_fk" FOREIGN KEY ("hub_id") REFERENCES "public"."hubs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_people_grid" ADD CONSTRAINT "_posts_v_blocks_people_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_people_grid_locales" ADD CONSTRAINT "_posts_v_blocks_people_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_people_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_creed" ADD CONSTRAINT "_posts_v_blocks_creed_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_creed" ADD CONSTRAINT "_posts_v_blocks_creed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_creed_locales" ADD CONSTRAINT "_posts_v_blocks_creed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_creed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_section_intro" ADD CONSTRAINT "_posts_v_blocks_section_intro_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_section_intro_locales" ADD CONSTRAINT "_posts_v_blocks_section_intro_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_section_intro"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_data_table_filters" ADD CONSTRAINT "_posts_v_blocks_data_table_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_data_table_filters_locales" ADD CONSTRAINT "_posts_v_blocks_data_table_filters_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_data_table_filters"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_data_table_columns" ADD CONSTRAINT "_posts_v_blocks_data_table_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_data_table_columns_locales" ADD CONSTRAINT "_posts_v_blocks_data_table_columns_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_data_table_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_data_table_rows_cells" ADD CONSTRAINT "_posts_v_blocks_data_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_data_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_data_table_rows_cells_locales" ADD CONSTRAINT "_posts_v_blocks_data_table_rows_cells_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_data_table_rows_cells"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_data_table_rows" ADD CONSTRAINT "_posts_v_blocks_data_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_data_table" ADD CONSTRAINT "_posts_v_blocks_data_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_data_table_locales" ADD CONSTRAINT "_posts_v_blocks_data_table_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_media_card" ADD CONSTRAINT "_posts_v_blocks_media_card_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_media_card" ADD CONSTRAINT "_posts_v_blocks_media_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_media_card_locales" ADD CONSTRAINT "_posts_v_blocks_media_card_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_media_card"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_department_grid" ADD CONSTRAINT "_posts_v_blocks_department_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_department_grid_locales" ADD CONSTRAINT "_posts_v_blocks_department_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_department_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_contact_box" ADD CONSTRAINT "_posts_v_blocks_contact_box_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_contact_box_locales" ADD CONSTRAINT "_posts_v_blocks_contact_box_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_contact_box"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_contact_form_details_items" ADD CONSTRAINT "_posts_v_blocks_contact_form_details_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_contact_form_details"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_contact_form_details_items_locales" ADD CONSTRAINT "_posts_v_blocks_contact_form_details_items_locales_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_contact_form_details_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_contact_form_details" ADD CONSTRAINT "_posts_v_blocks_contact_form_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_contact_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_contact_form_details_locales" ADD CONSTRAINT "_posts_v_blocks_contact_form_details_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_contact_form_details"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_contact_form" ADD CONSTRAINT "_posts_v_blocks_contact_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_contact_form_locales" ADD CONSTRAINT "_posts_v_blocks_contact_form_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_contact_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_process_steps_items" ADD CONSTRAINT "_posts_v_blocks_process_steps_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_process_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_process_steps_items_locales" ADD CONSTRAINT "_posts_v_blocks_process_steps_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_process_steps_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_process_steps" ADD CONSTRAINT "_posts_v_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_process_steps_locales" ADD CONSTRAINT "_posts_v_blocks_process_steps_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_process_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_figure" ADD CONSTRAINT "_posts_v_blocks_figure_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_figure" ADD CONSTRAINT "_posts_v_blocks_figure_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_figure_locales" ADD CONSTRAINT "_posts_v_blocks_figure_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_figure"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_region_map_regions" ADD CONSTRAINT "_posts_v_blocks_region_map_regions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_region_map"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_region_map_regions_locales" ADD CONSTRAINT "_posts_v_blocks_region_map_regions_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_region_map_regions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_region_map" ADD CONSTRAINT "_posts_v_blocks_region_map_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_blocks_region_map_locales" ADD CONSTRAINT "_posts_v_blocks_region_map_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v_blocks_region_map"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_parent_id_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_cover_id_media_id_fk" FOREIGN KEY ("version_cover_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_locales" ADD CONSTRAINT "_posts_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_departments_fk" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_hubs_fk" FOREIGN KEY ("hubs_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_membership_tiers_fk" FOREIGN KEY ("membership_tiers_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_board_members_fk" FOREIGN KEY ("board_members_id") REFERENCES "public"."board_members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_page_banner_links" ADD CONSTRAINT "departments_blocks_page_banner_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_page_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_page_banner_links_locales" ADD CONSTRAINT "departments_blocks_page_banner_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_page_banner_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_page_banner" ADD CONSTRAINT "departments_blocks_page_banner_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "departments_blocks_page_banner" ADD CONSTRAINT "departments_blocks_page_banner_watermark_id_media_id_fk" FOREIGN KEY ("watermark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "departments_blocks_page_banner" ADD CONSTRAINT "departments_blocks_page_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_page_banner_locales" ADD CONSTRAINT "departments_blocks_page_banner_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_page_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_section_tabs_items" ADD CONSTRAINT "departments_blocks_section_tabs_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_section_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_section_tabs_items_locales" ADD CONSTRAINT "departments_blocks_section_tabs_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_section_tabs_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_section_tabs" ADD CONSTRAINT "departments_blocks_section_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_rich_text" ADD CONSTRAINT "departments_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_rich_text_locales" ADD CONSTRAINT "departments_blocks_rich_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_card_grid_items" ADD CONSTRAINT "departments_blocks_card_grid_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "departments_blocks_card_grid_items" ADD CONSTRAINT "departments_blocks_card_grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_card_grid_items_locales" ADD CONSTRAINT "departments_blocks_card_grid_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_card_grid_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_card_grid" ADD CONSTRAINT "departments_blocks_card_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_card_grid_locales" ADD CONSTRAINT "departments_blocks_card_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_quote_banner" ADD CONSTRAINT "departments_blocks_quote_banner_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "departments_blocks_quote_banner" ADD CONSTRAINT "departments_blocks_quote_banner_watermark_id_media_id_fk" FOREIGN KEY ("watermark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "departments_blocks_quote_banner" ADD CONSTRAINT "departments_blocks_quote_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_quote_banner_locales" ADD CONSTRAINT "departments_blocks_quote_banner_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_quote_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_accelerators_items" ADD CONSTRAINT "departments_blocks_accelerators_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "departments_blocks_accelerators_items" ADD CONSTRAINT "departments_blocks_accelerators_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_accelerators"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_accelerators_items_locales" ADD CONSTRAINT "departments_blocks_accelerators_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_accelerators_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_accelerators" ADD CONSTRAINT "departments_blocks_accelerators_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_accelerators_locales" ADD CONSTRAINT "departments_blocks_accelerators_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_accelerators"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_posts_feed_filter_items" ADD CONSTRAINT "departments_blocks_posts_feed_filter_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_posts_feed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_posts_feed_filter_items_locales" ADD CONSTRAINT "departments_blocks_posts_feed_filter_items_locales_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_posts_feed_filter_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_posts_feed" ADD CONSTRAINT "departments_blocks_posts_feed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_posts_feed_locales" ADD CONSTRAINT "departments_blocks_posts_feed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_posts_feed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_gallery_items" ADD CONSTRAINT "departments_blocks_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "departments_blocks_gallery_items" ADD CONSTRAINT "departments_blocks_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_gallery_items_locales" ADD CONSTRAINT "departments_blocks_gallery_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_gallery_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_gallery" ADD CONSTRAINT "departments_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_values_list_items" ADD CONSTRAINT "departments_blocks_values_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_values_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_values_list_items_locales" ADD CONSTRAINT "departments_blocks_values_list_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_values_list_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_values_list" ADD CONSTRAINT "departments_blocks_values_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_values_list_locales" ADD CONSTRAINT "departments_blocks_values_list_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_values_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_history_grid_paragraphs" ADD CONSTRAINT "departments_blocks_history_grid_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_history_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_history_grid_paragraphs_locales" ADD CONSTRAINT "departments_blocks_history_grid_paragraphs_locales_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_history_grid_paragraphs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_history_grid" ADD CONSTRAINT "departments_blocks_history_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_history_grid_locales" ADD CONSTRAINT "departments_blocks_history_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_history_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_stats_row_items" ADD CONSTRAINT "departments_blocks_stats_row_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_stats_row"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_stats_row_items_locales" ADD CONSTRAINT "departments_blocks_stats_row_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_stats_row_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_stats_row" ADD CONSTRAINT "departments_blocks_stats_row_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_highlighted_text" ADD CONSTRAINT "departments_blocks_highlighted_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_highlighted_text_locales" ADD CONSTRAINT "departments_blocks_highlighted_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_highlighted_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_timeline_items_lines" ADD CONSTRAINT "departments_blocks_timeline_items_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_timeline_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_timeline_items_lines_locales" ADD CONSTRAINT "departments_blocks_timeline_items_lines_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_timeline_items_lines"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_timeline_items" ADD CONSTRAINT "departments_blocks_timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_timeline" ADD CONSTRAINT "departments_blocks_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_timeline_locales" ADD CONSTRAINT "departments_blocks_timeline_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_carousel_slides" ADD CONSTRAINT "departments_blocks_carousel_slides_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "departments_blocks_carousel_slides" ADD CONSTRAINT "departments_blocks_carousel_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_carousel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_carousel_slides_locales" ADD CONSTRAINT "departments_blocks_carousel_slides_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_carousel_slides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_carousel" ADD CONSTRAINT "departments_blocks_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_people_grid" ADD CONSTRAINT "departments_blocks_people_grid_hub_id_hubs_id_fk" FOREIGN KEY ("hub_id") REFERENCES "public"."hubs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "departments_blocks_people_grid" ADD CONSTRAINT "departments_blocks_people_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_people_grid_locales" ADD CONSTRAINT "departments_blocks_people_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_people_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_creed" ADD CONSTRAINT "departments_blocks_creed_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "departments_blocks_creed" ADD CONSTRAINT "departments_blocks_creed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_creed_locales" ADD CONSTRAINT "departments_blocks_creed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_creed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_section_intro" ADD CONSTRAINT "departments_blocks_section_intro_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_section_intro_locales" ADD CONSTRAINT "departments_blocks_section_intro_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_section_intro"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_data_table_filters" ADD CONSTRAINT "departments_blocks_data_table_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_data_table_filters_locales" ADD CONSTRAINT "departments_blocks_data_table_filters_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_data_table_filters"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_data_table_columns" ADD CONSTRAINT "departments_blocks_data_table_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_data_table_columns_locales" ADD CONSTRAINT "departments_blocks_data_table_columns_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_data_table_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_data_table_rows_cells" ADD CONSTRAINT "departments_blocks_data_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_data_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_data_table_rows_cells_locales" ADD CONSTRAINT "departments_blocks_data_table_rows_cells_locales_parent_i_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_data_table_rows_cells"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_data_table_rows" ADD CONSTRAINT "departments_blocks_data_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_data_table" ADD CONSTRAINT "departments_blocks_data_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_data_table_locales" ADD CONSTRAINT "departments_blocks_data_table_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_media_card" ADD CONSTRAINT "departments_blocks_media_card_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "departments_blocks_media_card" ADD CONSTRAINT "departments_blocks_media_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_media_card_locales" ADD CONSTRAINT "departments_blocks_media_card_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_media_card"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_department_grid" ADD CONSTRAINT "departments_blocks_department_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_department_grid_locales" ADD CONSTRAINT "departments_blocks_department_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_department_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_contact_box" ADD CONSTRAINT "departments_blocks_contact_box_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_contact_box_locales" ADD CONSTRAINT "departments_blocks_contact_box_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_contact_box"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_contact_form_details_items" ADD CONSTRAINT "departments_blocks_contact_form_details_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_contact_form_details"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_contact_form_details_items_locales" ADD CONSTRAINT "departments_blocks_contact_form_details_items_locales_par_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_contact_form_details_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_contact_form_details" ADD CONSTRAINT "departments_blocks_contact_form_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_contact_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_contact_form_details_locales" ADD CONSTRAINT "departments_blocks_contact_form_details_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_contact_form_details"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_contact_form" ADD CONSTRAINT "departments_blocks_contact_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_contact_form_locales" ADD CONSTRAINT "departments_blocks_contact_form_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_contact_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_process_steps_items" ADD CONSTRAINT "departments_blocks_process_steps_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_process_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_process_steps_items_locales" ADD CONSTRAINT "departments_blocks_process_steps_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_process_steps_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_process_steps" ADD CONSTRAINT "departments_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_process_steps_locales" ADD CONSTRAINT "departments_blocks_process_steps_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_process_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_figure" ADD CONSTRAINT "departments_blocks_figure_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "departments_blocks_figure" ADD CONSTRAINT "departments_blocks_figure_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_figure_locales" ADD CONSTRAINT "departments_blocks_figure_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_figure"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_region_map_regions" ADD CONSTRAINT "departments_blocks_region_map_regions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_region_map"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_region_map_regions_locales" ADD CONSTRAINT "departments_blocks_region_map_regions_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_region_map_regions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_region_map" ADD CONSTRAINT "departments_blocks_region_map_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_blocks_region_map_locales" ADD CONSTRAINT "departments_blocks_region_map_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments_blocks_region_map"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments" ADD CONSTRAINT "departments_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "departments_locales" ADD CONSTRAINT "departments_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_rels" ADD CONSTRAINT "departments_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_rels" ADD CONSTRAINT "departments_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_rels" ADD CONSTRAINT "departments_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_rels" ADD CONSTRAINT "departments_rels_departments_fk" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_rels" ADD CONSTRAINT "departments_rels_hubs_fk" FOREIGN KEY ("hubs_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_rels" ADD CONSTRAINT "departments_rels_membership_tiers_fk" FOREIGN KEY ("membership_tiers_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "departments_rels" ADD CONSTRAINT "departments_rels_board_members_fk" FOREIGN KEY ("board_members_id") REFERENCES "public"."board_members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_page_banner_links" ADD CONSTRAINT "_departments_v_blocks_page_banner_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_page_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_page_banner_links_locales" ADD CONSTRAINT "_departments_v_blocks_page_banner_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_page_banner_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_page_banner" ADD CONSTRAINT "_departments_v_blocks_page_banner_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_page_banner" ADD CONSTRAINT "_departments_v_blocks_page_banner_watermark_id_media_id_fk" FOREIGN KEY ("watermark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_page_banner" ADD CONSTRAINT "_departments_v_blocks_page_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_page_banner_locales" ADD CONSTRAINT "_departments_v_blocks_page_banner_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_page_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_section_tabs_items" ADD CONSTRAINT "_departments_v_blocks_section_tabs_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_section_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_section_tabs_items_locales" ADD CONSTRAINT "_departments_v_blocks_section_tabs_items_locales_parent_i_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_section_tabs_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_section_tabs" ADD CONSTRAINT "_departments_v_blocks_section_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_rich_text" ADD CONSTRAINT "_departments_v_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_rich_text_locales" ADD CONSTRAINT "_departments_v_blocks_rich_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_card_grid_items" ADD CONSTRAINT "_departments_v_blocks_card_grid_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_card_grid_items" ADD CONSTRAINT "_departments_v_blocks_card_grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_card_grid_items_locales" ADD CONSTRAINT "_departments_v_blocks_card_grid_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_card_grid_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_card_grid" ADD CONSTRAINT "_departments_v_blocks_card_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_card_grid_locales" ADD CONSTRAINT "_departments_v_blocks_card_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_quote_banner" ADD CONSTRAINT "_departments_v_blocks_quote_banner_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_quote_banner" ADD CONSTRAINT "_departments_v_blocks_quote_banner_watermark_id_media_id_fk" FOREIGN KEY ("watermark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_quote_banner" ADD CONSTRAINT "_departments_v_blocks_quote_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_quote_banner_locales" ADD CONSTRAINT "_departments_v_blocks_quote_banner_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_quote_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_accelerators_items" ADD CONSTRAINT "_departments_v_blocks_accelerators_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_accelerators_items" ADD CONSTRAINT "_departments_v_blocks_accelerators_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_accelerators"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_accelerators_items_locales" ADD CONSTRAINT "_departments_v_blocks_accelerators_items_locales_parent_i_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_accelerators_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_accelerators" ADD CONSTRAINT "_departments_v_blocks_accelerators_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_accelerators_locales" ADD CONSTRAINT "_departments_v_blocks_accelerators_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_accelerators"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_posts_feed_filter_items" ADD CONSTRAINT "_departments_v_blocks_posts_feed_filter_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_posts_feed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_posts_feed_filter_items_locales" ADD CONSTRAINT "_departments_v_blocks_posts_feed_filter_items_locales_par_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_posts_feed_filter_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_posts_feed" ADD CONSTRAINT "_departments_v_blocks_posts_feed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_posts_feed_locales" ADD CONSTRAINT "_departments_v_blocks_posts_feed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_posts_feed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_gallery_items" ADD CONSTRAINT "_departments_v_blocks_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_gallery_items" ADD CONSTRAINT "_departments_v_blocks_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_gallery_items_locales" ADD CONSTRAINT "_departments_v_blocks_gallery_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_gallery_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_gallery" ADD CONSTRAINT "_departments_v_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_values_list_items" ADD CONSTRAINT "_departments_v_blocks_values_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_values_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_values_list_items_locales" ADD CONSTRAINT "_departments_v_blocks_values_list_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_values_list_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_values_list" ADD CONSTRAINT "_departments_v_blocks_values_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_values_list_locales" ADD CONSTRAINT "_departments_v_blocks_values_list_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_values_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_history_grid_paragraphs" ADD CONSTRAINT "_departments_v_blocks_history_grid_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_history_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_history_grid_paragraphs_locales" ADD CONSTRAINT "_departments_v_blocks_history_grid_paragraphs_locales_par_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_history_grid_paragraphs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_history_grid" ADD CONSTRAINT "_departments_v_blocks_history_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_history_grid_locales" ADD CONSTRAINT "_departments_v_blocks_history_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_history_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_stats_row_items" ADD CONSTRAINT "_departments_v_blocks_stats_row_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_stats_row"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_stats_row_items_locales" ADD CONSTRAINT "_departments_v_blocks_stats_row_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_stats_row_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_stats_row" ADD CONSTRAINT "_departments_v_blocks_stats_row_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_highlighted_text" ADD CONSTRAINT "_departments_v_blocks_highlighted_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_highlighted_text_locales" ADD CONSTRAINT "_departments_v_blocks_highlighted_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_highlighted_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_timeline_items_lines" ADD CONSTRAINT "_departments_v_blocks_timeline_items_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_timeline_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_timeline_items_lines_locales" ADD CONSTRAINT "_departments_v_blocks_timeline_items_lines_locales_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_timeline_items_lines"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_timeline_items" ADD CONSTRAINT "_departments_v_blocks_timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_timeline" ADD CONSTRAINT "_departments_v_blocks_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_timeline_locales" ADD CONSTRAINT "_departments_v_blocks_timeline_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_carousel_slides" ADD CONSTRAINT "_departments_v_blocks_carousel_slides_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_carousel_slides" ADD CONSTRAINT "_departments_v_blocks_carousel_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_carousel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_carousel_slides_locales" ADD CONSTRAINT "_departments_v_blocks_carousel_slides_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_carousel_slides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_carousel" ADD CONSTRAINT "_departments_v_blocks_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_people_grid" ADD CONSTRAINT "_departments_v_blocks_people_grid_hub_id_hubs_id_fk" FOREIGN KEY ("hub_id") REFERENCES "public"."hubs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_people_grid" ADD CONSTRAINT "_departments_v_blocks_people_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_people_grid_locales" ADD CONSTRAINT "_departments_v_blocks_people_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_people_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_creed" ADD CONSTRAINT "_departments_v_blocks_creed_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_creed" ADD CONSTRAINT "_departments_v_blocks_creed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_creed_locales" ADD CONSTRAINT "_departments_v_blocks_creed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_creed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_section_intro" ADD CONSTRAINT "_departments_v_blocks_section_intro_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_section_intro_locales" ADD CONSTRAINT "_departments_v_blocks_section_intro_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_section_intro"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_data_table_filters" ADD CONSTRAINT "_departments_v_blocks_data_table_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_data_table_filters_locales" ADD CONSTRAINT "_departments_v_blocks_data_table_filters_locales_parent_i_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_data_table_filters"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_data_table_columns" ADD CONSTRAINT "_departments_v_blocks_data_table_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_data_table_columns_locales" ADD CONSTRAINT "_departments_v_blocks_data_table_columns_locales_parent_i_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_data_table_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_data_table_rows_cells" ADD CONSTRAINT "_departments_v_blocks_data_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_data_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_data_table_rows_cells_locales" ADD CONSTRAINT "_departments_v_blocks_data_table_rows_cells_locales_paren_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_data_table_rows_cells"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_data_table_rows" ADD CONSTRAINT "_departments_v_blocks_data_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_data_table" ADD CONSTRAINT "_departments_v_blocks_data_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_data_table_locales" ADD CONSTRAINT "_departments_v_blocks_data_table_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_media_card" ADD CONSTRAINT "_departments_v_blocks_media_card_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_media_card" ADD CONSTRAINT "_departments_v_blocks_media_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_media_card_locales" ADD CONSTRAINT "_departments_v_blocks_media_card_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_media_card"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_department_grid" ADD CONSTRAINT "_departments_v_blocks_department_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_department_grid_locales" ADD CONSTRAINT "_departments_v_blocks_department_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_department_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_contact_box" ADD CONSTRAINT "_departments_v_blocks_contact_box_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_contact_box_locales" ADD CONSTRAINT "_departments_v_blocks_contact_box_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_contact_box"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_contact_form_details_items" ADD CONSTRAINT "_departments_v_blocks_contact_form_details_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_contact_form_details"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_contact_form_details_items_locales" ADD CONSTRAINT "_departments_v_blocks_contact_form_details_items_locales__fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_contact_form_details_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_contact_form_details" ADD CONSTRAINT "_departments_v_blocks_contact_form_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_contact_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_contact_form_details_locales" ADD CONSTRAINT "_departments_v_blocks_contact_form_details_locales_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_contact_form_details"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_contact_form" ADD CONSTRAINT "_departments_v_blocks_contact_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_contact_form_locales" ADD CONSTRAINT "_departments_v_blocks_contact_form_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_contact_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_process_steps_items" ADD CONSTRAINT "_departments_v_blocks_process_steps_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_process_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_process_steps_items_locales" ADD CONSTRAINT "_departments_v_blocks_process_steps_items_locales_parent__fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_process_steps_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_process_steps" ADD CONSTRAINT "_departments_v_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_process_steps_locales" ADD CONSTRAINT "_departments_v_blocks_process_steps_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_process_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_figure" ADD CONSTRAINT "_departments_v_blocks_figure_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_figure" ADD CONSTRAINT "_departments_v_blocks_figure_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_figure_locales" ADD CONSTRAINT "_departments_v_blocks_figure_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_figure"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_region_map_regions" ADD CONSTRAINT "_departments_v_blocks_region_map_regions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_region_map"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_region_map_regions_locales" ADD CONSTRAINT "_departments_v_blocks_region_map_regions_locales_parent_i_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_region_map_regions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_region_map" ADD CONSTRAINT "_departments_v_blocks_region_map_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_blocks_region_map_locales" ADD CONSTRAINT "_departments_v_blocks_region_map_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v_blocks_region_map"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v" ADD CONSTRAINT "_departments_v_parent_id_departments_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_departments_v" ADD CONSTRAINT "_departments_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_departments_v_locales" ADD CONSTRAINT "_departments_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_departments_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_rels" ADD CONSTRAINT "_departments_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_departments_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_rels" ADD CONSTRAINT "_departments_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_rels" ADD CONSTRAINT "_departments_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_rels" ADD CONSTRAINT "_departments_v_rels_departments_fk" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_rels" ADD CONSTRAINT "_departments_v_rels_hubs_fk" FOREIGN KEY ("hubs_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_rels" ADD CONSTRAINT "_departments_v_rels_membership_tiers_fk" FOREIGN KEY ("membership_tiers_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_departments_v_rels" ADD CONSTRAINT "_departments_v_rels_board_members_fk" FOREIGN KEY ("board_members_id") REFERENCES "public"."board_members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_page_banner_links" ADD CONSTRAINT "hubs_blocks_page_banner_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_page_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_page_banner_links_locales" ADD CONSTRAINT "hubs_blocks_page_banner_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_page_banner_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_page_banner" ADD CONSTRAINT "hubs_blocks_page_banner_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "hubs_blocks_page_banner" ADD CONSTRAINT "hubs_blocks_page_banner_watermark_id_media_id_fk" FOREIGN KEY ("watermark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "hubs_blocks_page_banner" ADD CONSTRAINT "hubs_blocks_page_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_page_banner_locales" ADD CONSTRAINT "hubs_blocks_page_banner_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_page_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_section_tabs_items" ADD CONSTRAINT "hubs_blocks_section_tabs_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_section_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_section_tabs_items_locales" ADD CONSTRAINT "hubs_blocks_section_tabs_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_section_tabs_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_section_tabs" ADD CONSTRAINT "hubs_blocks_section_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_rich_text" ADD CONSTRAINT "hubs_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_rich_text_locales" ADD CONSTRAINT "hubs_blocks_rich_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_card_grid_items" ADD CONSTRAINT "hubs_blocks_card_grid_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "hubs_blocks_card_grid_items" ADD CONSTRAINT "hubs_blocks_card_grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_card_grid_items_locales" ADD CONSTRAINT "hubs_blocks_card_grid_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_card_grid_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_card_grid" ADD CONSTRAINT "hubs_blocks_card_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_card_grid_locales" ADD CONSTRAINT "hubs_blocks_card_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_quote_banner" ADD CONSTRAINT "hubs_blocks_quote_banner_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "hubs_blocks_quote_banner" ADD CONSTRAINT "hubs_blocks_quote_banner_watermark_id_media_id_fk" FOREIGN KEY ("watermark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "hubs_blocks_quote_banner" ADD CONSTRAINT "hubs_blocks_quote_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_quote_banner_locales" ADD CONSTRAINT "hubs_blocks_quote_banner_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_quote_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_accelerators_items" ADD CONSTRAINT "hubs_blocks_accelerators_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "hubs_blocks_accelerators_items" ADD CONSTRAINT "hubs_blocks_accelerators_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_accelerators"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_accelerators_items_locales" ADD CONSTRAINT "hubs_blocks_accelerators_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_accelerators_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_accelerators" ADD CONSTRAINT "hubs_blocks_accelerators_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_accelerators_locales" ADD CONSTRAINT "hubs_blocks_accelerators_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_accelerators"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_posts_feed_filter_items" ADD CONSTRAINT "hubs_blocks_posts_feed_filter_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_posts_feed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_posts_feed_filter_items_locales" ADD CONSTRAINT "hubs_blocks_posts_feed_filter_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_posts_feed_filter_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_posts_feed" ADD CONSTRAINT "hubs_blocks_posts_feed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_posts_feed_locales" ADD CONSTRAINT "hubs_blocks_posts_feed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_posts_feed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_gallery_items" ADD CONSTRAINT "hubs_blocks_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "hubs_blocks_gallery_items" ADD CONSTRAINT "hubs_blocks_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_gallery_items_locales" ADD CONSTRAINT "hubs_blocks_gallery_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_gallery_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_gallery" ADD CONSTRAINT "hubs_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_values_list_items" ADD CONSTRAINT "hubs_blocks_values_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_values_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_values_list_items_locales" ADD CONSTRAINT "hubs_blocks_values_list_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_values_list_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_values_list" ADD CONSTRAINT "hubs_blocks_values_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_values_list_locales" ADD CONSTRAINT "hubs_blocks_values_list_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_values_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_history_grid_paragraphs" ADD CONSTRAINT "hubs_blocks_history_grid_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_history_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_history_grid_paragraphs_locales" ADD CONSTRAINT "hubs_blocks_history_grid_paragraphs_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_history_grid_paragraphs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_history_grid" ADD CONSTRAINT "hubs_blocks_history_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_history_grid_locales" ADD CONSTRAINT "hubs_blocks_history_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_history_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_stats_row_items" ADD CONSTRAINT "hubs_blocks_stats_row_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_stats_row"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_stats_row_items_locales" ADD CONSTRAINT "hubs_blocks_stats_row_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_stats_row_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_stats_row" ADD CONSTRAINT "hubs_blocks_stats_row_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_highlighted_text" ADD CONSTRAINT "hubs_blocks_highlighted_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_highlighted_text_locales" ADD CONSTRAINT "hubs_blocks_highlighted_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_highlighted_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_timeline_items_lines" ADD CONSTRAINT "hubs_blocks_timeline_items_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_timeline_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_timeline_items_lines_locales" ADD CONSTRAINT "hubs_blocks_timeline_items_lines_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_timeline_items_lines"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_timeline_items" ADD CONSTRAINT "hubs_blocks_timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_timeline" ADD CONSTRAINT "hubs_blocks_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_timeline_locales" ADD CONSTRAINT "hubs_blocks_timeline_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_carousel_slides" ADD CONSTRAINT "hubs_blocks_carousel_slides_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "hubs_blocks_carousel_slides" ADD CONSTRAINT "hubs_blocks_carousel_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_carousel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_carousel_slides_locales" ADD CONSTRAINT "hubs_blocks_carousel_slides_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_carousel_slides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_carousel" ADD CONSTRAINT "hubs_blocks_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_people_grid" ADD CONSTRAINT "hubs_blocks_people_grid_hub_id_hubs_id_fk" FOREIGN KEY ("hub_id") REFERENCES "public"."hubs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "hubs_blocks_people_grid" ADD CONSTRAINT "hubs_blocks_people_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_people_grid_locales" ADD CONSTRAINT "hubs_blocks_people_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_people_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_creed" ADD CONSTRAINT "hubs_blocks_creed_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "hubs_blocks_creed" ADD CONSTRAINT "hubs_blocks_creed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_creed_locales" ADD CONSTRAINT "hubs_blocks_creed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_creed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_section_intro" ADD CONSTRAINT "hubs_blocks_section_intro_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_section_intro_locales" ADD CONSTRAINT "hubs_blocks_section_intro_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_section_intro"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_data_table_filters" ADD CONSTRAINT "hubs_blocks_data_table_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_data_table_filters_locales" ADD CONSTRAINT "hubs_blocks_data_table_filters_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_data_table_filters"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_data_table_columns" ADD CONSTRAINT "hubs_blocks_data_table_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_data_table_columns_locales" ADD CONSTRAINT "hubs_blocks_data_table_columns_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_data_table_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_data_table_rows_cells" ADD CONSTRAINT "hubs_blocks_data_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_data_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_data_table_rows_cells_locales" ADD CONSTRAINT "hubs_blocks_data_table_rows_cells_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_data_table_rows_cells"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_data_table_rows" ADD CONSTRAINT "hubs_blocks_data_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_data_table" ADD CONSTRAINT "hubs_blocks_data_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_data_table_locales" ADD CONSTRAINT "hubs_blocks_data_table_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_media_card" ADD CONSTRAINT "hubs_blocks_media_card_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "hubs_blocks_media_card" ADD CONSTRAINT "hubs_blocks_media_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_media_card_locales" ADD CONSTRAINT "hubs_blocks_media_card_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_media_card"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_department_grid" ADD CONSTRAINT "hubs_blocks_department_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_department_grid_locales" ADD CONSTRAINT "hubs_blocks_department_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_department_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_contact_box" ADD CONSTRAINT "hubs_blocks_contact_box_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_contact_box_locales" ADD CONSTRAINT "hubs_blocks_contact_box_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_contact_box"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_contact_form_details_items" ADD CONSTRAINT "hubs_blocks_contact_form_details_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_contact_form_details"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_contact_form_details_items_locales" ADD CONSTRAINT "hubs_blocks_contact_form_details_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_contact_form_details_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_contact_form_details" ADD CONSTRAINT "hubs_blocks_contact_form_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_contact_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_contact_form_details_locales" ADD CONSTRAINT "hubs_blocks_contact_form_details_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_contact_form_details"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_contact_form" ADD CONSTRAINT "hubs_blocks_contact_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_contact_form_locales" ADD CONSTRAINT "hubs_blocks_contact_form_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_contact_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_process_steps_items" ADD CONSTRAINT "hubs_blocks_process_steps_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_process_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_process_steps_items_locales" ADD CONSTRAINT "hubs_blocks_process_steps_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_process_steps_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_process_steps" ADD CONSTRAINT "hubs_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_process_steps_locales" ADD CONSTRAINT "hubs_blocks_process_steps_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_process_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_figure" ADD CONSTRAINT "hubs_blocks_figure_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "hubs_blocks_figure" ADD CONSTRAINT "hubs_blocks_figure_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_figure_locales" ADD CONSTRAINT "hubs_blocks_figure_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_figure"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_region_map_regions" ADD CONSTRAINT "hubs_blocks_region_map_regions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_region_map"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_region_map_regions_locales" ADD CONSTRAINT "hubs_blocks_region_map_regions_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_region_map_regions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_region_map" ADD CONSTRAINT "hubs_blocks_region_map_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_blocks_region_map_locales" ADD CONSTRAINT "hubs_blocks_region_map_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs_blocks_region_map"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_locales" ADD CONSTRAINT "hubs_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_rels" ADD CONSTRAINT "hubs_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_rels" ADD CONSTRAINT "hubs_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_rels" ADD CONSTRAINT "hubs_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_rels" ADD CONSTRAINT "hubs_rels_departments_fk" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_rels" ADD CONSTRAINT "hubs_rels_hubs_fk" FOREIGN KEY ("hubs_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_rels" ADD CONSTRAINT "hubs_rels_membership_tiers_fk" FOREIGN KEY ("membership_tiers_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hubs_rels" ADD CONSTRAINT "hubs_rels_board_members_fk" FOREIGN KEY ("board_members_id") REFERENCES "public"."board_members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_page_banner_links" ADD CONSTRAINT "_hubs_v_blocks_page_banner_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_page_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_page_banner_links_locales" ADD CONSTRAINT "_hubs_v_blocks_page_banner_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_page_banner_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_page_banner" ADD CONSTRAINT "_hubs_v_blocks_page_banner_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_page_banner" ADD CONSTRAINT "_hubs_v_blocks_page_banner_watermark_id_media_id_fk" FOREIGN KEY ("watermark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_page_banner" ADD CONSTRAINT "_hubs_v_blocks_page_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_page_banner_locales" ADD CONSTRAINT "_hubs_v_blocks_page_banner_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_page_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_section_tabs_items" ADD CONSTRAINT "_hubs_v_blocks_section_tabs_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_section_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_section_tabs_items_locales" ADD CONSTRAINT "_hubs_v_blocks_section_tabs_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_section_tabs_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_section_tabs" ADD CONSTRAINT "_hubs_v_blocks_section_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_rich_text" ADD CONSTRAINT "_hubs_v_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_rich_text_locales" ADD CONSTRAINT "_hubs_v_blocks_rich_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_card_grid_items" ADD CONSTRAINT "_hubs_v_blocks_card_grid_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_card_grid_items" ADD CONSTRAINT "_hubs_v_blocks_card_grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_card_grid_items_locales" ADD CONSTRAINT "_hubs_v_blocks_card_grid_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_card_grid_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_card_grid" ADD CONSTRAINT "_hubs_v_blocks_card_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_card_grid_locales" ADD CONSTRAINT "_hubs_v_blocks_card_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_quote_banner" ADD CONSTRAINT "_hubs_v_blocks_quote_banner_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_quote_banner" ADD CONSTRAINT "_hubs_v_blocks_quote_banner_watermark_id_media_id_fk" FOREIGN KEY ("watermark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_quote_banner" ADD CONSTRAINT "_hubs_v_blocks_quote_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_quote_banner_locales" ADD CONSTRAINT "_hubs_v_blocks_quote_banner_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_quote_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_accelerators_items" ADD CONSTRAINT "_hubs_v_blocks_accelerators_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_accelerators_items" ADD CONSTRAINT "_hubs_v_blocks_accelerators_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_accelerators"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_accelerators_items_locales" ADD CONSTRAINT "_hubs_v_blocks_accelerators_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_accelerators_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_accelerators" ADD CONSTRAINT "_hubs_v_blocks_accelerators_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_accelerators_locales" ADD CONSTRAINT "_hubs_v_blocks_accelerators_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_accelerators"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_posts_feed_filter_items" ADD CONSTRAINT "_hubs_v_blocks_posts_feed_filter_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_posts_feed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_posts_feed_filter_items_locales" ADD CONSTRAINT "_hubs_v_blocks_posts_feed_filter_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_posts_feed_filter_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_posts_feed" ADD CONSTRAINT "_hubs_v_blocks_posts_feed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_posts_feed_locales" ADD CONSTRAINT "_hubs_v_blocks_posts_feed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_posts_feed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_gallery_items" ADD CONSTRAINT "_hubs_v_blocks_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_gallery_items" ADD CONSTRAINT "_hubs_v_blocks_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_gallery_items_locales" ADD CONSTRAINT "_hubs_v_blocks_gallery_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_gallery_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_gallery" ADD CONSTRAINT "_hubs_v_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_values_list_items" ADD CONSTRAINT "_hubs_v_blocks_values_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_values_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_values_list_items_locales" ADD CONSTRAINT "_hubs_v_blocks_values_list_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_values_list_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_values_list" ADD CONSTRAINT "_hubs_v_blocks_values_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_values_list_locales" ADD CONSTRAINT "_hubs_v_blocks_values_list_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_values_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_history_grid_paragraphs" ADD CONSTRAINT "_hubs_v_blocks_history_grid_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_history_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_history_grid_paragraphs_locales" ADD CONSTRAINT "_hubs_v_blocks_history_grid_paragraphs_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_history_grid_paragraphs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_history_grid" ADD CONSTRAINT "_hubs_v_blocks_history_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_history_grid_locales" ADD CONSTRAINT "_hubs_v_blocks_history_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_history_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_stats_row_items" ADD CONSTRAINT "_hubs_v_blocks_stats_row_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_stats_row"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_stats_row_items_locales" ADD CONSTRAINT "_hubs_v_blocks_stats_row_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_stats_row_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_stats_row" ADD CONSTRAINT "_hubs_v_blocks_stats_row_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_highlighted_text" ADD CONSTRAINT "_hubs_v_blocks_highlighted_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_highlighted_text_locales" ADD CONSTRAINT "_hubs_v_blocks_highlighted_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_highlighted_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_timeline_items_lines" ADD CONSTRAINT "_hubs_v_blocks_timeline_items_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_timeline_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_timeline_items_lines_locales" ADD CONSTRAINT "_hubs_v_blocks_timeline_items_lines_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_timeline_items_lines"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_timeline_items" ADD CONSTRAINT "_hubs_v_blocks_timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_timeline" ADD CONSTRAINT "_hubs_v_blocks_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_timeline_locales" ADD CONSTRAINT "_hubs_v_blocks_timeline_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_carousel_slides" ADD CONSTRAINT "_hubs_v_blocks_carousel_slides_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_carousel_slides" ADD CONSTRAINT "_hubs_v_blocks_carousel_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_carousel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_carousel_slides_locales" ADD CONSTRAINT "_hubs_v_blocks_carousel_slides_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_carousel_slides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_carousel" ADD CONSTRAINT "_hubs_v_blocks_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_people_grid" ADD CONSTRAINT "_hubs_v_blocks_people_grid_hub_id_hubs_id_fk" FOREIGN KEY ("hub_id") REFERENCES "public"."hubs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_people_grid" ADD CONSTRAINT "_hubs_v_blocks_people_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_people_grid_locales" ADD CONSTRAINT "_hubs_v_blocks_people_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_people_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_creed" ADD CONSTRAINT "_hubs_v_blocks_creed_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_creed" ADD CONSTRAINT "_hubs_v_blocks_creed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_creed_locales" ADD CONSTRAINT "_hubs_v_blocks_creed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_creed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_section_intro" ADD CONSTRAINT "_hubs_v_blocks_section_intro_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_section_intro_locales" ADD CONSTRAINT "_hubs_v_blocks_section_intro_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_section_intro"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_data_table_filters" ADD CONSTRAINT "_hubs_v_blocks_data_table_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_data_table_filters_locales" ADD CONSTRAINT "_hubs_v_blocks_data_table_filters_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_data_table_filters"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_data_table_columns" ADD CONSTRAINT "_hubs_v_blocks_data_table_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_data_table_columns_locales" ADD CONSTRAINT "_hubs_v_blocks_data_table_columns_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_data_table_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_data_table_rows_cells" ADD CONSTRAINT "_hubs_v_blocks_data_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_data_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_data_table_rows_cells_locales" ADD CONSTRAINT "_hubs_v_blocks_data_table_rows_cells_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_data_table_rows_cells"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_data_table_rows" ADD CONSTRAINT "_hubs_v_blocks_data_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_data_table" ADD CONSTRAINT "_hubs_v_blocks_data_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_data_table_locales" ADD CONSTRAINT "_hubs_v_blocks_data_table_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_media_card" ADD CONSTRAINT "_hubs_v_blocks_media_card_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_media_card" ADD CONSTRAINT "_hubs_v_blocks_media_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_media_card_locales" ADD CONSTRAINT "_hubs_v_blocks_media_card_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_media_card"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_department_grid" ADD CONSTRAINT "_hubs_v_blocks_department_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_department_grid_locales" ADD CONSTRAINT "_hubs_v_blocks_department_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_department_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_contact_box" ADD CONSTRAINT "_hubs_v_blocks_contact_box_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_contact_box_locales" ADD CONSTRAINT "_hubs_v_blocks_contact_box_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_contact_box"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_contact_form_details_items" ADD CONSTRAINT "_hubs_v_blocks_contact_form_details_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_contact_form_details"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_contact_form_details_items_locales" ADD CONSTRAINT "_hubs_v_blocks_contact_form_details_items_locales_parent__fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_contact_form_details_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_contact_form_details" ADD CONSTRAINT "_hubs_v_blocks_contact_form_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_contact_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_contact_form_details_locales" ADD CONSTRAINT "_hubs_v_blocks_contact_form_details_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_contact_form_details"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_contact_form" ADD CONSTRAINT "_hubs_v_blocks_contact_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_contact_form_locales" ADD CONSTRAINT "_hubs_v_blocks_contact_form_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_contact_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_process_steps_items" ADD CONSTRAINT "_hubs_v_blocks_process_steps_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_process_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_process_steps_items_locales" ADD CONSTRAINT "_hubs_v_blocks_process_steps_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_process_steps_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_process_steps" ADD CONSTRAINT "_hubs_v_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_process_steps_locales" ADD CONSTRAINT "_hubs_v_blocks_process_steps_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_process_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_figure" ADD CONSTRAINT "_hubs_v_blocks_figure_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_figure" ADD CONSTRAINT "_hubs_v_blocks_figure_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_figure_locales" ADD CONSTRAINT "_hubs_v_blocks_figure_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_figure"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_region_map_regions" ADD CONSTRAINT "_hubs_v_blocks_region_map_regions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_region_map"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_region_map_regions_locales" ADD CONSTRAINT "_hubs_v_blocks_region_map_regions_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_region_map_regions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_region_map" ADD CONSTRAINT "_hubs_v_blocks_region_map_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_blocks_region_map_locales" ADD CONSTRAINT "_hubs_v_blocks_region_map_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v_blocks_region_map"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v" ADD CONSTRAINT "_hubs_v_parent_id_hubs_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."hubs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_hubs_v_locales" ADD CONSTRAINT "_hubs_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hubs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_rels" ADD CONSTRAINT "_hubs_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_hubs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_rels" ADD CONSTRAINT "_hubs_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_rels" ADD CONSTRAINT "_hubs_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_rels" ADD CONSTRAINT "_hubs_v_rels_departments_fk" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_rels" ADD CONSTRAINT "_hubs_v_rels_hubs_fk" FOREIGN KEY ("hubs_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_rels" ADD CONSTRAINT "_hubs_v_rels_membership_tiers_fk" FOREIGN KEY ("membership_tiers_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hubs_v_rels" ADD CONSTRAINT "_hubs_v_rels_board_members_fk" FOREIGN KEY ("board_members_id") REFERENCES "public"."board_members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "board_members" ADD CONSTRAINT "board_members_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "board_members" ADD CONSTRAINT "board_members_department_id_departments_id_fk" FOREIGN KEY ("department_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "board_members" ADD CONSTRAINT "board_members_hub_id_hubs_id_fk" FOREIGN KEY ("hub_id") REFERENCES "public"."hubs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "board_members_locales" ADD CONSTRAINT "board_members_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."board_members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_benefits" ADD CONSTRAINT "membership_tiers_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_benefits_locales" ADD CONSTRAINT "membership_tiers_benefits_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_benefits"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_requirements" ADD CONSTRAINT "membership_tiers_requirements_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_requirements_locales" ADD CONSTRAINT "membership_tiers_requirements_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_requirements"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_page_banner_links" ADD CONSTRAINT "membership_tiers_blocks_page_banner_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_page_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_page_banner_links_locales" ADD CONSTRAINT "membership_tiers_blocks_page_banner_links_locales_parent__fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_page_banner_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_page_banner" ADD CONSTRAINT "membership_tiers_blocks_page_banner_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_page_banner" ADD CONSTRAINT "membership_tiers_blocks_page_banner_watermark_id_media_id_fk" FOREIGN KEY ("watermark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_page_banner" ADD CONSTRAINT "membership_tiers_blocks_page_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_page_banner_locales" ADD CONSTRAINT "membership_tiers_blocks_page_banner_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_page_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_section_tabs_items" ADD CONSTRAINT "membership_tiers_blocks_section_tabs_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_section_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_section_tabs_items_locales" ADD CONSTRAINT "membership_tiers_blocks_section_tabs_items_locales_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_section_tabs_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_section_tabs" ADD CONSTRAINT "membership_tiers_blocks_section_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_rich_text" ADD CONSTRAINT "membership_tiers_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_rich_text_locales" ADD CONSTRAINT "membership_tiers_blocks_rich_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_rich_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_card_grid_items" ADD CONSTRAINT "membership_tiers_blocks_card_grid_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_card_grid_items" ADD CONSTRAINT "membership_tiers_blocks_card_grid_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_card_grid_items_locales" ADD CONSTRAINT "membership_tiers_blocks_card_grid_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_card_grid_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_card_grid" ADD CONSTRAINT "membership_tiers_blocks_card_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_card_grid_locales" ADD CONSTRAINT "membership_tiers_blocks_card_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_quote_banner" ADD CONSTRAINT "membership_tiers_blocks_quote_banner_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_quote_banner" ADD CONSTRAINT "membership_tiers_blocks_quote_banner_watermark_id_media_id_fk" FOREIGN KEY ("watermark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_quote_banner" ADD CONSTRAINT "membership_tiers_blocks_quote_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_quote_banner_locales" ADD CONSTRAINT "membership_tiers_blocks_quote_banner_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_quote_banner"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_accelerators_items" ADD CONSTRAINT "membership_tiers_blocks_accelerators_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_accelerators_items" ADD CONSTRAINT "membership_tiers_blocks_accelerators_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_accelerators"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_accelerators_items_locales" ADD CONSTRAINT "membership_tiers_blocks_accelerators_items_locales_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_accelerators_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_accelerators" ADD CONSTRAINT "membership_tiers_blocks_accelerators_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_accelerators_locales" ADD CONSTRAINT "membership_tiers_blocks_accelerators_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_accelerators"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_posts_feed_filter_items" ADD CONSTRAINT "membership_tiers_blocks_posts_feed_filter_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_posts_feed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_posts_feed_filter_items_locales" ADD CONSTRAINT "membership_tiers_blocks_posts_feed_filter_items_locales_p_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_posts_feed_filter_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_posts_feed" ADD CONSTRAINT "membership_tiers_blocks_posts_feed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_posts_feed_locales" ADD CONSTRAINT "membership_tiers_blocks_posts_feed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_posts_feed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_gallery_items" ADD CONSTRAINT "membership_tiers_blocks_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_gallery_items" ADD CONSTRAINT "membership_tiers_blocks_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_gallery_items_locales" ADD CONSTRAINT "membership_tiers_blocks_gallery_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_gallery_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_gallery" ADD CONSTRAINT "membership_tiers_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_values_list_items" ADD CONSTRAINT "membership_tiers_blocks_values_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_values_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_values_list_items_locales" ADD CONSTRAINT "membership_tiers_blocks_values_list_items_locales_parent__fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_values_list_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_values_list" ADD CONSTRAINT "membership_tiers_blocks_values_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_values_list_locales" ADD CONSTRAINT "membership_tiers_blocks_values_list_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_values_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_history_grid_paragraphs" ADD CONSTRAINT "membership_tiers_blocks_history_grid_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_history_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_history_grid_paragraphs_locales" ADD CONSTRAINT "membership_tiers_blocks_history_grid_paragraphs_locales_p_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_history_grid_paragraphs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_history_grid" ADD CONSTRAINT "membership_tiers_blocks_history_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_history_grid_locales" ADD CONSTRAINT "membership_tiers_blocks_history_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_history_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_stats_row_items" ADD CONSTRAINT "membership_tiers_blocks_stats_row_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_stats_row"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_stats_row_items_locales" ADD CONSTRAINT "membership_tiers_blocks_stats_row_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_stats_row_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_stats_row" ADD CONSTRAINT "membership_tiers_blocks_stats_row_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_highlighted_text" ADD CONSTRAINT "membership_tiers_blocks_highlighted_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_highlighted_text_locales" ADD CONSTRAINT "membership_tiers_blocks_highlighted_text_locales_parent_i_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_highlighted_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_timeline_items_lines" ADD CONSTRAINT "membership_tiers_blocks_timeline_items_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_timeline_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_timeline_items_lines_locales" ADD CONSTRAINT "membership_tiers_blocks_timeline_items_lines_locales_pare_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_timeline_items_lines"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_timeline_items" ADD CONSTRAINT "membership_tiers_blocks_timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_timeline" ADD CONSTRAINT "membership_tiers_blocks_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_timeline_locales" ADD CONSTRAINT "membership_tiers_blocks_timeline_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_carousel_slides" ADD CONSTRAINT "membership_tiers_blocks_carousel_slides_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_carousel_slides" ADD CONSTRAINT "membership_tiers_blocks_carousel_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_carousel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_carousel_slides_locales" ADD CONSTRAINT "membership_tiers_blocks_carousel_slides_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_carousel_slides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_carousel" ADD CONSTRAINT "membership_tiers_blocks_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_people_grid" ADD CONSTRAINT "membership_tiers_blocks_people_grid_hub_id_hubs_id_fk" FOREIGN KEY ("hub_id") REFERENCES "public"."hubs"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_people_grid" ADD CONSTRAINT "membership_tiers_blocks_people_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_people_grid_locales" ADD CONSTRAINT "membership_tiers_blocks_people_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_people_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_creed" ADD CONSTRAINT "membership_tiers_blocks_creed_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_creed" ADD CONSTRAINT "membership_tiers_blocks_creed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_creed_locales" ADD CONSTRAINT "membership_tiers_blocks_creed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_creed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_section_intro" ADD CONSTRAINT "membership_tiers_blocks_section_intro_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_section_intro_locales" ADD CONSTRAINT "membership_tiers_blocks_section_intro_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_section_intro"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_data_table_filters" ADD CONSTRAINT "membership_tiers_blocks_data_table_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_data_table_filters_locales" ADD CONSTRAINT "membership_tiers_blocks_data_table_filters_locales_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_data_table_filters"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_data_table_columns" ADD CONSTRAINT "membership_tiers_blocks_data_table_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_data_table_columns_locales" ADD CONSTRAINT "membership_tiers_blocks_data_table_columns_locales_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_data_table_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_data_table_rows_cells" ADD CONSTRAINT "membership_tiers_blocks_data_table_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_data_table_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_data_table_rows_cells_locales" ADD CONSTRAINT "membership_tiers_blocks_data_table_rows_cells_locales_par_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_data_table_rows_cells"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_data_table_rows" ADD CONSTRAINT "membership_tiers_blocks_data_table_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_data_table" ADD CONSTRAINT "membership_tiers_blocks_data_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_data_table_locales" ADD CONSTRAINT "membership_tiers_blocks_data_table_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_data_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_media_card" ADD CONSTRAINT "membership_tiers_blocks_media_card_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_media_card" ADD CONSTRAINT "membership_tiers_blocks_media_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_media_card_locales" ADD CONSTRAINT "membership_tiers_blocks_media_card_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_media_card"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_department_grid" ADD CONSTRAINT "membership_tiers_blocks_department_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_department_grid_locales" ADD CONSTRAINT "membership_tiers_blocks_department_grid_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_department_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_contact_box" ADD CONSTRAINT "membership_tiers_blocks_contact_box_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_contact_box_locales" ADD CONSTRAINT "membership_tiers_blocks_contact_box_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_contact_box"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_contact_form_details_items" ADD CONSTRAINT "membership_tiers_blocks_contact_form_details_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_contact_form_details"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_contact_form_details_items_locales" ADD CONSTRAINT "membership_tiers_blocks_contact_form_details_items_locale_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_contact_form_details_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_contact_form_details" ADD CONSTRAINT "membership_tiers_blocks_contact_form_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_contact_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_contact_form_details_locales" ADD CONSTRAINT "membership_tiers_blocks_contact_form_details_locales_pare_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_contact_form_details"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_contact_form" ADD CONSTRAINT "membership_tiers_blocks_contact_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_contact_form_locales" ADD CONSTRAINT "membership_tiers_blocks_contact_form_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_contact_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_process_steps_items" ADD CONSTRAINT "membership_tiers_blocks_process_steps_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_process_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_process_steps_items_locales" ADD CONSTRAINT "membership_tiers_blocks_process_steps_items_locales_paren_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_process_steps_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_process_steps" ADD CONSTRAINT "membership_tiers_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_process_steps_locales" ADD CONSTRAINT "membership_tiers_blocks_process_steps_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_process_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_figure" ADD CONSTRAINT "membership_tiers_blocks_figure_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_figure" ADD CONSTRAINT "membership_tiers_blocks_figure_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_figure_locales" ADD CONSTRAINT "membership_tiers_blocks_figure_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_figure"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_region_map_regions" ADD CONSTRAINT "membership_tiers_blocks_region_map_regions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_region_map"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_region_map_regions_locales" ADD CONSTRAINT "membership_tiers_blocks_region_map_regions_locales_parent_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_region_map_regions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_region_map" ADD CONSTRAINT "membership_tiers_blocks_region_map_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_blocks_region_map_locales" ADD CONSTRAINT "membership_tiers_blocks_region_map_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers_blocks_region_map"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_locales" ADD CONSTRAINT "membership_tiers_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_rels" ADD CONSTRAINT "membership_tiers_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_rels" ADD CONSTRAINT "membership_tiers_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_rels" ADD CONSTRAINT "membership_tiers_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_rels" ADD CONSTRAINT "membership_tiers_rels_departments_fk" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_rels" ADD CONSTRAINT "membership_tiers_rels_hubs_fk" FOREIGN KEY ("hubs_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_rels" ADD CONSTRAINT "membership_tiers_rels_membership_tiers_fk" FOREIGN KEY ("membership_tiers_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "membership_tiers_rels" ADD CONSTRAINT "membership_tiers_rels_board_members_fk" FOREIGN KEY ("board_members_id") REFERENCES "public"."board_members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "media_locales" ADD CONSTRAINT "media_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "members_sessions" ADD CONSTRAINT "members_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "members" ADD CONSTRAINT "members_tier_id_membership_tiers_id_fk" FOREIGN KEY ("tier_id") REFERENCES "public"."membership_tiers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_departments_fk" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_hubs_fk" FOREIGN KEY ("hubs_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_board_members_fk" FOREIGN KEY ("board_members_id") REFERENCES "public"."board_members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_membership_tiers_fk" FOREIGN KEY ("membership_tiers_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_members_fk" FOREIGN KEY ("members_id") REFERENCES "public"."members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_feedback_fk" FOREIGN KEY ("feedback_id") REFERENCES "public"."feedback"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_members_fk" FOREIGN KEY ("members_id") REFERENCES "public"."members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_announcement_links" ADD CONSTRAINT "site_settings_announcement_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_announcement_links_locales" ADD CONSTRAINT "site_settings_announcement_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings_announcement_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_header_nav" ADD CONSTRAINT "site_settings_header_nav_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_header_nav_locales" ADD CONSTRAINT "site_settings_header_nav_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings_header_nav"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_footer_top_links" ADD CONSTRAINT "site_settings_footer_top_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_footer_top_links_locales" ADD CONSTRAINT "site_settings_footer_top_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings_footer_top_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_footer_contact_items" ADD CONSTRAINT "site_settings_footer_contact_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_footer_contact_items_locales" ADD CONSTRAINT "site_settings_footer_contact_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings_footer_contact_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_footer_nav_groups_links" ADD CONSTRAINT "site_settings_footer_nav_groups_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings_footer_nav_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_footer_nav_groups_links_locales" ADD CONSTRAINT "site_settings_footer_nav_groups_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings_footer_nav_groups_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_footer_nav_groups" ADD CONSTRAINT "site_settings_footer_nav_groups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_footer_nav_groups_locales" ADD CONSTRAINT "site_settings_footer_nav_groups_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings_footer_nav_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_footer_social_links" ADD CONSTRAINT "site_settings_footer_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_footer_legal_links" ADD CONSTRAINT "site_settings_footer_legal_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_footer_legal_links_locales" ADD CONSTRAINT "site_settings_footer_legal_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings_footer_legal_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_header_logo_id_media_id_fk" FOREIGN KEY ("header_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_footer_logo_id_media_id_fk" FOREIGN KEY ("footer_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings_locales" ADD CONSTRAINT "site_settings_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_rels" ADD CONSTRAINT "site_settings_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_rels" ADD CONSTRAINT "site_settings_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_rels" ADD CONSTRAINT "site_settings_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_rels" ADD CONSTRAINT "site_settings_rels_departments_fk" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_rels" ADD CONSTRAINT "site_settings_rels_hubs_fk" FOREIGN KEY ("hubs_id") REFERENCES "public"."hubs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_rels" ADD CONSTRAINT "site_settings_rels_membership_tiers_fk" FOREIGN KEY ("membership_tiers_id") REFERENCES "public"."membership_tiers"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_page_banner_links_order_idx" ON "pages_blocks_page_banner_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_page_banner_links_parent_id_idx" ON "pages_blocks_page_banner_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_page_banner_links_locales_locale_parent_id_uniq" ON "pages_blocks_page_banner_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_page_banner_order_idx" ON "pages_blocks_page_banner" USING btree ("_order");
  CREATE INDEX "pages_blocks_page_banner_parent_id_idx" ON "pages_blocks_page_banner" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_page_banner_path_idx" ON "pages_blocks_page_banner" USING btree ("_path");
  CREATE INDEX "pages_blocks_page_banner_background_idx" ON "pages_blocks_page_banner" USING btree ("background_id");
  CREATE INDEX "pages_blocks_page_banner_watermark_idx" ON "pages_blocks_page_banner" USING btree ("watermark_id");
  CREATE UNIQUE INDEX "pages_blocks_page_banner_locales_locale_parent_id_unique" ON "pages_blocks_page_banner_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_section_tabs_items_order_idx" ON "pages_blocks_section_tabs_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_section_tabs_items_parent_id_idx" ON "pages_blocks_section_tabs_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_section_tabs_items_locales_locale_parent_id_uni" ON "pages_blocks_section_tabs_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_section_tabs_order_idx" ON "pages_blocks_section_tabs" USING btree ("_order");
  CREATE INDEX "pages_blocks_section_tabs_parent_id_idx" ON "pages_blocks_section_tabs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_section_tabs_path_idx" ON "pages_blocks_section_tabs" USING btree ("_path");
  CREATE INDEX "pages_blocks_rich_text_order_idx" ON "pages_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "pages_blocks_rich_text_parent_id_idx" ON "pages_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_rich_text_path_idx" ON "pages_blocks_rich_text" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_rich_text_locales_locale_parent_id_unique" ON "pages_blocks_rich_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_card_grid_items_order_idx" ON "pages_blocks_card_grid_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_card_grid_items_parent_id_idx" ON "pages_blocks_card_grid_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_card_grid_items_icon_idx" ON "pages_blocks_card_grid_items" USING btree ("icon_id");
  CREATE UNIQUE INDEX "pages_blocks_card_grid_items_locales_locale_parent_id_unique" ON "pages_blocks_card_grid_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_card_grid_order_idx" ON "pages_blocks_card_grid" USING btree ("_order");
  CREATE INDEX "pages_blocks_card_grid_parent_id_idx" ON "pages_blocks_card_grid" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_card_grid_path_idx" ON "pages_blocks_card_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_card_grid_locales_locale_parent_id_unique" ON "pages_blocks_card_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_quote_banner_order_idx" ON "pages_blocks_quote_banner" USING btree ("_order");
  CREATE INDEX "pages_blocks_quote_banner_parent_id_idx" ON "pages_blocks_quote_banner" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_quote_banner_path_idx" ON "pages_blocks_quote_banner" USING btree ("_path");
  CREATE INDEX "pages_blocks_quote_banner_background_idx" ON "pages_blocks_quote_banner" USING btree ("background_id");
  CREATE INDEX "pages_blocks_quote_banner_watermark_idx" ON "pages_blocks_quote_banner" USING btree ("watermark_id");
  CREATE UNIQUE INDEX "pages_blocks_quote_banner_locales_locale_parent_id_unique" ON "pages_blocks_quote_banner_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_accelerators_items_order_idx" ON "pages_blocks_accelerators_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_accelerators_items_parent_id_idx" ON "pages_blocks_accelerators_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_accelerators_items_image_idx" ON "pages_blocks_accelerators_items" USING btree ("image_id");
  CREATE UNIQUE INDEX "pages_blocks_accelerators_items_locales_locale_parent_id_uni" ON "pages_blocks_accelerators_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_accelerators_order_idx" ON "pages_blocks_accelerators" USING btree ("_order");
  CREATE INDEX "pages_blocks_accelerators_parent_id_idx" ON "pages_blocks_accelerators" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_accelerators_path_idx" ON "pages_blocks_accelerators" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_accelerators_locales_locale_parent_id_unique" ON "pages_blocks_accelerators_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_posts_feed_filter_items_order_idx" ON "pages_blocks_posts_feed_filter_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_posts_feed_filter_items_parent_id_idx" ON "pages_blocks_posts_feed_filter_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_posts_feed_filter_items_locales_locale_parent_i" ON "pages_blocks_posts_feed_filter_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_posts_feed_order_idx" ON "pages_blocks_posts_feed" USING btree ("_order");
  CREATE INDEX "pages_blocks_posts_feed_parent_id_idx" ON "pages_blocks_posts_feed" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_posts_feed_path_idx" ON "pages_blocks_posts_feed" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_posts_feed_locales_locale_parent_id_unique" ON "pages_blocks_posts_feed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_gallery_items_order_idx" ON "pages_blocks_gallery_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_gallery_items_parent_id_idx" ON "pages_blocks_gallery_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gallery_items_image_idx" ON "pages_blocks_gallery_items" USING btree ("image_id");
  CREATE UNIQUE INDEX "pages_blocks_gallery_items_locales_locale_parent_id_unique" ON "pages_blocks_gallery_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_gallery_order_idx" ON "pages_blocks_gallery" USING btree ("_order");
  CREATE INDEX "pages_blocks_gallery_parent_id_idx" ON "pages_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gallery_path_idx" ON "pages_blocks_gallery" USING btree ("_path");
  CREATE INDEX "pages_blocks_values_list_items_order_idx" ON "pages_blocks_values_list_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_values_list_items_parent_id_idx" ON "pages_blocks_values_list_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_values_list_items_locales_locale_parent_id_uniq" ON "pages_blocks_values_list_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_values_list_order_idx" ON "pages_blocks_values_list" USING btree ("_order");
  CREATE INDEX "pages_blocks_values_list_parent_id_idx" ON "pages_blocks_values_list" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_values_list_path_idx" ON "pages_blocks_values_list" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_values_list_locales_locale_parent_id_unique" ON "pages_blocks_values_list_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_history_grid_paragraphs_order_idx" ON "pages_blocks_history_grid_paragraphs" USING btree ("_order");
  CREATE INDEX "pages_blocks_history_grid_paragraphs_parent_id_idx" ON "pages_blocks_history_grid_paragraphs" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_history_grid_paragraphs_locales_locale_parent_i" ON "pages_blocks_history_grid_paragraphs_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_history_grid_order_idx" ON "pages_blocks_history_grid" USING btree ("_order");
  CREATE INDEX "pages_blocks_history_grid_parent_id_idx" ON "pages_blocks_history_grid" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_history_grid_path_idx" ON "pages_blocks_history_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_history_grid_locales_locale_parent_id_unique" ON "pages_blocks_history_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_stats_row_items_order_idx" ON "pages_blocks_stats_row_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_stats_row_items_parent_id_idx" ON "pages_blocks_stats_row_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_stats_row_items_locales_locale_parent_id_unique" ON "pages_blocks_stats_row_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_stats_row_order_idx" ON "pages_blocks_stats_row" USING btree ("_order");
  CREATE INDEX "pages_blocks_stats_row_parent_id_idx" ON "pages_blocks_stats_row" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_stats_row_path_idx" ON "pages_blocks_stats_row" USING btree ("_path");
  CREATE INDEX "pages_blocks_highlighted_text_order_idx" ON "pages_blocks_highlighted_text" USING btree ("_order");
  CREATE INDEX "pages_blocks_highlighted_text_parent_id_idx" ON "pages_blocks_highlighted_text" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_highlighted_text_path_idx" ON "pages_blocks_highlighted_text" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_highlighted_text_locales_locale_parent_id_uniqu" ON "pages_blocks_highlighted_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_timeline_items_lines_order_idx" ON "pages_blocks_timeline_items_lines" USING btree ("_order");
  CREATE INDEX "pages_blocks_timeline_items_lines_parent_id_idx" ON "pages_blocks_timeline_items_lines" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_timeline_items_lines_locales_locale_parent_id_u" ON "pages_blocks_timeline_items_lines_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_timeline_items_order_idx" ON "pages_blocks_timeline_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_timeline_items_parent_id_idx" ON "pages_blocks_timeline_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_timeline_order_idx" ON "pages_blocks_timeline" USING btree ("_order");
  CREATE INDEX "pages_blocks_timeline_parent_id_idx" ON "pages_blocks_timeline" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_timeline_path_idx" ON "pages_blocks_timeline" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_timeline_locales_locale_parent_id_unique" ON "pages_blocks_timeline_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_carousel_slides_order_idx" ON "pages_blocks_carousel_slides" USING btree ("_order");
  CREATE INDEX "pages_blocks_carousel_slides_parent_id_idx" ON "pages_blocks_carousel_slides" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_carousel_slides_image_idx" ON "pages_blocks_carousel_slides" USING btree ("image_id");
  CREATE UNIQUE INDEX "pages_blocks_carousel_slides_locales_locale_parent_id_unique" ON "pages_blocks_carousel_slides_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_carousel_order_idx" ON "pages_blocks_carousel" USING btree ("_order");
  CREATE INDEX "pages_blocks_carousel_parent_id_idx" ON "pages_blocks_carousel" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_carousel_path_idx" ON "pages_blocks_carousel" USING btree ("_path");
  CREATE INDEX "pages_blocks_people_grid_order_idx" ON "pages_blocks_people_grid" USING btree ("_order");
  CREATE INDEX "pages_blocks_people_grid_parent_id_idx" ON "pages_blocks_people_grid" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_people_grid_path_idx" ON "pages_blocks_people_grid" USING btree ("_path");
  CREATE INDEX "pages_blocks_people_grid_hub_idx" ON "pages_blocks_people_grid" USING btree ("hub_id");
  CREATE UNIQUE INDEX "pages_blocks_people_grid_locales_locale_parent_id_unique" ON "pages_blocks_people_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_creed_order_idx" ON "pages_blocks_creed" USING btree ("_order");
  CREATE INDEX "pages_blocks_creed_parent_id_idx" ON "pages_blocks_creed" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_creed_path_idx" ON "pages_blocks_creed" USING btree ("_path");
  CREATE INDEX "pages_blocks_creed_background_idx" ON "pages_blocks_creed" USING btree ("background_id");
  CREATE UNIQUE INDEX "pages_blocks_creed_locales_locale_parent_id_unique" ON "pages_blocks_creed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_section_intro_order_idx" ON "pages_blocks_section_intro" USING btree ("_order");
  CREATE INDEX "pages_blocks_section_intro_parent_id_idx" ON "pages_blocks_section_intro" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_section_intro_path_idx" ON "pages_blocks_section_intro" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_section_intro_locales_locale_parent_id_unique" ON "pages_blocks_section_intro_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_data_table_filters_order_idx" ON "pages_blocks_data_table_filters" USING btree ("_order");
  CREATE INDEX "pages_blocks_data_table_filters_parent_id_idx" ON "pages_blocks_data_table_filters" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_data_table_filters_locales_locale_parent_id_uni" ON "pages_blocks_data_table_filters_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_data_table_columns_order_idx" ON "pages_blocks_data_table_columns" USING btree ("_order");
  CREATE INDEX "pages_blocks_data_table_columns_parent_id_idx" ON "pages_blocks_data_table_columns" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_data_table_columns_locales_locale_parent_id_uni" ON "pages_blocks_data_table_columns_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_data_table_rows_cells_order_idx" ON "pages_blocks_data_table_rows_cells" USING btree ("_order");
  CREATE INDEX "pages_blocks_data_table_rows_cells_parent_id_idx" ON "pages_blocks_data_table_rows_cells" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_data_table_rows_cells_locales_locale_parent_id_" ON "pages_blocks_data_table_rows_cells_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_data_table_rows_order_idx" ON "pages_blocks_data_table_rows" USING btree ("_order");
  CREATE INDEX "pages_blocks_data_table_rows_parent_id_idx" ON "pages_blocks_data_table_rows" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_data_table_order_idx" ON "pages_blocks_data_table" USING btree ("_order");
  CREATE INDEX "pages_blocks_data_table_parent_id_idx" ON "pages_blocks_data_table" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_data_table_path_idx" ON "pages_blocks_data_table" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_data_table_locales_locale_parent_id_unique" ON "pages_blocks_data_table_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_media_card_order_idx" ON "pages_blocks_media_card" USING btree ("_order");
  CREATE INDEX "pages_blocks_media_card_parent_id_idx" ON "pages_blocks_media_card" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_media_card_path_idx" ON "pages_blocks_media_card" USING btree ("_path");
  CREATE INDEX "pages_blocks_media_card_image_idx" ON "pages_blocks_media_card" USING btree ("image_id");
  CREATE UNIQUE INDEX "pages_blocks_media_card_locales_locale_parent_id_unique" ON "pages_blocks_media_card_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_department_grid_order_idx" ON "pages_blocks_department_grid" USING btree ("_order");
  CREATE INDEX "pages_blocks_department_grid_parent_id_idx" ON "pages_blocks_department_grid" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_department_grid_path_idx" ON "pages_blocks_department_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_department_grid_locales_locale_parent_id_unique" ON "pages_blocks_department_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_contact_box_order_idx" ON "pages_blocks_contact_box" USING btree ("_order");
  CREATE INDEX "pages_blocks_contact_box_parent_id_idx" ON "pages_blocks_contact_box" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_contact_box_path_idx" ON "pages_blocks_contact_box" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_contact_box_locales_locale_parent_id_unique" ON "pages_blocks_contact_box_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_contact_form_details_items_order_idx" ON "pages_blocks_contact_form_details_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_contact_form_details_items_parent_id_idx" ON "pages_blocks_contact_form_details_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_contact_form_details_items_locales_locale_paren" ON "pages_blocks_contact_form_details_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_contact_form_details_order_idx" ON "pages_blocks_contact_form_details" USING btree ("_order");
  CREATE INDEX "pages_blocks_contact_form_details_parent_id_idx" ON "pages_blocks_contact_form_details" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_contact_form_details_locales_locale_parent_id_u" ON "pages_blocks_contact_form_details_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_contact_form_order_idx" ON "pages_blocks_contact_form" USING btree ("_order");
  CREATE INDEX "pages_blocks_contact_form_parent_id_idx" ON "pages_blocks_contact_form" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_contact_form_path_idx" ON "pages_blocks_contact_form" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_contact_form_locales_locale_parent_id_unique" ON "pages_blocks_contact_form_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_process_steps_items_order_idx" ON "pages_blocks_process_steps_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_process_steps_items_parent_id_idx" ON "pages_blocks_process_steps_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_process_steps_items_locales_locale_parent_id_un" ON "pages_blocks_process_steps_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_process_steps_order_idx" ON "pages_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "pages_blocks_process_steps_parent_id_idx" ON "pages_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_process_steps_path_idx" ON "pages_blocks_process_steps" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_process_steps_locales_locale_parent_id_unique" ON "pages_blocks_process_steps_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_figure_order_idx" ON "pages_blocks_figure" USING btree ("_order");
  CREATE INDEX "pages_blocks_figure_parent_id_idx" ON "pages_blocks_figure" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_figure_path_idx" ON "pages_blocks_figure" USING btree ("_path");
  CREATE INDEX "pages_blocks_figure_image_idx" ON "pages_blocks_figure" USING btree ("image_id");
  CREATE UNIQUE INDEX "pages_blocks_figure_locales_locale_parent_id_unique" ON "pages_blocks_figure_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_region_map_regions_order_idx" ON "pages_blocks_region_map_regions" USING btree ("_order");
  CREATE INDEX "pages_blocks_region_map_regions_parent_id_idx" ON "pages_blocks_region_map_regions" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_region_map_regions_locales_locale_parent_id_uni" ON "pages_blocks_region_map_regions_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_region_map_order_idx" ON "pages_blocks_region_map" USING btree ("_order");
  CREATE INDEX "pages_blocks_region_map_parent_id_idx" ON "pages_blocks_region_map" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_region_map_path_idx" ON "pages_blocks_region_map" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_region_map_locales_locale_parent_id_unique" ON "pages_blocks_region_map_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_meta_meta_image_idx" ON "pages" USING btree ("meta_image_id");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE UNIQUE INDEX "pages_locales_locale_parent_id_unique" ON "pages_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_pages_id_idx" ON "pages_rels" USING btree ("pages_id");
  CREATE INDEX "pages_rels_posts_id_idx" ON "pages_rels" USING btree ("posts_id");
  CREATE INDEX "pages_rels_departments_id_idx" ON "pages_rels" USING btree ("departments_id");
  CREATE INDEX "pages_rels_hubs_id_idx" ON "pages_rels" USING btree ("hubs_id");
  CREATE INDEX "pages_rels_membership_tiers_id_idx" ON "pages_rels" USING btree ("membership_tiers_id");
  CREATE INDEX "pages_rels_board_members_id_idx" ON "pages_rels" USING btree ("board_members_id");
  CREATE INDEX "_pages_v_blocks_page_banner_links_order_idx" ON "_pages_v_blocks_page_banner_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_page_banner_links_parent_id_idx" ON "_pages_v_blocks_page_banner_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_page_banner_links_locales_locale_parent_id_u" ON "_pages_v_blocks_page_banner_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_page_banner_order_idx" ON "_pages_v_blocks_page_banner" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_page_banner_parent_id_idx" ON "_pages_v_blocks_page_banner" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_page_banner_path_idx" ON "_pages_v_blocks_page_banner" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_page_banner_background_idx" ON "_pages_v_blocks_page_banner" USING btree ("background_id");
  CREATE INDEX "_pages_v_blocks_page_banner_watermark_idx" ON "_pages_v_blocks_page_banner" USING btree ("watermark_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_page_banner_locales_locale_parent_id_unique" ON "_pages_v_blocks_page_banner_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_section_tabs_items_order_idx" ON "_pages_v_blocks_section_tabs_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_section_tabs_items_parent_id_idx" ON "_pages_v_blocks_section_tabs_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_section_tabs_items_locales_locale_parent_id_" ON "_pages_v_blocks_section_tabs_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_section_tabs_order_idx" ON "_pages_v_blocks_section_tabs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_section_tabs_parent_id_idx" ON "_pages_v_blocks_section_tabs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_section_tabs_path_idx" ON "_pages_v_blocks_section_tabs" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_rich_text_order_idx" ON "_pages_v_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_rich_text_parent_id_idx" ON "_pages_v_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_rich_text_path_idx" ON "_pages_v_blocks_rich_text" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_rich_text_locales_locale_parent_id_unique" ON "_pages_v_blocks_rich_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_card_grid_items_order_idx" ON "_pages_v_blocks_card_grid_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_card_grid_items_parent_id_idx" ON "_pages_v_blocks_card_grid_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_card_grid_items_icon_idx" ON "_pages_v_blocks_card_grid_items" USING btree ("icon_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_card_grid_items_locales_locale_parent_id_uni" ON "_pages_v_blocks_card_grid_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_card_grid_order_idx" ON "_pages_v_blocks_card_grid" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_card_grid_parent_id_idx" ON "_pages_v_blocks_card_grid" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_card_grid_path_idx" ON "_pages_v_blocks_card_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_card_grid_locales_locale_parent_id_unique" ON "_pages_v_blocks_card_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_quote_banner_order_idx" ON "_pages_v_blocks_quote_banner" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_quote_banner_parent_id_idx" ON "_pages_v_blocks_quote_banner" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_quote_banner_path_idx" ON "_pages_v_blocks_quote_banner" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_quote_banner_background_idx" ON "_pages_v_blocks_quote_banner" USING btree ("background_id");
  CREATE INDEX "_pages_v_blocks_quote_banner_watermark_idx" ON "_pages_v_blocks_quote_banner" USING btree ("watermark_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_quote_banner_locales_locale_parent_id_unique" ON "_pages_v_blocks_quote_banner_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_accelerators_items_order_idx" ON "_pages_v_blocks_accelerators_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_accelerators_items_parent_id_idx" ON "_pages_v_blocks_accelerators_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_accelerators_items_image_idx" ON "_pages_v_blocks_accelerators_items" USING btree ("image_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_accelerators_items_locales_locale_parent_id_" ON "_pages_v_blocks_accelerators_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_accelerators_order_idx" ON "_pages_v_blocks_accelerators" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_accelerators_parent_id_idx" ON "_pages_v_blocks_accelerators" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_accelerators_path_idx" ON "_pages_v_blocks_accelerators" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_accelerators_locales_locale_parent_id_unique" ON "_pages_v_blocks_accelerators_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_posts_feed_filter_items_order_idx" ON "_pages_v_blocks_posts_feed_filter_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_posts_feed_filter_items_parent_id_idx" ON "_pages_v_blocks_posts_feed_filter_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_posts_feed_filter_items_locales_locale_paren" ON "_pages_v_blocks_posts_feed_filter_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_posts_feed_order_idx" ON "_pages_v_blocks_posts_feed" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_posts_feed_parent_id_idx" ON "_pages_v_blocks_posts_feed" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_posts_feed_path_idx" ON "_pages_v_blocks_posts_feed" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_posts_feed_locales_locale_parent_id_unique" ON "_pages_v_blocks_posts_feed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_gallery_items_order_idx" ON "_pages_v_blocks_gallery_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_gallery_items_parent_id_idx" ON "_pages_v_blocks_gallery_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_gallery_items_image_idx" ON "_pages_v_blocks_gallery_items" USING btree ("image_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_gallery_items_locales_locale_parent_id_uniqu" ON "_pages_v_blocks_gallery_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_gallery_order_idx" ON "_pages_v_blocks_gallery" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_gallery_parent_id_idx" ON "_pages_v_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_gallery_path_idx" ON "_pages_v_blocks_gallery" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_values_list_items_order_idx" ON "_pages_v_blocks_values_list_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_values_list_items_parent_id_idx" ON "_pages_v_blocks_values_list_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_values_list_items_locales_locale_parent_id_u" ON "_pages_v_blocks_values_list_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_values_list_order_idx" ON "_pages_v_blocks_values_list" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_values_list_parent_id_idx" ON "_pages_v_blocks_values_list" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_values_list_path_idx" ON "_pages_v_blocks_values_list" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_values_list_locales_locale_parent_id_unique" ON "_pages_v_blocks_values_list_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_history_grid_paragraphs_order_idx" ON "_pages_v_blocks_history_grid_paragraphs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_history_grid_paragraphs_parent_id_idx" ON "_pages_v_blocks_history_grid_paragraphs" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_history_grid_paragraphs_locales_locale_paren" ON "_pages_v_blocks_history_grid_paragraphs_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_history_grid_order_idx" ON "_pages_v_blocks_history_grid" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_history_grid_parent_id_idx" ON "_pages_v_blocks_history_grid" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_history_grid_path_idx" ON "_pages_v_blocks_history_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_history_grid_locales_locale_parent_id_unique" ON "_pages_v_blocks_history_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_stats_row_items_order_idx" ON "_pages_v_blocks_stats_row_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_stats_row_items_parent_id_idx" ON "_pages_v_blocks_stats_row_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_stats_row_items_locales_locale_parent_id_uni" ON "_pages_v_blocks_stats_row_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_stats_row_order_idx" ON "_pages_v_blocks_stats_row" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_stats_row_parent_id_idx" ON "_pages_v_blocks_stats_row" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_stats_row_path_idx" ON "_pages_v_blocks_stats_row" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_highlighted_text_order_idx" ON "_pages_v_blocks_highlighted_text" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_highlighted_text_parent_id_idx" ON "_pages_v_blocks_highlighted_text" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_highlighted_text_path_idx" ON "_pages_v_blocks_highlighted_text" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_highlighted_text_locales_locale_parent_id_un" ON "_pages_v_blocks_highlighted_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_timeline_items_lines_order_idx" ON "_pages_v_blocks_timeline_items_lines" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_timeline_items_lines_parent_id_idx" ON "_pages_v_blocks_timeline_items_lines" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_timeline_items_lines_locales_locale_parent_i" ON "_pages_v_blocks_timeline_items_lines_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_timeline_items_order_idx" ON "_pages_v_blocks_timeline_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_timeline_items_parent_id_idx" ON "_pages_v_blocks_timeline_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_timeline_order_idx" ON "_pages_v_blocks_timeline" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_timeline_parent_id_idx" ON "_pages_v_blocks_timeline" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_timeline_path_idx" ON "_pages_v_blocks_timeline" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_timeline_locales_locale_parent_id_unique" ON "_pages_v_blocks_timeline_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_carousel_slides_order_idx" ON "_pages_v_blocks_carousel_slides" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_carousel_slides_parent_id_idx" ON "_pages_v_blocks_carousel_slides" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_carousel_slides_image_idx" ON "_pages_v_blocks_carousel_slides" USING btree ("image_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_carousel_slides_locales_locale_parent_id_uni" ON "_pages_v_blocks_carousel_slides_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_carousel_order_idx" ON "_pages_v_blocks_carousel" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_carousel_parent_id_idx" ON "_pages_v_blocks_carousel" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_carousel_path_idx" ON "_pages_v_blocks_carousel" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_people_grid_order_idx" ON "_pages_v_blocks_people_grid" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_people_grid_parent_id_idx" ON "_pages_v_blocks_people_grid" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_people_grid_path_idx" ON "_pages_v_blocks_people_grid" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_people_grid_hub_idx" ON "_pages_v_blocks_people_grid" USING btree ("hub_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_people_grid_locales_locale_parent_id_unique" ON "_pages_v_blocks_people_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_creed_order_idx" ON "_pages_v_blocks_creed" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_creed_parent_id_idx" ON "_pages_v_blocks_creed" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_creed_path_idx" ON "_pages_v_blocks_creed" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_creed_background_idx" ON "_pages_v_blocks_creed" USING btree ("background_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_creed_locales_locale_parent_id_unique" ON "_pages_v_blocks_creed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_section_intro_order_idx" ON "_pages_v_blocks_section_intro" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_section_intro_parent_id_idx" ON "_pages_v_blocks_section_intro" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_section_intro_path_idx" ON "_pages_v_blocks_section_intro" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_section_intro_locales_locale_parent_id_uniqu" ON "_pages_v_blocks_section_intro_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_data_table_filters_order_idx" ON "_pages_v_blocks_data_table_filters" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_data_table_filters_parent_id_idx" ON "_pages_v_blocks_data_table_filters" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_data_table_filters_locales_locale_parent_id_" ON "_pages_v_blocks_data_table_filters_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_data_table_columns_order_idx" ON "_pages_v_blocks_data_table_columns" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_data_table_columns_parent_id_idx" ON "_pages_v_blocks_data_table_columns" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_data_table_columns_locales_locale_parent_id_" ON "_pages_v_blocks_data_table_columns_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_data_table_rows_cells_order_idx" ON "_pages_v_blocks_data_table_rows_cells" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_data_table_rows_cells_parent_id_idx" ON "_pages_v_blocks_data_table_rows_cells" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_data_table_rows_cells_locales_locale_parent_" ON "_pages_v_blocks_data_table_rows_cells_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_data_table_rows_order_idx" ON "_pages_v_blocks_data_table_rows" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_data_table_rows_parent_id_idx" ON "_pages_v_blocks_data_table_rows" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_data_table_order_idx" ON "_pages_v_blocks_data_table" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_data_table_parent_id_idx" ON "_pages_v_blocks_data_table" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_data_table_path_idx" ON "_pages_v_blocks_data_table" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_data_table_locales_locale_parent_id_unique" ON "_pages_v_blocks_data_table_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_media_card_order_idx" ON "_pages_v_blocks_media_card" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_media_card_parent_id_idx" ON "_pages_v_blocks_media_card" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_media_card_path_idx" ON "_pages_v_blocks_media_card" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_media_card_image_idx" ON "_pages_v_blocks_media_card" USING btree ("image_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_media_card_locales_locale_parent_id_unique" ON "_pages_v_blocks_media_card_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_department_grid_order_idx" ON "_pages_v_blocks_department_grid" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_department_grid_parent_id_idx" ON "_pages_v_blocks_department_grid" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_department_grid_path_idx" ON "_pages_v_blocks_department_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_department_grid_locales_locale_parent_id_uni" ON "_pages_v_blocks_department_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_contact_box_order_idx" ON "_pages_v_blocks_contact_box" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_contact_box_parent_id_idx" ON "_pages_v_blocks_contact_box" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_contact_box_path_idx" ON "_pages_v_blocks_contact_box" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_contact_box_locales_locale_parent_id_unique" ON "_pages_v_blocks_contact_box_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_contact_form_details_items_order_idx" ON "_pages_v_blocks_contact_form_details_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_contact_form_details_items_parent_id_idx" ON "_pages_v_blocks_contact_form_details_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_contact_form_details_items_locales_locale_pa" ON "_pages_v_blocks_contact_form_details_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_contact_form_details_order_idx" ON "_pages_v_blocks_contact_form_details" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_contact_form_details_parent_id_idx" ON "_pages_v_blocks_contact_form_details" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_contact_form_details_locales_locale_parent_i" ON "_pages_v_blocks_contact_form_details_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_contact_form_order_idx" ON "_pages_v_blocks_contact_form" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_contact_form_parent_id_idx" ON "_pages_v_blocks_contact_form" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_contact_form_path_idx" ON "_pages_v_blocks_contact_form" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_contact_form_locales_locale_parent_id_unique" ON "_pages_v_blocks_contact_form_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_process_steps_items_order_idx" ON "_pages_v_blocks_process_steps_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_process_steps_items_parent_id_idx" ON "_pages_v_blocks_process_steps_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_process_steps_items_locales_locale_parent_id" ON "_pages_v_blocks_process_steps_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_process_steps_order_idx" ON "_pages_v_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_process_steps_parent_id_idx" ON "_pages_v_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_process_steps_path_idx" ON "_pages_v_blocks_process_steps" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_process_steps_locales_locale_parent_id_uniqu" ON "_pages_v_blocks_process_steps_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_figure_order_idx" ON "_pages_v_blocks_figure" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_figure_parent_id_idx" ON "_pages_v_blocks_figure" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_figure_path_idx" ON "_pages_v_blocks_figure" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_figure_image_idx" ON "_pages_v_blocks_figure" USING btree ("image_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_figure_locales_locale_parent_id_unique" ON "_pages_v_blocks_figure_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_region_map_regions_order_idx" ON "_pages_v_blocks_region_map_regions" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_region_map_regions_parent_id_idx" ON "_pages_v_blocks_region_map_regions" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_region_map_regions_locales_locale_parent_id_" ON "_pages_v_blocks_region_map_regions_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_region_map_order_idx" ON "_pages_v_blocks_region_map" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_region_map_parent_id_idx" ON "_pages_v_blocks_region_map" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_region_map_path_idx" ON "_pages_v_blocks_region_map" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_region_map_locales_locale_parent_id_unique" ON "_pages_v_blocks_region_map_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_snapshot_idx" ON "_pages_v" USING btree ("snapshot");
  CREATE INDEX "_pages_v_published_locale_idx" ON "_pages_v" USING btree ("published_locale");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE UNIQUE INDEX "_pages_v_locales_locale_parent_id_unique" ON "_pages_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX "_pages_v_rels_pages_id_idx" ON "_pages_v_rels" USING btree ("pages_id");
  CREATE INDEX "_pages_v_rels_posts_id_idx" ON "_pages_v_rels" USING btree ("posts_id");
  CREATE INDEX "_pages_v_rels_departments_id_idx" ON "_pages_v_rels" USING btree ("departments_id");
  CREATE INDEX "_pages_v_rels_hubs_id_idx" ON "_pages_v_rels" USING btree ("hubs_id");
  CREATE INDEX "_pages_v_rels_membership_tiers_id_idx" ON "_pages_v_rels" USING btree ("membership_tiers_id");
  CREATE INDEX "_pages_v_rels_board_members_id_idx" ON "_pages_v_rels" USING btree ("board_members_id");
  CREATE INDEX "posts_blocks_page_banner_links_order_idx" ON "posts_blocks_page_banner_links" USING btree ("_order");
  CREATE INDEX "posts_blocks_page_banner_links_parent_id_idx" ON "posts_blocks_page_banner_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "posts_blocks_page_banner_links_locales_locale_parent_id_uniq" ON "posts_blocks_page_banner_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_page_banner_order_idx" ON "posts_blocks_page_banner" USING btree ("_order");
  CREATE INDEX "posts_blocks_page_banner_parent_id_idx" ON "posts_blocks_page_banner" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_page_banner_path_idx" ON "posts_blocks_page_banner" USING btree ("_path");
  CREATE INDEX "posts_blocks_page_banner_background_idx" ON "posts_blocks_page_banner" USING btree ("background_id");
  CREATE INDEX "posts_blocks_page_banner_watermark_idx" ON "posts_blocks_page_banner" USING btree ("watermark_id");
  CREATE UNIQUE INDEX "posts_blocks_page_banner_locales_locale_parent_id_unique" ON "posts_blocks_page_banner_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_section_tabs_items_order_idx" ON "posts_blocks_section_tabs_items" USING btree ("_order");
  CREATE INDEX "posts_blocks_section_tabs_items_parent_id_idx" ON "posts_blocks_section_tabs_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "posts_blocks_section_tabs_items_locales_locale_parent_id_uni" ON "posts_blocks_section_tabs_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_section_tabs_order_idx" ON "posts_blocks_section_tabs" USING btree ("_order");
  CREATE INDEX "posts_blocks_section_tabs_parent_id_idx" ON "posts_blocks_section_tabs" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_section_tabs_path_idx" ON "posts_blocks_section_tabs" USING btree ("_path");
  CREATE INDEX "posts_blocks_rich_text_order_idx" ON "posts_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "posts_blocks_rich_text_parent_id_idx" ON "posts_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_rich_text_path_idx" ON "posts_blocks_rich_text" USING btree ("_path");
  CREATE UNIQUE INDEX "posts_blocks_rich_text_locales_locale_parent_id_unique" ON "posts_blocks_rich_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_card_grid_items_order_idx" ON "posts_blocks_card_grid_items" USING btree ("_order");
  CREATE INDEX "posts_blocks_card_grid_items_parent_id_idx" ON "posts_blocks_card_grid_items" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_card_grid_items_icon_idx" ON "posts_blocks_card_grid_items" USING btree ("icon_id");
  CREATE UNIQUE INDEX "posts_blocks_card_grid_items_locales_locale_parent_id_unique" ON "posts_blocks_card_grid_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_card_grid_order_idx" ON "posts_blocks_card_grid" USING btree ("_order");
  CREATE INDEX "posts_blocks_card_grid_parent_id_idx" ON "posts_blocks_card_grid" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_card_grid_path_idx" ON "posts_blocks_card_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "posts_blocks_card_grid_locales_locale_parent_id_unique" ON "posts_blocks_card_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_quote_banner_order_idx" ON "posts_blocks_quote_banner" USING btree ("_order");
  CREATE INDEX "posts_blocks_quote_banner_parent_id_idx" ON "posts_blocks_quote_banner" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_quote_banner_path_idx" ON "posts_blocks_quote_banner" USING btree ("_path");
  CREATE INDEX "posts_blocks_quote_banner_background_idx" ON "posts_blocks_quote_banner" USING btree ("background_id");
  CREATE INDEX "posts_blocks_quote_banner_watermark_idx" ON "posts_blocks_quote_banner" USING btree ("watermark_id");
  CREATE UNIQUE INDEX "posts_blocks_quote_banner_locales_locale_parent_id_unique" ON "posts_blocks_quote_banner_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_accelerators_items_order_idx" ON "posts_blocks_accelerators_items" USING btree ("_order");
  CREATE INDEX "posts_blocks_accelerators_items_parent_id_idx" ON "posts_blocks_accelerators_items" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_accelerators_items_image_idx" ON "posts_blocks_accelerators_items" USING btree ("image_id");
  CREATE UNIQUE INDEX "posts_blocks_accelerators_items_locales_locale_parent_id_uni" ON "posts_blocks_accelerators_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_accelerators_order_idx" ON "posts_blocks_accelerators" USING btree ("_order");
  CREATE INDEX "posts_blocks_accelerators_parent_id_idx" ON "posts_blocks_accelerators" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_accelerators_path_idx" ON "posts_blocks_accelerators" USING btree ("_path");
  CREATE UNIQUE INDEX "posts_blocks_accelerators_locales_locale_parent_id_unique" ON "posts_blocks_accelerators_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_posts_feed_filter_items_order_idx" ON "posts_blocks_posts_feed_filter_items" USING btree ("_order");
  CREATE INDEX "posts_blocks_posts_feed_filter_items_parent_id_idx" ON "posts_blocks_posts_feed_filter_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "posts_blocks_posts_feed_filter_items_locales_locale_parent_i" ON "posts_blocks_posts_feed_filter_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_posts_feed_order_idx" ON "posts_blocks_posts_feed" USING btree ("_order");
  CREATE INDEX "posts_blocks_posts_feed_parent_id_idx" ON "posts_blocks_posts_feed" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_posts_feed_path_idx" ON "posts_blocks_posts_feed" USING btree ("_path");
  CREATE UNIQUE INDEX "posts_blocks_posts_feed_locales_locale_parent_id_unique" ON "posts_blocks_posts_feed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_gallery_items_order_idx" ON "posts_blocks_gallery_items" USING btree ("_order");
  CREATE INDEX "posts_blocks_gallery_items_parent_id_idx" ON "posts_blocks_gallery_items" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_gallery_items_image_idx" ON "posts_blocks_gallery_items" USING btree ("image_id");
  CREATE UNIQUE INDEX "posts_blocks_gallery_items_locales_locale_parent_id_unique" ON "posts_blocks_gallery_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_gallery_order_idx" ON "posts_blocks_gallery" USING btree ("_order");
  CREATE INDEX "posts_blocks_gallery_parent_id_idx" ON "posts_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_gallery_path_idx" ON "posts_blocks_gallery" USING btree ("_path");
  CREATE INDEX "posts_blocks_values_list_items_order_idx" ON "posts_blocks_values_list_items" USING btree ("_order");
  CREATE INDEX "posts_blocks_values_list_items_parent_id_idx" ON "posts_blocks_values_list_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "posts_blocks_values_list_items_locales_locale_parent_id_uniq" ON "posts_blocks_values_list_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_values_list_order_idx" ON "posts_blocks_values_list" USING btree ("_order");
  CREATE INDEX "posts_blocks_values_list_parent_id_idx" ON "posts_blocks_values_list" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_values_list_path_idx" ON "posts_blocks_values_list" USING btree ("_path");
  CREATE UNIQUE INDEX "posts_blocks_values_list_locales_locale_parent_id_unique" ON "posts_blocks_values_list_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_history_grid_paragraphs_order_idx" ON "posts_blocks_history_grid_paragraphs" USING btree ("_order");
  CREATE INDEX "posts_blocks_history_grid_paragraphs_parent_id_idx" ON "posts_blocks_history_grid_paragraphs" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "posts_blocks_history_grid_paragraphs_locales_locale_parent_i" ON "posts_blocks_history_grid_paragraphs_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_history_grid_order_idx" ON "posts_blocks_history_grid" USING btree ("_order");
  CREATE INDEX "posts_blocks_history_grid_parent_id_idx" ON "posts_blocks_history_grid" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_history_grid_path_idx" ON "posts_blocks_history_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "posts_blocks_history_grid_locales_locale_parent_id_unique" ON "posts_blocks_history_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_stats_row_items_order_idx" ON "posts_blocks_stats_row_items" USING btree ("_order");
  CREATE INDEX "posts_blocks_stats_row_items_parent_id_idx" ON "posts_blocks_stats_row_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "posts_blocks_stats_row_items_locales_locale_parent_id_unique" ON "posts_blocks_stats_row_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_stats_row_order_idx" ON "posts_blocks_stats_row" USING btree ("_order");
  CREATE INDEX "posts_blocks_stats_row_parent_id_idx" ON "posts_blocks_stats_row" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_stats_row_path_idx" ON "posts_blocks_stats_row" USING btree ("_path");
  CREATE INDEX "posts_blocks_highlighted_text_order_idx" ON "posts_blocks_highlighted_text" USING btree ("_order");
  CREATE INDEX "posts_blocks_highlighted_text_parent_id_idx" ON "posts_blocks_highlighted_text" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_highlighted_text_path_idx" ON "posts_blocks_highlighted_text" USING btree ("_path");
  CREATE UNIQUE INDEX "posts_blocks_highlighted_text_locales_locale_parent_id_uniqu" ON "posts_blocks_highlighted_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_timeline_items_lines_order_idx" ON "posts_blocks_timeline_items_lines" USING btree ("_order");
  CREATE INDEX "posts_blocks_timeline_items_lines_parent_id_idx" ON "posts_blocks_timeline_items_lines" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "posts_blocks_timeline_items_lines_locales_locale_parent_id_u" ON "posts_blocks_timeline_items_lines_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_timeline_items_order_idx" ON "posts_blocks_timeline_items" USING btree ("_order");
  CREATE INDEX "posts_blocks_timeline_items_parent_id_idx" ON "posts_blocks_timeline_items" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_timeline_order_idx" ON "posts_blocks_timeline" USING btree ("_order");
  CREATE INDEX "posts_blocks_timeline_parent_id_idx" ON "posts_blocks_timeline" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_timeline_path_idx" ON "posts_blocks_timeline" USING btree ("_path");
  CREATE UNIQUE INDEX "posts_blocks_timeline_locales_locale_parent_id_unique" ON "posts_blocks_timeline_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_carousel_slides_order_idx" ON "posts_blocks_carousel_slides" USING btree ("_order");
  CREATE INDEX "posts_blocks_carousel_slides_parent_id_idx" ON "posts_blocks_carousel_slides" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_carousel_slides_image_idx" ON "posts_blocks_carousel_slides" USING btree ("image_id");
  CREATE UNIQUE INDEX "posts_blocks_carousel_slides_locales_locale_parent_id_unique" ON "posts_blocks_carousel_slides_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_carousel_order_idx" ON "posts_blocks_carousel" USING btree ("_order");
  CREATE INDEX "posts_blocks_carousel_parent_id_idx" ON "posts_blocks_carousel" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_carousel_path_idx" ON "posts_blocks_carousel" USING btree ("_path");
  CREATE INDEX "posts_blocks_people_grid_order_idx" ON "posts_blocks_people_grid" USING btree ("_order");
  CREATE INDEX "posts_blocks_people_grid_parent_id_idx" ON "posts_blocks_people_grid" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_people_grid_path_idx" ON "posts_blocks_people_grid" USING btree ("_path");
  CREATE INDEX "posts_blocks_people_grid_hub_idx" ON "posts_blocks_people_grid" USING btree ("hub_id");
  CREATE UNIQUE INDEX "posts_blocks_people_grid_locales_locale_parent_id_unique" ON "posts_blocks_people_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_creed_order_idx" ON "posts_blocks_creed" USING btree ("_order");
  CREATE INDEX "posts_blocks_creed_parent_id_idx" ON "posts_blocks_creed" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_creed_path_idx" ON "posts_blocks_creed" USING btree ("_path");
  CREATE INDEX "posts_blocks_creed_background_idx" ON "posts_blocks_creed" USING btree ("background_id");
  CREATE UNIQUE INDEX "posts_blocks_creed_locales_locale_parent_id_unique" ON "posts_blocks_creed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_section_intro_order_idx" ON "posts_blocks_section_intro" USING btree ("_order");
  CREATE INDEX "posts_blocks_section_intro_parent_id_idx" ON "posts_blocks_section_intro" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_section_intro_path_idx" ON "posts_blocks_section_intro" USING btree ("_path");
  CREATE UNIQUE INDEX "posts_blocks_section_intro_locales_locale_parent_id_unique" ON "posts_blocks_section_intro_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_data_table_filters_order_idx" ON "posts_blocks_data_table_filters" USING btree ("_order");
  CREATE INDEX "posts_blocks_data_table_filters_parent_id_idx" ON "posts_blocks_data_table_filters" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "posts_blocks_data_table_filters_locales_locale_parent_id_uni" ON "posts_blocks_data_table_filters_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_data_table_columns_order_idx" ON "posts_blocks_data_table_columns" USING btree ("_order");
  CREATE INDEX "posts_blocks_data_table_columns_parent_id_idx" ON "posts_blocks_data_table_columns" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "posts_blocks_data_table_columns_locales_locale_parent_id_uni" ON "posts_blocks_data_table_columns_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_data_table_rows_cells_order_idx" ON "posts_blocks_data_table_rows_cells" USING btree ("_order");
  CREATE INDEX "posts_blocks_data_table_rows_cells_parent_id_idx" ON "posts_blocks_data_table_rows_cells" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "posts_blocks_data_table_rows_cells_locales_locale_parent_id_" ON "posts_blocks_data_table_rows_cells_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_data_table_rows_order_idx" ON "posts_blocks_data_table_rows" USING btree ("_order");
  CREATE INDEX "posts_blocks_data_table_rows_parent_id_idx" ON "posts_blocks_data_table_rows" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_data_table_order_idx" ON "posts_blocks_data_table" USING btree ("_order");
  CREATE INDEX "posts_blocks_data_table_parent_id_idx" ON "posts_blocks_data_table" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_data_table_path_idx" ON "posts_blocks_data_table" USING btree ("_path");
  CREATE UNIQUE INDEX "posts_blocks_data_table_locales_locale_parent_id_unique" ON "posts_blocks_data_table_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_media_card_order_idx" ON "posts_blocks_media_card" USING btree ("_order");
  CREATE INDEX "posts_blocks_media_card_parent_id_idx" ON "posts_blocks_media_card" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_media_card_path_idx" ON "posts_blocks_media_card" USING btree ("_path");
  CREATE INDEX "posts_blocks_media_card_image_idx" ON "posts_blocks_media_card" USING btree ("image_id");
  CREATE UNIQUE INDEX "posts_blocks_media_card_locales_locale_parent_id_unique" ON "posts_blocks_media_card_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_department_grid_order_idx" ON "posts_blocks_department_grid" USING btree ("_order");
  CREATE INDEX "posts_blocks_department_grid_parent_id_idx" ON "posts_blocks_department_grid" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_department_grid_path_idx" ON "posts_blocks_department_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "posts_blocks_department_grid_locales_locale_parent_id_unique" ON "posts_blocks_department_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_contact_box_order_idx" ON "posts_blocks_contact_box" USING btree ("_order");
  CREATE INDEX "posts_blocks_contact_box_parent_id_idx" ON "posts_blocks_contact_box" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_contact_box_path_idx" ON "posts_blocks_contact_box" USING btree ("_path");
  CREATE UNIQUE INDEX "posts_blocks_contact_box_locales_locale_parent_id_unique" ON "posts_blocks_contact_box_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_contact_form_details_items_order_idx" ON "posts_blocks_contact_form_details_items" USING btree ("_order");
  CREATE INDEX "posts_blocks_contact_form_details_items_parent_id_idx" ON "posts_blocks_contact_form_details_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "posts_blocks_contact_form_details_items_locales_locale_paren" ON "posts_blocks_contact_form_details_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_contact_form_details_order_idx" ON "posts_blocks_contact_form_details" USING btree ("_order");
  CREATE INDEX "posts_blocks_contact_form_details_parent_id_idx" ON "posts_blocks_contact_form_details" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "posts_blocks_contact_form_details_locales_locale_parent_id_u" ON "posts_blocks_contact_form_details_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_contact_form_order_idx" ON "posts_blocks_contact_form" USING btree ("_order");
  CREATE INDEX "posts_blocks_contact_form_parent_id_idx" ON "posts_blocks_contact_form" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_contact_form_path_idx" ON "posts_blocks_contact_form" USING btree ("_path");
  CREATE UNIQUE INDEX "posts_blocks_contact_form_locales_locale_parent_id_unique" ON "posts_blocks_contact_form_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_process_steps_items_order_idx" ON "posts_blocks_process_steps_items" USING btree ("_order");
  CREATE INDEX "posts_blocks_process_steps_items_parent_id_idx" ON "posts_blocks_process_steps_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "posts_blocks_process_steps_items_locales_locale_parent_id_un" ON "posts_blocks_process_steps_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_process_steps_order_idx" ON "posts_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "posts_blocks_process_steps_parent_id_idx" ON "posts_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_process_steps_path_idx" ON "posts_blocks_process_steps" USING btree ("_path");
  CREATE UNIQUE INDEX "posts_blocks_process_steps_locales_locale_parent_id_unique" ON "posts_blocks_process_steps_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_figure_order_idx" ON "posts_blocks_figure" USING btree ("_order");
  CREATE INDEX "posts_blocks_figure_parent_id_idx" ON "posts_blocks_figure" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_figure_path_idx" ON "posts_blocks_figure" USING btree ("_path");
  CREATE INDEX "posts_blocks_figure_image_idx" ON "posts_blocks_figure" USING btree ("image_id");
  CREATE UNIQUE INDEX "posts_blocks_figure_locales_locale_parent_id_unique" ON "posts_blocks_figure_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_region_map_regions_order_idx" ON "posts_blocks_region_map_regions" USING btree ("_order");
  CREATE INDEX "posts_blocks_region_map_regions_parent_id_idx" ON "posts_blocks_region_map_regions" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "posts_blocks_region_map_regions_locales_locale_parent_id_uni" ON "posts_blocks_region_map_regions_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_blocks_region_map_order_idx" ON "posts_blocks_region_map" USING btree ("_order");
  CREATE INDEX "posts_blocks_region_map_parent_id_idx" ON "posts_blocks_region_map" USING btree ("_parent_id");
  CREATE INDEX "posts_blocks_region_map_path_idx" ON "posts_blocks_region_map" USING btree ("_path");
  CREATE UNIQUE INDEX "posts_blocks_region_map_locales_locale_parent_id_unique" ON "posts_blocks_region_map_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "posts_slug_idx" ON "posts" USING btree ("slug");
  CREATE INDEX "posts_cover_idx" ON "posts" USING btree ("cover_id");
  CREATE INDEX "posts_updated_at_idx" ON "posts" USING btree ("updated_at");
  CREATE INDEX "posts_created_at_idx" ON "posts" USING btree ("created_at");
  CREATE INDEX "posts__status_idx" ON "posts" USING btree ("_status");
  CREATE UNIQUE INDEX "posts_locales_locale_parent_id_unique" ON "posts_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_rels_order_idx" ON "posts_rels" USING btree ("order");
  CREATE INDEX "posts_rels_parent_idx" ON "posts_rels" USING btree ("parent_id");
  CREATE INDEX "posts_rels_path_idx" ON "posts_rels" USING btree ("path");
  CREATE INDEX "posts_rels_pages_id_idx" ON "posts_rels" USING btree ("pages_id");
  CREATE INDEX "posts_rels_posts_id_idx" ON "posts_rels" USING btree ("posts_id");
  CREATE INDEX "posts_rels_departments_id_idx" ON "posts_rels" USING btree ("departments_id");
  CREATE INDEX "posts_rels_hubs_id_idx" ON "posts_rels" USING btree ("hubs_id");
  CREATE INDEX "posts_rels_membership_tiers_id_idx" ON "posts_rels" USING btree ("membership_tiers_id");
  CREATE INDEX "posts_rels_board_members_id_idx" ON "posts_rels" USING btree ("board_members_id");
  CREATE INDEX "_posts_v_blocks_page_banner_links_order_idx" ON "_posts_v_blocks_page_banner_links" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_page_banner_links_parent_id_idx" ON "_posts_v_blocks_page_banner_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_posts_v_blocks_page_banner_links_locales_locale_parent_id_u" ON "_posts_v_blocks_page_banner_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_page_banner_order_idx" ON "_posts_v_blocks_page_banner" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_page_banner_parent_id_idx" ON "_posts_v_blocks_page_banner" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_page_banner_path_idx" ON "_posts_v_blocks_page_banner" USING btree ("_path");
  CREATE INDEX "_posts_v_blocks_page_banner_background_idx" ON "_posts_v_blocks_page_banner" USING btree ("background_id");
  CREATE INDEX "_posts_v_blocks_page_banner_watermark_idx" ON "_posts_v_blocks_page_banner" USING btree ("watermark_id");
  CREATE UNIQUE INDEX "_posts_v_blocks_page_banner_locales_locale_parent_id_unique" ON "_posts_v_blocks_page_banner_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_section_tabs_items_order_idx" ON "_posts_v_blocks_section_tabs_items" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_section_tabs_items_parent_id_idx" ON "_posts_v_blocks_section_tabs_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_posts_v_blocks_section_tabs_items_locales_locale_parent_id_" ON "_posts_v_blocks_section_tabs_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_section_tabs_order_idx" ON "_posts_v_blocks_section_tabs" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_section_tabs_parent_id_idx" ON "_posts_v_blocks_section_tabs" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_section_tabs_path_idx" ON "_posts_v_blocks_section_tabs" USING btree ("_path");
  CREATE INDEX "_posts_v_blocks_rich_text_order_idx" ON "_posts_v_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_rich_text_parent_id_idx" ON "_posts_v_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_rich_text_path_idx" ON "_posts_v_blocks_rich_text" USING btree ("_path");
  CREATE UNIQUE INDEX "_posts_v_blocks_rich_text_locales_locale_parent_id_unique" ON "_posts_v_blocks_rich_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_card_grid_items_order_idx" ON "_posts_v_blocks_card_grid_items" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_card_grid_items_parent_id_idx" ON "_posts_v_blocks_card_grid_items" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_card_grid_items_icon_idx" ON "_posts_v_blocks_card_grid_items" USING btree ("icon_id");
  CREATE UNIQUE INDEX "_posts_v_blocks_card_grid_items_locales_locale_parent_id_uni" ON "_posts_v_blocks_card_grid_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_card_grid_order_idx" ON "_posts_v_blocks_card_grid" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_card_grid_parent_id_idx" ON "_posts_v_blocks_card_grid" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_card_grid_path_idx" ON "_posts_v_blocks_card_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "_posts_v_blocks_card_grid_locales_locale_parent_id_unique" ON "_posts_v_blocks_card_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_quote_banner_order_idx" ON "_posts_v_blocks_quote_banner" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_quote_banner_parent_id_idx" ON "_posts_v_blocks_quote_banner" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_quote_banner_path_idx" ON "_posts_v_blocks_quote_banner" USING btree ("_path");
  CREATE INDEX "_posts_v_blocks_quote_banner_background_idx" ON "_posts_v_blocks_quote_banner" USING btree ("background_id");
  CREATE INDEX "_posts_v_blocks_quote_banner_watermark_idx" ON "_posts_v_blocks_quote_banner" USING btree ("watermark_id");
  CREATE UNIQUE INDEX "_posts_v_blocks_quote_banner_locales_locale_parent_id_unique" ON "_posts_v_blocks_quote_banner_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_accelerators_items_order_idx" ON "_posts_v_blocks_accelerators_items" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_accelerators_items_parent_id_idx" ON "_posts_v_blocks_accelerators_items" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_accelerators_items_image_idx" ON "_posts_v_blocks_accelerators_items" USING btree ("image_id");
  CREATE UNIQUE INDEX "_posts_v_blocks_accelerators_items_locales_locale_parent_id_" ON "_posts_v_blocks_accelerators_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_accelerators_order_idx" ON "_posts_v_blocks_accelerators" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_accelerators_parent_id_idx" ON "_posts_v_blocks_accelerators" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_accelerators_path_idx" ON "_posts_v_blocks_accelerators" USING btree ("_path");
  CREATE UNIQUE INDEX "_posts_v_blocks_accelerators_locales_locale_parent_id_unique" ON "_posts_v_blocks_accelerators_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_posts_feed_filter_items_order_idx" ON "_posts_v_blocks_posts_feed_filter_items" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_posts_feed_filter_items_parent_id_idx" ON "_posts_v_blocks_posts_feed_filter_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_posts_v_blocks_posts_feed_filter_items_locales_locale_paren" ON "_posts_v_blocks_posts_feed_filter_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_posts_feed_order_idx" ON "_posts_v_blocks_posts_feed" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_posts_feed_parent_id_idx" ON "_posts_v_blocks_posts_feed" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_posts_feed_path_idx" ON "_posts_v_blocks_posts_feed" USING btree ("_path");
  CREATE UNIQUE INDEX "_posts_v_blocks_posts_feed_locales_locale_parent_id_unique" ON "_posts_v_blocks_posts_feed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_gallery_items_order_idx" ON "_posts_v_blocks_gallery_items" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_gallery_items_parent_id_idx" ON "_posts_v_blocks_gallery_items" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_gallery_items_image_idx" ON "_posts_v_blocks_gallery_items" USING btree ("image_id");
  CREATE UNIQUE INDEX "_posts_v_blocks_gallery_items_locales_locale_parent_id_uniqu" ON "_posts_v_blocks_gallery_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_gallery_order_idx" ON "_posts_v_blocks_gallery" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_gallery_parent_id_idx" ON "_posts_v_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_gallery_path_idx" ON "_posts_v_blocks_gallery" USING btree ("_path");
  CREATE INDEX "_posts_v_blocks_values_list_items_order_idx" ON "_posts_v_blocks_values_list_items" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_values_list_items_parent_id_idx" ON "_posts_v_blocks_values_list_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_posts_v_blocks_values_list_items_locales_locale_parent_id_u" ON "_posts_v_blocks_values_list_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_values_list_order_idx" ON "_posts_v_blocks_values_list" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_values_list_parent_id_idx" ON "_posts_v_blocks_values_list" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_values_list_path_idx" ON "_posts_v_blocks_values_list" USING btree ("_path");
  CREATE UNIQUE INDEX "_posts_v_blocks_values_list_locales_locale_parent_id_unique" ON "_posts_v_blocks_values_list_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_history_grid_paragraphs_order_idx" ON "_posts_v_blocks_history_grid_paragraphs" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_history_grid_paragraphs_parent_id_idx" ON "_posts_v_blocks_history_grid_paragraphs" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_posts_v_blocks_history_grid_paragraphs_locales_locale_paren" ON "_posts_v_blocks_history_grid_paragraphs_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_history_grid_order_idx" ON "_posts_v_blocks_history_grid" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_history_grid_parent_id_idx" ON "_posts_v_blocks_history_grid" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_history_grid_path_idx" ON "_posts_v_blocks_history_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "_posts_v_blocks_history_grid_locales_locale_parent_id_unique" ON "_posts_v_blocks_history_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_stats_row_items_order_idx" ON "_posts_v_blocks_stats_row_items" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_stats_row_items_parent_id_idx" ON "_posts_v_blocks_stats_row_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_posts_v_blocks_stats_row_items_locales_locale_parent_id_uni" ON "_posts_v_blocks_stats_row_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_stats_row_order_idx" ON "_posts_v_blocks_stats_row" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_stats_row_parent_id_idx" ON "_posts_v_blocks_stats_row" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_stats_row_path_idx" ON "_posts_v_blocks_stats_row" USING btree ("_path");
  CREATE INDEX "_posts_v_blocks_highlighted_text_order_idx" ON "_posts_v_blocks_highlighted_text" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_highlighted_text_parent_id_idx" ON "_posts_v_blocks_highlighted_text" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_highlighted_text_path_idx" ON "_posts_v_blocks_highlighted_text" USING btree ("_path");
  CREATE UNIQUE INDEX "_posts_v_blocks_highlighted_text_locales_locale_parent_id_un" ON "_posts_v_blocks_highlighted_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_timeline_items_lines_order_idx" ON "_posts_v_blocks_timeline_items_lines" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_timeline_items_lines_parent_id_idx" ON "_posts_v_blocks_timeline_items_lines" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_posts_v_blocks_timeline_items_lines_locales_locale_parent_i" ON "_posts_v_blocks_timeline_items_lines_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_timeline_items_order_idx" ON "_posts_v_blocks_timeline_items" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_timeline_items_parent_id_idx" ON "_posts_v_blocks_timeline_items" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_timeline_order_idx" ON "_posts_v_blocks_timeline" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_timeline_parent_id_idx" ON "_posts_v_blocks_timeline" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_timeline_path_idx" ON "_posts_v_blocks_timeline" USING btree ("_path");
  CREATE UNIQUE INDEX "_posts_v_blocks_timeline_locales_locale_parent_id_unique" ON "_posts_v_blocks_timeline_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_carousel_slides_order_idx" ON "_posts_v_blocks_carousel_slides" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_carousel_slides_parent_id_idx" ON "_posts_v_blocks_carousel_slides" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_carousel_slides_image_idx" ON "_posts_v_blocks_carousel_slides" USING btree ("image_id");
  CREATE UNIQUE INDEX "_posts_v_blocks_carousel_slides_locales_locale_parent_id_uni" ON "_posts_v_blocks_carousel_slides_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_carousel_order_idx" ON "_posts_v_blocks_carousel" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_carousel_parent_id_idx" ON "_posts_v_blocks_carousel" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_carousel_path_idx" ON "_posts_v_blocks_carousel" USING btree ("_path");
  CREATE INDEX "_posts_v_blocks_people_grid_order_idx" ON "_posts_v_blocks_people_grid" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_people_grid_parent_id_idx" ON "_posts_v_blocks_people_grid" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_people_grid_path_idx" ON "_posts_v_blocks_people_grid" USING btree ("_path");
  CREATE INDEX "_posts_v_blocks_people_grid_hub_idx" ON "_posts_v_blocks_people_grid" USING btree ("hub_id");
  CREATE UNIQUE INDEX "_posts_v_blocks_people_grid_locales_locale_parent_id_unique" ON "_posts_v_blocks_people_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_creed_order_idx" ON "_posts_v_blocks_creed" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_creed_parent_id_idx" ON "_posts_v_blocks_creed" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_creed_path_idx" ON "_posts_v_blocks_creed" USING btree ("_path");
  CREATE INDEX "_posts_v_blocks_creed_background_idx" ON "_posts_v_blocks_creed" USING btree ("background_id");
  CREATE UNIQUE INDEX "_posts_v_blocks_creed_locales_locale_parent_id_unique" ON "_posts_v_blocks_creed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_section_intro_order_idx" ON "_posts_v_blocks_section_intro" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_section_intro_parent_id_idx" ON "_posts_v_blocks_section_intro" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_section_intro_path_idx" ON "_posts_v_blocks_section_intro" USING btree ("_path");
  CREATE UNIQUE INDEX "_posts_v_blocks_section_intro_locales_locale_parent_id_uniqu" ON "_posts_v_blocks_section_intro_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_data_table_filters_order_idx" ON "_posts_v_blocks_data_table_filters" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_data_table_filters_parent_id_idx" ON "_posts_v_blocks_data_table_filters" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_posts_v_blocks_data_table_filters_locales_locale_parent_id_" ON "_posts_v_blocks_data_table_filters_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_data_table_columns_order_idx" ON "_posts_v_blocks_data_table_columns" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_data_table_columns_parent_id_idx" ON "_posts_v_blocks_data_table_columns" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_posts_v_blocks_data_table_columns_locales_locale_parent_id_" ON "_posts_v_blocks_data_table_columns_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_data_table_rows_cells_order_idx" ON "_posts_v_blocks_data_table_rows_cells" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_data_table_rows_cells_parent_id_idx" ON "_posts_v_blocks_data_table_rows_cells" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_posts_v_blocks_data_table_rows_cells_locales_locale_parent_" ON "_posts_v_blocks_data_table_rows_cells_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_data_table_rows_order_idx" ON "_posts_v_blocks_data_table_rows" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_data_table_rows_parent_id_idx" ON "_posts_v_blocks_data_table_rows" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_data_table_order_idx" ON "_posts_v_blocks_data_table" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_data_table_parent_id_idx" ON "_posts_v_blocks_data_table" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_data_table_path_idx" ON "_posts_v_blocks_data_table" USING btree ("_path");
  CREATE UNIQUE INDEX "_posts_v_blocks_data_table_locales_locale_parent_id_unique" ON "_posts_v_blocks_data_table_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_media_card_order_idx" ON "_posts_v_blocks_media_card" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_media_card_parent_id_idx" ON "_posts_v_blocks_media_card" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_media_card_path_idx" ON "_posts_v_blocks_media_card" USING btree ("_path");
  CREATE INDEX "_posts_v_blocks_media_card_image_idx" ON "_posts_v_blocks_media_card" USING btree ("image_id");
  CREATE UNIQUE INDEX "_posts_v_blocks_media_card_locales_locale_parent_id_unique" ON "_posts_v_blocks_media_card_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_department_grid_order_idx" ON "_posts_v_blocks_department_grid" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_department_grid_parent_id_idx" ON "_posts_v_blocks_department_grid" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_department_grid_path_idx" ON "_posts_v_blocks_department_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "_posts_v_blocks_department_grid_locales_locale_parent_id_uni" ON "_posts_v_blocks_department_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_contact_box_order_idx" ON "_posts_v_blocks_contact_box" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_contact_box_parent_id_idx" ON "_posts_v_blocks_contact_box" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_contact_box_path_idx" ON "_posts_v_blocks_contact_box" USING btree ("_path");
  CREATE UNIQUE INDEX "_posts_v_blocks_contact_box_locales_locale_parent_id_unique" ON "_posts_v_blocks_contact_box_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_contact_form_details_items_order_idx" ON "_posts_v_blocks_contact_form_details_items" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_contact_form_details_items_parent_id_idx" ON "_posts_v_blocks_contact_form_details_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_posts_v_blocks_contact_form_details_items_locales_locale_pa" ON "_posts_v_blocks_contact_form_details_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_contact_form_details_order_idx" ON "_posts_v_blocks_contact_form_details" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_contact_form_details_parent_id_idx" ON "_posts_v_blocks_contact_form_details" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_posts_v_blocks_contact_form_details_locales_locale_parent_i" ON "_posts_v_blocks_contact_form_details_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_contact_form_order_idx" ON "_posts_v_blocks_contact_form" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_contact_form_parent_id_idx" ON "_posts_v_blocks_contact_form" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_contact_form_path_idx" ON "_posts_v_blocks_contact_form" USING btree ("_path");
  CREATE UNIQUE INDEX "_posts_v_blocks_contact_form_locales_locale_parent_id_unique" ON "_posts_v_blocks_contact_form_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_process_steps_items_order_idx" ON "_posts_v_blocks_process_steps_items" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_process_steps_items_parent_id_idx" ON "_posts_v_blocks_process_steps_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_posts_v_blocks_process_steps_items_locales_locale_parent_id" ON "_posts_v_blocks_process_steps_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_process_steps_order_idx" ON "_posts_v_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_process_steps_parent_id_idx" ON "_posts_v_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_process_steps_path_idx" ON "_posts_v_blocks_process_steps" USING btree ("_path");
  CREATE UNIQUE INDEX "_posts_v_blocks_process_steps_locales_locale_parent_id_uniqu" ON "_posts_v_blocks_process_steps_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_figure_order_idx" ON "_posts_v_blocks_figure" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_figure_parent_id_idx" ON "_posts_v_blocks_figure" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_figure_path_idx" ON "_posts_v_blocks_figure" USING btree ("_path");
  CREATE INDEX "_posts_v_blocks_figure_image_idx" ON "_posts_v_blocks_figure" USING btree ("image_id");
  CREATE UNIQUE INDEX "_posts_v_blocks_figure_locales_locale_parent_id_unique" ON "_posts_v_blocks_figure_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_region_map_regions_order_idx" ON "_posts_v_blocks_region_map_regions" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_region_map_regions_parent_id_idx" ON "_posts_v_blocks_region_map_regions" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_posts_v_blocks_region_map_regions_locales_locale_parent_id_" ON "_posts_v_blocks_region_map_regions_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_blocks_region_map_order_idx" ON "_posts_v_blocks_region_map" USING btree ("_order");
  CREATE INDEX "_posts_v_blocks_region_map_parent_id_idx" ON "_posts_v_blocks_region_map" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_blocks_region_map_path_idx" ON "_posts_v_blocks_region_map" USING btree ("_path");
  CREATE UNIQUE INDEX "_posts_v_blocks_region_map_locales_locale_parent_id_unique" ON "_posts_v_blocks_region_map_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_parent_idx" ON "_posts_v" USING btree ("parent_id");
  CREATE INDEX "_posts_v_version_version_slug_idx" ON "_posts_v" USING btree ("version_slug");
  CREATE INDEX "_posts_v_version_version_cover_idx" ON "_posts_v" USING btree ("version_cover_id");
  CREATE INDEX "_posts_v_version_version_updated_at_idx" ON "_posts_v" USING btree ("version_updated_at");
  CREATE INDEX "_posts_v_version_version_created_at_idx" ON "_posts_v" USING btree ("version_created_at");
  CREATE INDEX "_posts_v_version_version__status_idx" ON "_posts_v" USING btree ("version__status");
  CREATE INDEX "_posts_v_created_at_idx" ON "_posts_v" USING btree ("created_at");
  CREATE INDEX "_posts_v_updated_at_idx" ON "_posts_v" USING btree ("updated_at");
  CREATE INDEX "_posts_v_snapshot_idx" ON "_posts_v" USING btree ("snapshot");
  CREATE INDEX "_posts_v_published_locale_idx" ON "_posts_v" USING btree ("published_locale");
  CREATE INDEX "_posts_v_latest_idx" ON "_posts_v" USING btree ("latest");
  CREATE UNIQUE INDEX "_posts_v_locales_locale_parent_id_unique" ON "_posts_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_rels_order_idx" ON "_posts_v_rels" USING btree ("order");
  CREATE INDEX "_posts_v_rels_parent_idx" ON "_posts_v_rels" USING btree ("parent_id");
  CREATE INDEX "_posts_v_rels_path_idx" ON "_posts_v_rels" USING btree ("path");
  CREATE INDEX "_posts_v_rels_pages_id_idx" ON "_posts_v_rels" USING btree ("pages_id");
  CREATE INDEX "_posts_v_rels_posts_id_idx" ON "_posts_v_rels" USING btree ("posts_id");
  CREATE INDEX "_posts_v_rels_departments_id_idx" ON "_posts_v_rels" USING btree ("departments_id");
  CREATE INDEX "_posts_v_rels_hubs_id_idx" ON "_posts_v_rels" USING btree ("hubs_id");
  CREATE INDEX "_posts_v_rels_membership_tiers_id_idx" ON "_posts_v_rels" USING btree ("membership_tiers_id");
  CREATE INDEX "_posts_v_rels_board_members_id_idx" ON "_posts_v_rels" USING btree ("board_members_id");
  CREATE INDEX "departments_blocks_page_banner_links_order_idx" ON "departments_blocks_page_banner_links" USING btree ("_order");
  CREATE INDEX "departments_blocks_page_banner_links_parent_id_idx" ON "departments_blocks_page_banner_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "departments_blocks_page_banner_links_locales_locale_parent_i" ON "departments_blocks_page_banner_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_page_banner_order_idx" ON "departments_blocks_page_banner" USING btree ("_order");
  CREATE INDEX "departments_blocks_page_banner_parent_id_idx" ON "departments_blocks_page_banner" USING btree ("_parent_id");
  CREATE INDEX "departments_blocks_page_banner_path_idx" ON "departments_blocks_page_banner" USING btree ("_path");
  CREATE INDEX "departments_blocks_page_banner_background_idx" ON "departments_blocks_page_banner" USING btree ("background_id");
  CREATE INDEX "departments_blocks_page_banner_watermark_idx" ON "departments_blocks_page_banner" USING btree ("watermark_id");
  CREATE UNIQUE INDEX "departments_blocks_page_banner_locales_locale_parent_id_uniq" ON "departments_blocks_page_banner_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_section_tabs_items_order_idx" ON "departments_blocks_section_tabs_items" USING btree ("_order");
  CREATE INDEX "departments_blocks_section_tabs_items_parent_id_idx" ON "departments_blocks_section_tabs_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "departments_blocks_section_tabs_items_locales_locale_parent_" ON "departments_blocks_section_tabs_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_section_tabs_order_idx" ON "departments_blocks_section_tabs" USING btree ("_order");
  CREATE INDEX "departments_blocks_section_tabs_parent_id_idx" ON "departments_blocks_section_tabs" USING btree ("_parent_id");
  CREATE INDEX "departments_blocks_section_tabs_path_idx" ON "departments_blocks_section_tabs" USING btree ("_path");
  CREATE INDEX "departments_blocks_rich_text_order_idx" ON "departments_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "departments_blocks_rich_text_parent_id_idx" ON "departments_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "departments_blocks_rich_text_path_idx" ON "departments_blocks_rich_text" USING btree ("_path");
  CREATE UNIQUE INDEX "departments_blocks_rich_text_locales_locale_parent_id_unique" ON "departments_blocks_rich_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_card_grid_items_order_idx" ON "departments_blocks_card_grid_items" USING btree ("_order");
  CREATE INDEX "departments_blocks_card_grid_items_parent_id_idx" ON "departments_blocks_card_grid_items" USING btree ("_parent_id");
  CREATE INDEX "departments_blocks_card_grid_items_icon_idx" ON "departments_blocks_card_grid_items" USING btree ("icon_id");
  CREATE UNIQUE INDEX "departments_blocks_card_grid_items_locales_locale_parent_id_" ON "departments_blocks_card_grid_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_card_grid_order_idx" ON "departments_blocks_card_grid" USING btree ("_order");
  CREATE INDEX "departments_blocks_card_grid_parent_id_idx" ON "departments_blocks_card_grid" USING btree ("_parent_id");
  CREATE INDEX "departments_blocks_card_grid_path_idx" ON "departments_blocks_card_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "departments_blocks_card_grid_locales_locale_parent_id_unique" ON "departments_blocks_card_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_quote_banner_order_idx" ON "departments_blocks_quote_banner" USING btree ("_order");
  CREATE INDEX "departments_blocks_quote_banner_parent_id_idx" ON "departments_blocks_quote_banner" USING btree ("_parent_id");
  CREATE INDEX "departments_blocks_quote_banner_path_idx" ON "departments_blocks_quote_banner" USING btree ("_path");
  CREATE INDEX "departments_blocks_quote_banner_background_idx" ON "departments_blocks_quote_banner" USING btree ("background_id");
  CREATE INDEX "departments_blocks_quote_banner_watermark_idx" ON "departments_blocks_quote_banner" USING btree ("watermark_id");
  CREATE UNIQUE INDEX "departments_blocks_quote_banner_locales_locale_parent_id_uni" ON "departments_blocks_quote_banner_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_accelerators_items_order_idx" ON "departments_blocks_accelerators_items" USING btree ("_order");
  CREATE INDEX "departments_blocks_accelerators_items_parent_id_idx" ON "departments_blocks_accelerators_items" USING btree ("_parent_id");
  CREATE INDEX "departments_blocks_accelerators_items_image_idx" ON "departments_blocks_accelerators_items" USING btree ("image_id");
  CREATE UNIQUE INDEX "departments_blocks_accelerators_items_locales_locale_parent_" ON "departments_blocks_accelerators_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_accelerators_order_idx" ON "departments_blocks_accelerators" USING btree ("_order");
  CREATE INDEX "departments_blocks_accelerators_parent_id_idx" ON "departments_blocks_accelerators" USING btree ("_parent_id");
  CREATE INDEX "departments_blocks_accelerators_path_idx" ON "departments_blocks_accelerators" USING btree ("_path");
  CREATE UNIQUE INDEX "departments_blocks_accelerators_locales_locale_parent_id_uni" ON "departments_blocks_accelerators_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_posts_feed_filter_items_order_idx" ON "departments_blocks_posts_feed_filter_items" USING btree ("_order");
  CREATE INDEX "departments_blocks_posts_feed_filter_items_parent_id_idx" ON "departments_blocks_posts_feed_filter_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "departments_blocks_posts_feed_filter_items_locales_locale_pa" ON "departments_blocks_posts_feed_filter_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_posts_feed_order_idx" ON "departments_blocks_posts_feed" USING btree ("_order");
  CREATE INDEX "departments_blocks_posts_feed_parent_id_idx" ON "departments_blocks_posts_feed" USING btree ("_parent_id");
  CREATE INDEX "departments_blocks_posts_feed_path_idx" ON "departments_blocks_posts_feed" USING btree ("_path");
  CREATE UNIQUE INDEX "departments_blocks_posts_feed_locales_locale_parent_id_uniqu" ON "departments_blocks_posts_feed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_gallery_items_order_idx" ON "departments_blocks_gallery_items" USING btree ("_order");
  CREATE INDEX "departments_blocks_gallery_items_parent_id_idx" ON "departments_blocks_gallery_items" USING btree ("_parent_id");
  CREATE INDEX "departments_blocks_gallery_items_image_idx" ON "departments_blocks_gallery_items" USING btree ("image_id");
  CREATE UNIQUE INDEX "departments_blocks_gallery_items_locales_locale_parent_id_un" ON "departments_blocks_gallery_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_gallery_order_idx" ON "departments_blocks_gallery" USING btree ("_order");
  CREATE INDEX "departments_blocks_gallery_parent_id_idx" ON "departments_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "departments_blocks_gallery_path_idx" ON "departments_blocks_gallery" USING btree ("_path");
  CREATE INDEX "departments_blocks_values_list_items_order_idx" ON "departments_blocks_values_list_items" USING btree ("_order");
  CREATE INDEX "departments_blocks_values_list_items_parent_id_idx" ON "departments_blocks_values_list_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "departments_blocks_values_list_items_locales_locale_parent_i" ON "departments_blocks_values_list_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_values_list_order_idx" ON "departments_blocks_values_list" USING btree ("_order");
  CREATE INDEX "departments_blocks_values_list_parent_id_idx" ON "departments_blocks_values_list" USING btree ("_parent_id");
  CREATE INDEX "departments_blocks_values_list_path_idx" ON "departments_blocks_values_list" USING btree ("_path");
  CREATE UNIQUE INDEX "departments_blocks_values_list_locales_locale_parent_id_uniq" ON "departments_blocks_values_list_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_history_grid_paragraphs_order_idx" ON "departments_blocks_history_grid_paragraphs" USING btree ("_order");
  CREATE INDEX "departments_blocks_history_grid_paragraphs_parent_id_idx" ON "departments_blocks_history_grid_paragraphs" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "departments_blocks_history_grid_paragraphs_locales_locale_pa" ON "departments_blocks_history_grid_paragraphs_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_history_grid_order_idx" ON "departments_blocks_history_grid" USING btree ("_order");
  CREATE INDEX "departments_blocks_history_grid_parent_id_idx" ON "departments_blocks_history_grid" USING btree ("_parent_id");
  CREATE INDEX "departments_blocks_history_grid_path_idx" ON "departments_blocks_history_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "departments_blocks_history_grid_locales_locale_parent_id_uni" ON "departments_blocks_history_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_stats_row_items_order_idx" ON "departments_blocks_stats_row_items" USING btree ("_order");
  CREATE INDEX "departments_blocks_stats_row_items_parent_id_idx" ON "departments_blocks_stats_row_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "departments_blocks_stats_row_items_locales_locale_parent_id_" ON "departments_blocks_stats_row_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_stats_row_order_idx" ON "departments_blocks_stats_row" USING btree ("_order");
  CREATE INDEX "departments_blocks_stats_row_parent_id_idx" ON "departments_blocks_stats_row" USING btree ("_parent_id");
  CREATE INDEX "departments_blocks_stats_row_path_idx" ON "departments_blocks_stats_row" USING btree ("_path");
  CREATE INDEX "departments_blocks_highlighted_text_order_idx" ON "departments_blocks_highlighted_text" USING btree ("_order");
  CREATE INDEX "departments_blocks_highlighted_text_parent_id_idx" ON "departments_blocks_highlighted_text" USING btree ("_parent_id");
  CREATE INDEX "departments_blocks_highlighted_text_path_idx" ON "departments_blocks_highlighted_text" USING btree ("_path");
  CREATE UNIQUE INDEX "departments_blocks_highlighted_text_locales_locale_parent_id" ON "departments_blocks_highlighted_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_timeline_items_lines_order_idx" ON "departments_blocks_timeline_items_lines" USING btree ("_order");
  CREATE INDEX "departments_blocks_timeline_items_lines_parent_id_idx" ON "departments_blocks_timeline_items_lines" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "departments_blocks_timeline_items_lines_locales_locale_paren" ON "departments_blocks_timeline_items_lines_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_timeline_items_order_idx" ON "departments_blocks_timeline_items" USING btree ("_order");
  CREATE INDEX "departments_blocks_timeline_items_parent_id_idx" ON "departments_blocks_timeline_items" USING btree ("_parent_id");
  CREATE INDEX "departments_blocks_timeline_order_idx" ON "departments_blocks_timeline" USING btree ("_order");
  CREATE INDEX "departments_blocks_timeline_parent_id_idx" ON "departments_blocks_timeline" USING btree ("_parent_id");
  CREATE INDEX "departments_blocks_timeline_path_idx" ON "departments_blocks_timeline" USING btree ("_path");
  CREATE UNIQUE INDEX "departments_blocks_timeline_locales_locale_parent_id_unique" ON "departments_blocks_timeline_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_carousel_slides_order_idx" ON "departments_blocks_carousel_slides" USING btree ("_order");
  CREATE INDEX "departments_blocks_carousel_slides_parent_id_idx" ON "departments_blocks_carousel_slides" USING btree ("_parent_id");
  CREATE INDEX "departments_blocks_carousel_slides_image_idx" ON "departments_blocks_carousel_slides" USING btree ("image_id");
  CREATE UNIQUE INDEX "departments_blocks_carousel_slides_locales_locale_parent_id_" ON "departments_blocks_carousel_slides_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_carousel_order_idx" ON "departments_blocks_carousel" USING btree ("_order");
  CREATE INDEX "departments_blocks_carousel_parent_id_idx" ON "departments_blocks_carousel" USING btree ("_parent_id");
  CREATE INDEX "departments_blocks_carousel_path_idx" ON "departments_blocks_carousel" USING btree ("_path");
  CREATE INDEX "departments_blocks_people_grid_order_idx" ON "departments_blocks_people_grid" USING btree ("_order");
  CREATE INDEX "departments_blocks_people_grid_parent_id_idx" ON "departments_blocks_people_grid" USING btree ("_parent_id");
  CREATE INDEX "departments_blocks_people_grid_path_idx" ON "departments_blocks_people_grid" USING btree ("_path");
  CREATE INDEX "departments_blocks_people_grid_hub_idx" ON "departments_blocks_people_grid" USING btree ("hub_id");
  CREATE UNIQUE INDEX "departments_blocks_people_grid_locales_locale_parent_id_uniq" ON "departments_blocks_people_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_creed_order_idx" ON "departments_blocks_creed" USING btree ("_order");
  CREATE INDEX "departments_blocks_creed_parent_id_idx" ON "departments_blocks_creed" USING btree ("_parent_id");
  CREATE INDEX "departments_blocks_creed_path_idx" ON "departments_blocks_creed" USING btree ("_path");
  CREATE INDEX "departments_blocks_creed_background_idx" ON "departments_blocks_creed" USING btree ("background_id");
  CREATE UNIQUE INDEX "departments_blocks_creed_locales_locale_parent_id_unique" ON "departments_blocks_creed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_section_intro_order_idx" ON "departments_blocks_section_intro" USING btree ("_order");
  CREATE INDEX "departments_blocks_section_intro_parent_id_idx" ON "departments_blocks_section_intro" USING btree ("_parent_id");
  CREATE INDEX "departments_blocks_section_intro_path_idx" ON "departments_blocks_section_intro" USING btree ("_path");
  CREATE UNIQUE INDEX "departments_blocks_section_intro_locales_locale_parent_id_un" ON "departments_blocks_section_intro_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_data_table_filters_order_idx" ON "departments_blocks_data_table_filters" USING btree ("_order");
  CREATE INDEX "departments_blocks_data_table_filters_parent_id_idx" ON "departments_blocks_data_table_filters" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "departments_blocks_data_table_filters_locales_locale_parent_" ON "departments_blocks_data_table_filters_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_data_table_columns_order_idx" ON "departments_blocks_data_table_columns" USING btree ("_order");
  CREATE INDEX "departments_blocks_data_table_columns_parent_id_idx" ON "departments_blocks_data_table_columns" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "departments_blocks_data_table_columns_locales_locale_parent_" ON "departments_blocks_data_table_columns_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_data_table_rows_cells_order_idx" ON "departments_blocks_data_table_rows_cells" USING btree ("_order");
  CREATE INDEX "departments_blocks_data_table_rows_cells_parent_id_idx" ON "departments_blocks_data_table_rows_cells" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "departments_blocks_data_table_rows_cells_locales_locale_pare" ON "departments_blocks_data_table_rows_cells_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_data_table_rows_order_idx" ON "departments_blocks_data_table_rows" USING btree ("_order");
  CREATE INDEX "departments_blocks_data_table_rows_parent_id_idx" ON "departments_blocks_data_table_rows" USING btree ("_parent_id");
  CREATE INDEX "departments_blocks_data_table_order_idx" ON "departments_blocks_data_table" USING btree ("_order");
  CREATE INDEX "departments_blocks_data_table_parent_id_idx" ON "departments_blocks_data_table" USING btree ("_parent_id");
  CREATE INDEX "departments_blocks_data_table_path_idx" ON "departments_blocks_data_table" USING btree ("_path");
  CREATE UNIQUE INDEX "departments_blocks_data_table_locales_locale_parent_id_uniqu" ON "departments_blocks_data_table_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_media_card_order_idx" ON "departments_blocks_media_card" USING btree ("_order");
  CREATE INDEX "departments_blocks_media_card_parent_id_idx" ON "departments_blocks_media_card" USING btree ("_parent_id");
  CREATE INDEX "departments_blocks_media_card_path_idx" ON "departments_blocks_media_card" USING btree ("_path");
  CREATE INDEX "departments_blocks_media_card_image_idx" ON "departments_blocks_media_card" USING btree ("image_id");
  CREATE UNIQUE INDEX "departments_blocks_media_card_locales_locale_parent_id_uniqu" ON "departments_blocks_media_card_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_department_grid_order_idx" ON "departments_blocks_department_grid" USING btree ("_order");
  CREATE INDEX "departments_blocks_department_grid_parent_id_idx" ON "departments_blocks_department_grid" USING btree ("_parent_id");
  CREATE INDEX "departments_blocks_department_grid_path_idx" ON "departments_blocks_department_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "departments_blocks_department_grid_locales_locale_parent_id_" ON "departments_blocks_department_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_contact_box_order_idx" ON "departments_blocks_contact_box" USING btree ("_order");
  CREATE INDEX "departments_blocks_contact_box_parent_id_idx" ON "departments_blocks_contact_box" USING btree ("_parent_id");
  CREATE INDEX "departments_blocks_contact_box_path_idx" ON "departments_blocks_contact_box" USING btree ("_path");
  CREATE UNIQUE INDEX "departments_blocks_contact_box_locales_locale_parent_id_uniq" ON "departments_blocks_contact_box_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_contact_form_details_items_order_idx" ON "departments_blocks_contact_form_details_items" USING btree ("_order");
  CREATE INDEX "departments_blocks_contact_form_details_items_parent_id_idx" ON "departments_blocks_contact_form_details_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "departments_blocks_contact_form_details_items_locales_locale" ON "departments_blocks_contact_form_details_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_contact_form_details_order_idx" ON "departments_blocks_contact_form_details" USING btree ("_order");
  CREATE INDEX "departments_blocks_contact_form_details_parent_id_idx" ON "departments_blocks_contact_form_details" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "departments_blocks_contact_form_details_locales_locale_paren" ON "departments_blocks_contact_form_details_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_contact_form_order_idx" ON "departments_blocks_contact_form" USING btree ("_order");
  CREATE INDEX "departments_blocks_contact_form_parent_id_idx" ON "departments_blocks_contact_form" USING btree ("_parent_id");
  CREATE INDEX "departments_blocks_contact_form_path_idx" ON "departments_blocks_contact_form" USING btree ("_path");
  CREATE UNIQUE INDEX "departments_blocks_contact_form_locales_locale_parent_id_uni" ON "departments_blocks_contact_form_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_process_steps_items_order_idx" ON "departments_blocks_process_steps_items" USING btree ("_order");
  CREATE INDEX "departments_blocks_process_steps_items_parent_id_idx" ON "departments_blocks_process_steps_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "departments_blocks_process_steps_items_locales_locale_parent" ON "departments_blocks_process_steps_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_process_steps_order_idx" ON "departments_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "departments_blocks_process_steps_parent_id_idx" ON "departments_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "departments_blocks_process_steps_path_idx" ON "departments_blocks_process_steps" USING btree ("_path");
  CREATE UNIQUE INDEX "departments_blocks_process_steps_locales_locale_parent_id_un" ON "departments_blocks_process_steps_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_figure_order_idx" ON "departments_blocks_figure" USING btree ("_order");
  CREATE INDEX "departments_blocks_figure_parent_id_idx" ON "departments_blocks_figure" USING btree ("_parent_id");
  CREATE INDEX "departments_blocks_figure_path_idx" ON "departments_blocks_figure" USING btree ("_path");
  CREATE INDEX "departments_blocks_figure_image_idx" ON "departments_blocks_figure" USING btree ("image_id");
  CREATE UNIQUE INDEX "departments_blocks_figure_locales_locale_parent_id_unique" ON "departments_blocks_figure_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_region_map_regions_order_idx" ON "departments_blocks_region_map_regions" USING btree ("_order");
  CREATE INDEX "departments_blocks_region_map_regions_parent_id_idx" ON "departments_blocks_region_map_regions" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "departments_blocks_region_map_regions_locales_locale_parent_" ON "departments_blocks_region_map_regions_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_blocks_region_map_order_idx" ON "departments_blocks_region_map" USING btree ("_order");
  CREATE INDEX "departments_blocks_region_map_parent_id_idx" ON "departments_blocks_region_map" USING btree ("_parent_id");
  CREATE INDEX "departments_blocks_region_map_path_idx" ON "departments_blocks_region_map" USING btree ("_path");
  CREATE UNIQUE INDEX "departments_blocks_region_map_locales_locale_parent_id_uniqu" ON "departments_blocks_region_map_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "departments_slug_idx" ON "departments" USING btree ("slug");
  CREATE INDEX "departments_image_idx" ON "departments" USING btree ("image_id");
  CREATE INDEX "departments_updated_at_idx" ON "departments" USING btree ("updated_at");
  CREATE INDEX "departments_created_at_idx" ON "departments" USING btree ("created_at");
  CREATE INDEX "departments__status_idx" ON "departments" USING btree ("_status");
  CREATE UNIQUE INDEX "departments_locales_locale_parent_id_unique" ON "departments_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "departments_rels_order_idx" ON "departments_rels" USING btree ("order");
  CREATE INDEX "departments_rels_parent_idx" ON "departments_rels" USING btree ("parent_id");
  CREATE INDEX "departments_rels_path_idx" ON "departments_rels" USING btree ("path");
  CREATE INDEX "departments_rels_pages_id_idx" ON "departments_rels" USING btree ("pages_id");
  CREATE INDEX "departments_rels_posts_id_idx" ON "departments_rels" USING btree ("posts_id");
  CREATE INDEX "departments_rels_departments_id_idx" ON "departments_rels" USING btree ("departments_id");
  CREATE INDEX "departments_rels_hubs_id_idx" ON "departments_rels" USING btree ("hubs_id");
  CREATE INDEX "departments_rels_membership_tiers_id_idx" ON "departments_rels" USING btree ("membership_tiers_id");
  CREATE INDEX "departments_rels_board_members_id_idx" ON "departments_rels" USING btree ("board_members_id");
  CREATE INDEX "_departments_v_blocks_page_banner_links_order_idx" ON "_departments_v_blocks_page_banner_links" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_page_banner_links_parent_id_idx" ON "_departments_v_blocks_page_banner_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_departments_v_blocks_page_banner_links_locales_locale_paren" ON "_departments_v_blocks_page_banner_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_page_banner_order_idx" ON "_departments_v_blocks_page_banner" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_page_banner_parent_id_idx" ON "_departments_v_blocks_page_banner" USING btree ("_parent_id");
  CREATE INDEX "_departments_v_blocks_page_banner_path_idx" ON "_departments_v_blocks_page_banner" USING btree ("_path");
  CREATE INDEX "_departments_v_blocks_page_banner_background_idx" ON "_departments_v_blocks_page_banner" USING btree ("background_id");
  CREATE INDEX "_departments_v_blocks_page_banner_watermark_idx" ON "_departments_v_blocks_page_banner" USING btree ("watermark_id");
  CREATE UNIQUE INDEX "_departments_v_blocks_page_banner_locales_locale_parent_id_u" ON "_departments_v_blocks_page_banner_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_section_tabs_items_order_idx" ON "_departments_v_blocks_section_tabs_items" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_section_tabs_items_parent_id_idx" ON "_departments_v_blocks_section_tabs_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_departments_v_blocks_section_tabs_items_locales_locale_pare" ON "_departments_v_blocks_section_tabs_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_section_tabs_order_idx" ON "_departments_v_blocks_section_tabs" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_section_tabs_parent_id_idx" ON "_departments_v_blocks_section_tabs" USING btree ("_parent_id");
  CREATE INDEX "_departments_v_blocks_section_tabs_path_idx" ON "_departments_v_blocks_section_tabs" USING btree ("_path");
  CREATE INDEX "_departments_v_blocks_rich_text_order_idx" ON "_departments_v_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_rich_text_parent_id_idx" ON "_departments_v_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "_departments_v_blocks_rich_text_path_idx" ON "_departments_v_blocks_rich_text" USING btree ("_path");
  CREATE UNIQUE INDEX "_departments_v_blocks_rich_text_locales_locale_parent_id_uni" ON "_departments_v_blocks_rich_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_card_grid_items_order_idx" ON "_departments_v_blocks_card_grid_items" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_card_grid_items_parent_id_idx" ON "_departments_v_blocks_card_grid_items" USING btree ("_parent_id");
  CREATE INDEX "_departments_v_blocks_card_grid_items_icon_idx" ON "_departments_v_blocks_card_grid_items" USING btree ("icon_id");
  CREATE UNIQUE INDEX "_departments_v_blocks_card_grid_items_locales_locale_parent_" ON "_departments_v_blocks_card_grid_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_card_grid_order_idx" ON "_departments_v_blocks_card_grid" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_card_grid_parent_id_idx" ON "_departments_v_blocks_card_grid" USING btree ("_parent_id");
  CREATE INDEX "_departments_v_blocks_card_grid_path_idx" ON "_departments_v_blocks_card_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "_departments_v_blocks_card_grid_locales_locale_parent_id_uni" ON "_departments_v_blocks_card_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_quote_banner_order_idx" ON "_departments_v_blocks_quote_banner" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_quote_banner_parent_id_idx" ON "_departments_v_blocks_quote_banner" USING btree ("_parent_id");
  CREATE INDEX "_departments_v_blocks_quote_banner_path_idx" ON "_departments_v_blocks_quote_banner" USING btree ("_path");
  CREATE INDEX "_departments_v_blocks_quote_banner_background_idx" ON "_departments_v_blocks_quote_banner" USING btree ("background_id");
  CREATE INDEX "_departments_v_blocks_quote_banner_watermark_idx" ON "_departments_v_blocks_quote_banner" USING btree ("watermark_id");
  CREATE UNIQUE INDEX "_departments_v_blocks_quote_banner_locales_locale_parent_id_" ON "_departments_v_blocks_quote_banner_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_accelerators_items_order_idx" ON "_departments_v_blocks_accelerators_items" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_accelerators_items_parent_id_idx" ON "_departments_v_blocks_accelerators_items" USING btree ("_parent_id");
  CREATE INDEX "_departments_v_blocks_accelerators_items_image_idx" ON "_departments_v_blocks_accelerators_items" USING btree ("image_id");
  CREATE UNIQUE INDEX "_departments_v_blocks_accelerators_items_locales_locale_pare" ON "_departments_v_blocks_accelerators_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_accelerators_order_idx" ON "_departments_v_blocks_accelerators" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_accelerators_parent_id_idx" ON "_departments_v_blocks_accelerators" USING btree ("_parent_id");
  CREATE INDEX "_departments_v_blocks_accelerators_path_idx" ON "_departments_v_blocks_accelerators" USING btree ("_path");
  CREATE UNIQUE INDEX "_departments_v_blocks_accelerators_locales_locale_parent_id_" ON "_departments_v_blocks_accelerators_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_posts_feed_filter_items_order_idx" ON "_departments_v_blocks_posts_feed_filter_items" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_posts_feed_filter_items_parent_id_idx" ON "_departments_v_blocks_posts_feed_filter_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_departments_v_blocks_posts_feed_filter_items_locales_locale" ON "_departments_v_blocks_posts_feed_filter_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_posts_feed_order_idx" ON "_departments_v_blocks_posts_feed" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_posts_feed_parent_id_idx" ON "_departments_v_blocks_posts_feed" USING btree ("_parent_id");
  CREATE INDEX "_departments_v_blocks_posts_feed_path_idx" ON "_departments_v_blocks_posts_feed" USING btree ("_path");
  CREATE UNIQUE INDEX "_departments_v_blocks_posts_feed_locales_locale_parent_id_un" ON "_departments_v_blocks_posts_feed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_gallery_items_order_idx" ON "_departments_v_blocks_gallery_items" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_gallery_items_parent_id_idx" ON "_departments_v_blocks_gallery_items" USING btree ("_parent_id");
  CREATE INDEX "_departments_v_blocks_gallery_items_image_idx" ON "_departments_v_blocks_gallery_items" USING btree ("image_id");
  CREATE UNIQUE INDEX "_departments_v_blocks_gallery_items_locales_locale_parent_id" ON "_departments_v_blocks_gallery_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_gallery_order_idx" ON "_departments_v_blocks_gallery" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_gallery_parent_id_idx" ON "_departments_v_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "_departments_v_blocks_gallery_path_idx" ON "_departments_v_blocks_gallery" USING btree ("_path");
  CREATE INDEX "_departments_v_blocks_values_list_items_order_idx" ON "_departments_v_blocks_values_list_items" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_values_list_items_parent_id_idx" ON "_departments_v_blocks_values_list_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_departments_v_blocks_values_list_items_locales_locale_paren" ON "_departments_v_blocks_values_list_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_values_list_order_idx" ON "_departments_v_blocks_values_list" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_values_list_parent_id_idx" ON "_departments_v_blocks_values_list" USING btree ("_parent_id");
  CREATE INDEX "_departments_v_blocks_values_list_path_idx" ON "_departments_v_blocks_values_list" USING btree ("_path");
  CREATE UNIQUE INDEX "_departments_v_blocks_values_list_locales_locale_parent_id_u" ON "_departments_v_blocks_values_list_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_history_grid_paragraphs_order_idx" ON "_departments_v_blocks_history_grid_paragraphs" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_history_grid_paragraphs_parent_id_idx" ON "_departments_v_blocks_history_grid_paragraphs" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_departments_v_blocks_history_grid_paragraphs_locales_locale" ON "_departments_v_blocks_history_grid_paragraphs_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_history_grid_order_idx" ON "_departments_v_blocks_history_grid" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_history_grid_parent_id_idx" ON "_departments_v_blocks_history_grid" USING btree ("_parent_id");
  CREATE INDEX "_departments_v_blocks_history_grid_path_idx" ON "_departments_v_blocks_history_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "_departments_v_blocks_history_grid_locales_locale_parent_id_" ON "_departments_v_blocks_history_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_stats_row_items_order_idx" ON "_departments_v_blocks_stats_row_items" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_stats_row_items_parent_id_idx" ON "_departments_v_blocks_stats_row_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_departments_v_blocks_stats_row_items_locales_locale_parent_" ON "_departments_v_blocks_stats_row_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_stats_row_order_idx" ON "_departments_v_blocks_stats_row" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_stats_row_parent_id_idx" ON "_departments_v_blocks_stats_row" USING btree ("_parent_id");
  CREATE INDEX "_departments_v_blocks_stats_row_path_idx" ON "_departments_v_blocks_stats_row" USING btree ("_path");
  CREATE INDEX "_departments_v_blocks_highlighted_text_order_idx" ON "_departments_v_blocks_highlighted_text" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_highlighted_text_parent_id_idx" ON "_departments_v_blocks_highlighted_text" USING btree ("_parent_id");
  CREATE INDEX "_departments_v_blocks_highlighted_text_path_idx" ON "_departments_v_blocks_highlighted_text" USING btree ("_path");
  CREATE UNIQUE INDEX "_departments_v_blocks_highlighted_text_locales_locale_parent" ON "_departments_v_blocks_highlighted_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_timeline_items_lines_order_idx" ON "_departments_v_blocks_timeline_items_lines" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_timeline_items_lines_parent_id_idx" ON "_departments_v_blocks_timeline_items_lines" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_departments_v_blocks_timeline_items_lines_locales_locale_pa" ON "_departments_v_blocks_timeline_items_lines_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_timeline_items_order_idx" ON "_departments_v_blocks_timeline_items" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_timeline_items_parent_id_idx" ON "_departments_v_blocks_timeline_items" USING btree ("_parent_id");
  CREATE INDEX "_departments_v_blocks_timeline_order_idx" ON "_departments_v_blocks_timeline" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_timeline_parent_id_idx" ON "_departments_v_blocks_timeline" USING btree ("_parent_id");
  CREATE INDEX "_departments_v_blocks_timeline_path_idx" ON "_departments_v_blocks_timeline" USING btree ("_path");
  CREATE UNIQUE INDEX "_departments_v_blocks_timeline_locales_locale_parent_id_uniq" ON "_departments_v_blocks_timeline_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_carousel_slides_order_idx" ON "_departments_v_blocks_carousel_slides" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_carousel_slides_parent_id_idx" ON "_departments_v_blocks_carousel_slides" USING btree ("_parent_id");
  CREATE INDEX "_departments_v_blocks_carousel_slides_image_idx" ON "_departments_v_blocks_carousel_slides" USING btree ("image_id");
  CREATE UNIQUE INDEX "_departments_v_blocks_carousel_slides_locales_locale_parent_" ON "_departments_v_blocks_carousel_slides_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_carousel_order_idx" ON "_departments_v_blocks_carousel" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_carousel_parent_id_idx" ON "_departments_v_blocks_carousel" USING btree ("_parent_id");
  CREATE INDEX "_departments_v_blocks_carousel_path_idx" ON "_departments_v_blocks_carousel" USING btree ("_path");
  CREATE INDEX "_departments_v_blocks_people_grid_order_idx" ON "_departments_v_blocks_people_grid" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_people_grid_parent_id_idx" ON "_departments_v_blocks_people_grid" USING btree ("_parent_id");
  CREATE INDEX "_departments_v_blocks_people_grid_path_idx" ON "_departments_v_blocks_people_grid" USING btree ("_path");
  CREATE INDEX "_departments_v_blocks_people_grid_hub_idx" ON "_departments_v_blocks_people_grid" USING btree ("hub_id");
  CREATE UNIQUE INDEX "_departments_v_blocks_people_grid_locales_locale_parent_id_u" ON "_departments_v_blocks_people_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_creed_order_idx" ON "_departments_v_blocks_creed" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_creed_parent_id_idx" ON "_departments_v_blocks_creed" USING btree ("_parent_id");
  CREATE INDEX "_departments_v_blocks_creed_path_idx" ON "_departments_v_blocks_creed" USING btree ("_path");
  CREATE INDEX "_departments_v_blocks_creed_background_idx" ON "_departments_v_blocks_creed" USING btree ("background_id");
  CREATE UNIQUE INDEX "_departments_v_blocks_creed_locales_locale_parent_id_unique" ON "_departments_v_blocks_creed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_section_intro_order_idx" ON "_departments_v_blocks_section_intro" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_section_intro_parent_id_idx" ON "_departments_v_blocks_section_intro" USING btree ("_parent_id");
  CREATE INDEX "_departments_v_blocks_section_intro_path_idx" ON "_departments_v_blocks_section_intro" USING btree ("_path");
  CREATE UNIQUE INDEX "_departments_v_blocks_section_intro_locales_locale_parent_id" ON "_departments_v_blocks_section_intro_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_data_table_filters_order_idx" ON "_departments_v_blocks_data_table_filters" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_data_table_filters_parent_id_idx" ON "_departments_v_blocks_data_table_filters" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_departments_v_blocks_data_table_filters_locales_locale_pare" ON "_departments_v_blocks_data_table_filters_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_data_table_columns_order_idx" ON "_departments_v_blocks_data_table_columns" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_data_table_columns_parent_id_idx" ON "_departments_v_blocks_data_table_columns" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_departments_v_blocks_data_table_columns_locales_locale_pare" ON "_departments_v_blocks_data_table_columns_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_data_table_rows_cells_order_idx" ON "_departments_v_blocks_data_table_rows_cells" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_data_table_rows_cells_parent_id_idx" ON "_departments_v_blocks_data_table_rows_cells" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_departments_v_blocks_data_table_rows_cells_locales_locale_p" ON "_departments_v_blocks_data_table_rows_cells_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_data_table_rows_order_idx" ON "_departments_v_blocks_data_table_rows" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_data_table_rows_parent_id_idx" ON "_departments_v_blocks_data_table_rows" USING btree ("_parent_id");
  CREATE INDEX "_departments_v_blocks_data_table_order_idx" ON "_departments_v_blocks_data_table" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_data_table_parent_id_idx" ON "_departments_v_blocks_data_table" USING btree ("_parent_id");
  CREATE INDEX "_departments_v_blocks_data_table_path_idx" ON "_departments_v_blocks_data_table" USING btree ("_path");
  CREATE UNIQUE INDEX "_departments_v_blocks_data_table_locales_locale_parent_id_un" ON "_departments_v_blocks_data_table_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_media_card_order_idx" ON "_departments_v_blocks_media_card" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_media_card_parent_id_idx" ON "_departments_v_blocks_media_card" USING btree ("_parent_id");
  CREATE INDEX "_departments_v_blocks_media_card_path_idx" ON "_departments_v_blocks_media_card" USING btree ("_path");
  CREATE INDEX "_departments_v_blocks_media_card_image_idx" ON "_departments_v_blocks_media_card" USING btree ("image_id");
  CREATE UNIQUE INDEX "_departments_v_blocks_media_card_locales_locale_parent_id_un" ON "_departments_v_blocks_media_card_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_department_grid_order_idx" ON "_departments_v_blocks_department_grid" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_department_grid_parent_id_idx" ON "_departments_v_blocks_department_grid" USING btree ("_parent_id");
  CREATE INDEX "_departments_v_blocks_department_grid_path_idx" ON "_departments_v_blocks_department_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "_departments_v_blocks_department_grid_locales_locale_parent_" ON "_departments_v_blocks_department_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_contact_box_order_idx" ON "_departments_v_blocks_contact_box" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_contact_box_parent_id_idx" ON "_departments_v_blocks_contact_box" USING btree ("_parent_id");
  CREATE INDEX "_departments_v_blocks_contact_box_path_idx" ON "_departments_v_blocks_contact_box" USING btree ("_path");
  CREATE UNIQUE INDEX "_departments_v_blocks_contact_box_locales_locale_parent_id_u" ON "_departments_v_blocks_contact_box_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_contact_form_details_items_order_idx" ON "_departments_v_blocks_contact_form_details_items" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_contact_form_details_items_parent_id_idx" ON "_departments_v_blocks_contact_form_details_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_departments_v_blocks_contact_form_details_items_locales_loc" ON "_departments_v_blocks_contact_form_details_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_contact_form_details_order_idx" ON "_departments_v_blocks_contact_form_details" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_contact_form_details_parent_id_idx" ON "_departments_v_blocks_contact_form_details" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_departments_v_blocks_contact_form_details_locales_locale_pa" ON "_departments_v_blocks_contact_form_details_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_contact_form_order_idx" ON "_departments_v_blocks_contact_form" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_contact_form_parent_id_idx" ON "_departments_v_blocks_contact_form" USING btree ("_parent_id");
  CREATE INDEX "_departments_v_blocks_contact_form_path_idx" ON "_departments_v_blocks_contact_form" USING btree ("_path");
  CREATE UNIQUE INDEX "_departments_v_blocks_contact_form_locales_locale_parent_id_" ON "_departments_v_blocks_contact_form_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_process_steps_items_order_idx" ON "_departments_v_blocks_process_steps_items" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_process_steps_items_parent_id_idx" ON "_departments_v_blocks_process_steps_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_departments_v_blocks_process_steps_items_locales_locale_par" ON "_departments_v_blocks_process_steps_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_process_steps_order_idx" ON "_departments_v_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_process_steps_parent_id_idx" ON "_departments_v_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "_departments_v_blocks_process_steps_path_idx" ON "_departments_v_blocks_process_steps" USING btree ("_path");
  CREATE UNIQUE INDEX "_departments_v_blocks_process_steps_locales_locale_parent_id" ON "_departments_v_blocks_process_steps_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_figure_order_idx" ON "_departments_v_blocks_figure" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_figure_parent_id_idx" ON "_departments_v_blocks_figure" USING btree ("_parent_id");
  CREATE INDEX "_departments_v_blocks_figure_path_idx" ON "_departments_v_blocks_figure" USING btree ("_path");
  CREATE INDEX "_departments_v_blocks_figure_image_idx" ON "_departments_v_blocks_figure" USING btree ("image_id");
  CREATE UNIQUE INDEX "_departments_v_blocks_figure_locales_locale_parent_id_unique" ON "_departments_v_blocks_figure_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_region_map_regions_order_idx" ON "_departments_v_blocks_region_map_regions" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_region_map_regions_parent_id_idx" ON "_departments_v_blocks_region_map_regions" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_departments_v_blocks_region_map_regions_locales_locale_pare" ON "_departments_v_blocks_region_map_regions_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_blocks_region_map_order_idx" ON "_departments_v_blocks_region_map" USING btree ("_order");
  CREATE INDEX "_departments_v_blocks_region_map_parent_id_idx" ON "_departments_v_blocks_region_map" USING btree ("_parent_id");
  CREATE INDEX "_departments_v_blocks_region_map_path_idx" ON "_departments_v_blocks_region_map" USING btree ("_path");
  CREATE UNIQUE INDEX "_departments_v_blocks_region_map_locales_locale_parent_id_un" ON "_departments_v_blocks_region_map_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_parent_idx" ON "_departments_v" USING btree ("parent_id");
  CREATE INDEX "_departments_v_version_version_slug_idx" ON "_departments_v" USING btree ("version_slug");
  CREATE INDEX "_departments_v_version_version_image_idx" ON "_departments_v" USING btree ("version_image_id");
  CREATE INDEX "_departments_v_version_version_updated_at_idx" ON "_departments_v" USING btree ("version_updated_at");
  CREATE INDEX "_departments_v_version_version_created_at_idx" ON "_departments_v" USING btree ("version_created_at");
  CREATE INDEX "_departments_v_version_version__status_idx" ON "_departments_v" USING btree ("version__status");
  CREATE INDEX "_departments_v_created_at_idx" ON "_departments_v" USING btree ("created_at");
  CREATE INDEX "_departments_v_updated_at_idx" ON "_departments_v" USING btree ("updated_at");
  CREATE INDEX "_departments_v_snapshot_idx" ON "_departments_v" USING btree ("snapshot");
  CREATE INDEX "_departments_v_published_locale_idx" ON "_departments_v" USING btree ("published_locale");
  CREATE INDEX "_departments_v_latest_idx" ON "_departments_v" USING btree ("latest");
  CREATE UNIQUE INDEX "_departments_v_locales_locale_parent_id_unique" ON "_departments_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_departments_v_rels_order_idx" ON "_departments_v_rels" USING btree ("order");
  CREATE INDEX "_departments_v_rels_parent_idx" ON "_departments_v_rels" USING btree ("parent_id");
  CREATE INDEX "_departments_v_rels_path_idx" ON "_departments_v_rels" USING btree ("path");
  CREATE INDEX "_departments_v_rels_pages_id_idx" ON "_departments_v_rels" USING btree ("pages_id");
  CREATE INDEX "_departments_v_rels_posts_id_idx" ON "_departments_v_rels" USING btree ("posts_id");
  CREATE INDEX "_departments_v_rels_departments_id_idx" ON "_departments_v_rels" USING btree ("departments_id");
  CREATE INDEX "_departments_v_rels_hubs_id_idx" ON "_departments_v_rels" USING btree ("hubs_id");
  CREATE INDEX "_departments_v_rels_membership_tiers_id_idx" ON "_departments_v_rels" USING btree ("membership_tiers_id");
  CREATE INDEX "_departments_v_rels_board_members_id_idx" ON "_departments_v_rels" USING btree ("board_members_id");
  CREATE INDEX "hubs_blocks_page_banner_links_order_idx" ON "hubs_blocks_page_banner_links" USING btree ("_order");
  CREATE INDEX "hubs_blocks_page_banner_links_parent_id_idx" ON "hubs_blocks_page_banner_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "hubs_blocks_page_banner_links_locales_locale_parent_id_uniqu" ON "hubs_blocks_page_banner_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_page_banner_order_idx" ON "hubs_blocks_page_banner" USING btree ("_order");
  CREATE INDEX "hubs_blocks_page_banner_parent_id_idx" ON "hubs_blocks_page_banner" USING btree ("_parent_id");
  CREATE INDEX "hubs_blocks_page_banner_path_idx" ON "hubs_blocks_page_banner" USING btree ("_path");
  CREATE INDEX "hubs_blocks_page_banner_background_idx" ON "hubs_blocks_page_banner" USING btree ("background_id");
  CREATE INDEX "hubs_blocks_page_banner_watermark_idx" ON "hubs_blocks_page_banner" USING btree ("watermark_id");
  CREATE UNIQUE INDEX "hubs_blocks_page_banner_locales_locale_parent_id_unique" ON "hubs_blocks_page_banner_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_section_tabs_items_order_idx" ON "hubs_blocks_section_tabs_items" USING btree ("_order");
  CREATE INDEX "hubs_blocks_section_tabs_items_parent_id_idx" ON "hubs_blocks_section_tabs_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "hubs_blocks_section_tabs_items_locales_locale_parent_id_uniq" ON "hubs_blocks_section_tabs_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_section_tabs_order_idx" ON "hubs_blocks_section_tabs" USING btree ("_order");
  CREATE INDEX "hubs_blocks_section_tabs_parent_id_idx" ON "hubs_blocks_section_tabs" USING btree ("_parent_id");
  CREATE INDEX "hubs_blocks_section_tabs_path_idx" ON "hubs_blocks_section_tabs" USING btree ("_path");
  CREATE INDEX "hubs_blocks_rich_text_order_idx" ON "hubs_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "hubs_blocks_rich_text_parent_id_idx" ON "hubs_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "hubs_blocks_rich_text_path_idx" ON "hubs_blocks_rich_text" USING btree ("_path");
  CREATE UNIQUE INDEX "hubs_blocks_rich_text_locales_locale_parent_id_unique" ON "hubs_blocks_rich_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_card_grid_items_order_idx" ON "hubs_blocks_card_grid_items" USING btree ("_order");
  CREATE INDEX "hubs_blocks_card_grid_items_parent_id_idx" ON "hubs_blocks_card_grid_items" USING btree ("_parent_id");
  CREATE INDEX "hubs_blocks_card_grid_items_icon_idx" ON "hubs_blocks_card_grid_items" USING btree ("icon_id");
  CREATE UNIQUE INDEX "hubs_blocks_card_grid_items_locales_locale_parent_id_unique" ON "hubs_blocks_card_grid_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_card_grid_order_idx" ON "hubs_blocks_card_grid" USING btree ("_order");
  CREATE INDEX "hubs_blocks_card_grid_parent_id_idx" ON "hubs_blocks_card_grid" USING btree ("_parent_id");
  CREATE INDEX "hubs_blocks_card_grid_path_idx" ON "hubs_blocks_card_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "hubs_blocks_card_grid_locales_locale_parent_id_unique" ON "hubs_blocks_card_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_quote_banner_order_idx" ON "hubs_blocks_quote_banner" USING btree ("_order");
  CREATE INDEX "hubs_blocks_quote_banner_parent_id_idx" ON "hubs_blocks_quote_banner" USING btree ("_parent_id");
  CREATE INDEX "hubs_blocks_quote_banner_path_idx" ON "hubs_blocks_quote_banner" USING btree ("_path");
  CREATE INDEX "hubs_blocks_quote_banner_background_idx" ON "hubs_blocks_quote_banner" USING btree ("background_id");
  CREATE INDEX "hubs_blocks_quote_banner_watermark_idx" ON "hubs_blocks_quote_banner" USING btree ("watermark_id");
  CREATE UNIQUE INDEX "hubs_blocks_quote_banner_locales_locale_parent_id_unique" ON "hubs_blocks_quote_banner_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_accelerators_items_order_idx" ON "hubs_blocks_accelerators_items" USING btree ("_order");
  CREATE INDEX "hubs_blocks_accelerators_items_parent_id_idx" ON "hubs_blocks_accelerators_items" USING btree ("_parent_id");
  CREATE INDEX "hubs_blocks_accelerators_items_image_idx" ON "hubs_blocks_accelerators_items" USING btree ("image_id");
  CREATE UNIQUE INDEX "hubs_blocks_accelerators_items_locales_locale_parent_id_uniq" ON "hubs_blocks_accelerators_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_accelerators_order_idx" ON "hubs_blocks_accelerators" USING btree ("_order");
  CREATE INDEX "hubs_blocks_accelerators_parent_id_idx" ON "hubs_blocks_accelerators" USING btree ("_parent_id");
  CREATE INDEX "hubs_blocks_accelerators_path_idx" ON "hubs_blocks_accelerators" USING btree ("_path");
  CREATE UNIQUE INDEX "hubs_blocks_accelerators_locales_locale_parent_id_unique" ON "hubs_blocks_accelerators_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_posts_feed_filter_items_order_idx" ON "hubs_blocks_posts_feed_filter_items" USING btree ("_order");
  CREATE INDEX "hubs_blocks_posts_feed_filter_items_parent_id_idx" ON "hubs_blocks_posts_feed_filter_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "hubs_blocks_posts_feed_filter_items_locales_locale_parent_id" ON "hubs_blocks_posts_feed_filter_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_posts_feed_order_idx" ON "hubs_blocks_posts_feed" USING btree ("_order");
  CREATE INDEX "hubs_blocks_posts_feed_parent_id_idx" ON "hubs_blocks_posts_feed" USING btree ("_parent_id");
  CREATE INDEX "hubs_blocks_posts_feed_path_idx" ON "hubs_blocks_posts_feed" USING btree ("_path");
  CREATE UNIQUE INDEX "hubs_blocks_posts_feed_locales_locale_parent_id_unique" ON "hubs_blocks_posts_feed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_gallery_items_order_idx" ON "hubs_blocks_gallery_items" USING btree ("_order");
  CREATE INDEX "hubs_blocks_gallery_items_parent_id_idx" ON "hubs_blocks_gallery_items" USING btree ("_parent_id");
  CREATE INDEX "hubs_blocks_gallery_items_image_idx" ON "hubs_blocks_gallery_items" USING btree ("image_id");
  CREATE UNIQUE INDEX "hubs_blocks_gallery_items_locales_locale_parent_id_unique" ON "hubs_blocks_gallery_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_gallery_order_idx" ON "hubs_blocks_gallery" USING btree ("_order");
  CREATE INDEX "hubs_blocks_gallery_parent_id_idx" ON "hubs_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "hubs_blocks_gallery_path_idx" ON "hubs_blocks_gallery" USING btree ("_path");
  CREATE INDEX "hubs_blocks_values_list_items_order_idx" ON "hubs_blocks_values_list_items" USING btree ("_order");
  CREATE INDEX "hubs_blocks_values_list_items_parent_id_idx" ON "hubs_blocks_values_list_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "hubs_blocks_values_list_items_locales_locale_parent_id_uniqu" ON "hubs_blocks_values_list_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_values_list_order_idx" ON "hubs_blocks_values_list" USING btree ("_order");
  CREATE INDEX "hubs_blocks_values_list_parent_id_idx" ON "hubs_blocks_values_list" USING btree ("_parent_id");
  CREATE INDEX "hubs_blocks_values_list_path_idx" ON "hubs_blocks_values_list" USING btree ("_path");
  CREATE UNIQUE INDEX "hubs_blocks_values_list_locales_locale_parent_id_unique" ON "hubs_blocks_values_list_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_history_grid_paragraphs_order_idx" ON "hubs_blocks_history_grid_paragraphs" USING btree ("_order");
  CREATE INDEX "hubs_blocks_history_grid_paragraphs_parent_id_idx" ON "hubs_blocks_history_grid_paragraphs" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "hubs_blocks_history_grid_paragraphs_locales_locale_parent_id" ON "hubs_blocks_history_grid_paragraphs_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_history_grid_order_idx" ON "hubs_blocks_history_grid" USING btree ("_order");
  CREATE INDEX "hubs_blocks_history_grid_parent_id_idx" ON "hubs_blocks_history_grid" USING btree ("_parent_id");
  CREATE INDEX "hubs_blocks_history_grid_path_idx" ON "hubs_blocks_history_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "hubs_blocks_history_grid_locales_locale_parent_id_unique" ON "hubs_blocks_history_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_stats_row_items_order_idx" ON "hubs_blocks_stats_row_items" USING btree ("_order");
  CREATE INDEX "hubs_blocks_stats_row_items_parent_id_idx" ON "hubs_blocks_stats_row_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "hubs_blocks_stats_row_items_locales_locale_parent_id_unique" ON "hubs_blocks_stats_row_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_stats_row_order_idx" ON "hubs_blocks_stats_row" USING btree ("_order");
  CREATE INDEX "hubs_blocks_stats_row_parent_id_idx" ON "hubs_blocks_stats_row" USING btree ("_parent_id");
  CREATE INDEX "hubs_blocks_stats_row_path_idx" ON "hubs_blocks_stats_row" USING btree ("_path");
  CREATE INDEX "hubs_blocks_highlighted_text_order_idx" ON "hubs_blocks_highlighted_text" USING btree ("_order");
  CREATE INDEX "hubs_blocks_highlighted_text_parent_id_idx" ON "hubs_blocks_highlighted_text" USING btree ("_parent_id");
  CREATE INDEX "hubs_blocks_highlighted_text_path_idx" ON "hubs_blocks_highlighted_text" USING btree ("_path");
  CREATE UNIQUE INDEX "hubs_blocks_highlighted_text_locales_locale_parent_id_unique" ON "hubs_blocks_highlighted_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_timeline_items_lines_order_idx" ON "hubs_blocks_timeline_items_lines" USING btree ("_order");
  CREATE INDEX "hubs_blocks_timeline_items_lines_parent_id_idx" ON "hubs_blocks_timeline_items_lines" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "hubs_blocks_timeline_items_lines_locales_locale_parent_id_un" ON "hubs_blocks_timeline_items_lines_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_timeline_items_order_idx" ON "hubs_blocks_timeline_items" USING btree ("_order");
  CREATE INDEX "hubs_blocks_timeline_items_parent_id_idx" ON "hubs_blocks_timeline_items" USING btree ("_parent_id");
  CREATE INDEX "hubs_blocks_timeline_order_idx" ON "hubs_blocks_timeline" USING btree ("_order");
  CREATE INDEX "hubs_blocks_timeline_parent_id_idx" ON "hubs_blocks_timeline" USING btree ("_parent_id");
  CREATE INDEX "hubs_blocks_timeline_path_idx" ON "hubs_blocks_timeline" USING btree ("_path");
  CREATE UNIQUE INDEX "hubs_blocks_timeline_locales_locale_parent_id_unique" ON "hubs_blocks_timeline_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_carousel_slides_order_idx" ON "hubs_blocks_carousel_slides" USING btree ("_order");
  CREATE INDEX "hubs_blocks_carousel_slides_parent_id_idx" ON "hubs_blocks_carousel_slides" USING btree ("_parent_id");
  CREATE INDEX "hubs_blocks_carousel_slides_image_idx" ON "hubs_blocks_carousel_slides" USING btree ("image_id");
  CREATE UNIQUE INDEX "hubs_blocks_carousel_slides_locales_locale_parent_id_unique" ON "hubs_blocks_carousel_slides_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_carousel_order_idx" ON "hubs_blocks_carousel" USING btree ("_order");
  CREATE INDEX "hubs_blocks_carousel_parent_id_idx" ON "hubs_blocks_carousel" USING btree ("_parent_id");
  CREATE INDEX "hubs_blocks_carousel_path_idx" ON "hubs_blocks_carousel" USING btree ("_path");
  CREATE INDEX "hubs_blocks_people_grid_order_idx" ON "hubs_blocks_people_grid" USING btree ("_order");
  CREATE INDEX "hubs_blocks_people_grid_parent_id_idx" ON "hubs_blocks_people_grid" USING btree ("_parent_id");
  CREATE INDEX "hubs_blocks_people_grid_path_idx" ON "hubs_blocks_people_grid" USING btree ("_path");
  CREATE INDEX "hubs_blocks_people_grid_hub_idx" ON "hubs_blocks_people_grid" USING btree ("hub_id");
  CREATE UNIQUE INDEX "hubs_blocks_people_grid_locales_locale_parent_id_unique" ON "hubs_blocks_people_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_creed_order_idx" ON "hubs_blocks_creed" USING btree ("_order");
  CREATE INDEX "hubs_blocks_creed_parent_id_idx" ON "hubs_blocks_creed" USING btree ("_parent_id");
  CREATE INDEX "hubs_blocks_creed_path_idx" ON "hubs_blocks_creed" USING btree ("_path");
  CREATE INDEX "hubs_blocks_creed_background_idx" ON "hubs_blocks_creed" USING btree ("background_id");
  CREATE UNIQUE INDEX "hubs_blocks_creed_locales_locale_parent_id_unique" ON "hubs_blocks_creed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_section_intro_order_idx" ON "hubs_blocks_section_intro" USING btree ("_order");
  CREATE INDEX "hubs_blocks_section_intro_parent_id_idx" ON "hubs_blocks_section_intro" USING btree ("_parent_id");
  CREATE INDEX "hubs_blocks_section_intro_path_idx" ON "hubs_blocks_section_intro" USING btree ("_path");
  CREATE UNIQUE INDEX "hubs_blocks_section_intro_locales_locale_parent_id_unique" ON "hubs_blocks_section_intro_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_data_table_filters_order_idx" ON "hubs_blocks_data_table_filters" USING btree ("_order");
  CREATE INDEX "hubs_blocks_data_table_filters_parent_id_idx" ON "hubs_blocks_data_table_filters" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "hubs_blocks_data_table_filters_locales_locale_parent_id_uniq" ON "hubs_blocks_data_table_filters_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_data_table_columns_order_idx" ON "hubs_blocks_data_table_columns" USING btree ("_order");
  CREATE INDEX "hubs_blocks_data_table_columns_parent_id_idx" ON "hubs_blocks_data_table_columns" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "hubs_blocks_data_table_columns_locales_locale_parent_id_uniq" ON "hubs_blocks_data_table_columns_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_data_table_rows_cells_order_idx" ON "hubs_blocks_data_table_rows_cells" USING btree ("_order");
  CREATE INDEX "hubs_blocks_data_table_rows_cells_parent_id_idx" ON "hubs_blocks_data_table_rows_cells" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "hubs_blocks_data_table_rows_cells_locales_locale_parent_id_u" ON "hubs_blocks_data_table_rows_cells_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_data_table_rows_order_idx" ON "hubs_blocks_data_table_rows" USING btree ("_order");
  CREATE INDEX "hubs_blocks_data_table_rows_parent_id_idx" ON "hubs_blocks_data_table_rows" USING btree ("_parent_id");
  CREATE INDEX "hubs_blocks_data_table_order_idx" ON "hubs_blocks_data_table" USING btree ("_order");
  CREATE INDEX "hubs_blocks_data_table_parent_id_idx" ON "hubs_blocks_data_table" USING btree ("_parent_id");
  CREATE INDEX "hubs_blocks_data_table_path_idx" ON "hubs_blocks_data_table" USING btree ("_path");
  CREATE UNIQUE INDEX "hubs_blocks_data_table_locales_locale_parent_id_unique" ON "hubs_blocks_data_table_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_media_card_order_idx" ON "hubs_blocks_media_card" USING btree ("_order");
  CREATE INDEX "hubs_blocks_media_card_parent_id_idx" ON "hubs_blocks_media_card" USING btree ("_parent_id");
  CREATE INDEX "hubs_blocks_media_card_path_idx" ON "hubs_blocks_media_card" USING btree ("_path");
  CREATE INDEX "hubs_blocks_media_card_image_idx" ON "hubs_blocks_media_card" USING btree ("image_id");
  CREATE UNIQUE INDEX "hubs_blocks_media_card_locales_locale_parent_id_unique" ON "hubs_blocks_media_card_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_department_grid_order_idx" ON "hubs_blocks_department_grid" USING btree ("_order");
  CREATE INDEX "hubs_blocks_department_grid_parent_id_idx" ON "hubs_blocks_department_grid" USING btree ("_parent_id");
  CREATE INDEX "hubs_blocks_department_grid_path_idx" ON "hubs_blocks_department_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "hubs_blocks_department_grid_locales_locale_parent_id_unique" ON "hubs_blocks_department_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_contact_box_order_idx" ON "hubs_blocks_contact_box" USING btree ("_order");
  CREATE INDEX "hubs_blocks_contact_box_parent_id_idx" ON "hubs_blocks_contact_box" USING btree ("_parent_id");
  CREATE INDEX "hubs_blocks_contact_box_path_idx" ON "hubs_blocks_contact_box" USING btree ("_path");
  CREATE UNIQUE INDEX "hubs_blocks_contact_box_locales_locale_parent_id_unique" ON "hubs_blocks_contact_box_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_contact_form_details_items_order_idx" ON "hubs_blocks_contact_form_details_items" USING btree ("_order");
  CREATE INDEX "hubs_blocks_contact_form_details_items_parent_id_idx" ON "hubs_blocks_contact_form_details_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "hubs_blocks_contact_form_details_items_locales_locale_parent" ON "hubs_blocks_contact_form_details_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_contact_form_details_order_idx" ON "hubs_blocks_contact_form_details" USING btree ("_order");
  CREATE INDEX "hubs_blocks_contact_form_details_parent_id_idx" ON "hubs_blocks_contact_form_details" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "hubs_blocks_contact_form_details_locales_locale_parent_id_un" ON "hubs_blocks_contact_form_details_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_contact_form_order_idx" ON "hubs_blocks_contact_form" USING btree ("_order");
  CREATE INDEX "hubs_blocks_contact_form_parent_id_idx" ON "hubs_blocks_contact_form" USING btree ("_parent_id");
  CREATE INDEX "hubs_blocks_contact_form_path_idx" ON "hubs_blocks_contact_form" USING btree ("_path");
  CREATE UNIQUE INDEX "hubs_blocks_contact_form_locales_locale_parent_id_unique" ON "hubs_blocks_contact_form_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_process_steps_items_order_idx" ON "hubs_blocks_process_steps_items" USING btree ("_order");
  CREATE INDEX "hubs_blocks_process_steps_items_parent_id_idx" ON "hubs_blocks_process_steps_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "hubs_blocks_process_steps_items_locales_locale_parent_id_uni" ON "hubs_blocks_process_steps_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_process_steps_order_idx" ON "hubs_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "hubs_blocks_process_steps_parent_id_idx" ON "hubs_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "hubs_blocks_process_steps_path_idx" ON "hubs_blocks_process_steps" USING btree ("_path");
  CREATE UNIQUE INDEX "hubs_blocks_process_steps_locales_locale_parent_id_unique" ON "hubs_blocks_process_steps_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_figure_order_idx" ON "hubs_blocks_figure" USING btree ("_order");
  CREATE INDEX "hubs_blocks_figure_parent_id_idx" ON "hubs_blocks_figure" USING btree ("_parent_id");
  CREATE INDEX "hubs_blocks_figure_path_idx" ON "hubs_blocks_figure" USING btree ("_path");
  CREATE INDEX "hubs_blocks_figure_image_idx" ON "hubs_blocks_figure" USING btree ("image_id");
  CREATE UNIQUE INDEX "hubs_blocks_figure_locales_locale_parent_id_unique" ON "hubs_blocks_figure_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_region_map_regions_order_idx" ON "hubs_blocks_region_map_regions" USING btree ("_order");
  CREATE INDEX "hubs_blocks_region_map_regions_parent_id_idx" ON "hubs_blocks_region_map_regions" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "hubs_blocks_region_map_regions_locales_locale_parent_id_uniq" ON "hubs_blocks_region_map_regions_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_blocks_region_map_order_idx" ON "hubs_blocks_region_map" USING btree ("_order");
  CREATE INDEX "hubs_blocks_region_map_parent_id_idx" ON "hubs_blocks_region_map" USING btree ("_parent_id");
  CREATE INDEX "hubs_blocks_region_map_path_idx" ON "hubs_blocks_region_map" USING btree ("_path");
  CREATE UNIQUE INDEX "hubs_blocks_region_map_locales_locale_parent_id_unique" ON "hubs_blocks_region_map_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "hubs_slug_idx" ON "hubs" USING btree ("slug");
  CREATE INDEX "hubs_updated_at_idx" ON "hubs" USING btree ("updated_at");
  CREATE INDEX "hubs_created_at_idx" ON "hubs" USING btree ("created_at");
  CREATE INDEX "hubs__status_idx" ON "hubs" USING btree ("_status");
  CREATE UNIQUE INDEX "hubs_locales_locale_parent_id_unique" ON "hubs_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hubs_rels_order_idx" ON "hubs_rels" USING btree ("order");
  CREATE INDEX "hubs_rels_parent_idx" ON "hubs_rels" USING btree ("parent_id");
  CREATE INDEX "hubs_rels_path_idx" ON "hubs_rels" USING btree ("path");
  CREATE INDEX "hubs_rels_pages_id_idx" ON "hubs_rels" USING btree ("pages_id");
  CREATE INDEX "hubs_rels_posts_id_idx" ON "hubs_rels" USING btree ("posts_id");
  CREATE INDEX "hubs_rels_departments_id_idx" ON "hubs_rels" USING btree ("departments_id");
  CREATE INDEX "hubs_rels_hubs_id_idx" ON "hubs_rels" USING btree ("hubs_id");
  CREATE INDEX "hubs_rels_membership_tiers_id_idx" ON "hubs_rels" USING btree ("membership_tiers_id");
  CREATE INDEX "hubs_rels_board_members_id_idx" ON "hubs_rels" USING btree ("board_members_id");
  CREATE INDEX "_hubs_v_blocks_page_banner_links_order_idx" ON "_hubs_v_blocks_page_banner_links" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_page_banner_links_parent_id_idx" ON "_hubs_v_blocks_page_banner_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_hubs_v_blocks_page_banner_links_locales_locale_parent_id_un" ON "_hubs_v_blocks_page_banner_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_page_banner_order_idx" ON "_hubs_v_blocks_page_banner" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_page_banner_parent_id_idx" ON "_hubs_v_blocks_page_banner" USING btree ("_parent_id");
  CREATE INDEX "_hubs_v_blocks_page_banner_path_idx" ON "_hubs_v_blocks_page_banner" USING btree ("_path");
  CREATE INDEX "_hubs_v_blocks_page_banner_background_idx" ON "_hubs_v_blocks_page_banner" USING btree ("background_id");
  CREATE INDEX "_hubs_v_blocks_page_banner_watermark_idx" ON "_hubs_v_blocks_page_banner" USING btree ("watermark_id");
  CREATE UNIQUE INDEX "_hubs_v_blocks_page_banner_locales_locale_parent_id_unique" ON "_hubs_v_blocks_page_banner_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_section_tabs_items_order_idx" ON "_hubs_v_blocks_section_tabs_items" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_section_tabs_items_parent_id_idx" ON "_hubs_v_blocks_section_tabs_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_hubs_v_blocks_section_tabs_items_locales_locale_parent_id_u" ON "_hubs_v_blocks_section_tabs_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_section_tabs_order_idx" ON "_hubs_v_blocks_section_tabs" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_section_tabs_parent_id_idx" ON "_hubs_v_blocks_section_tabs" USING btree ("_parent_id");
  CREATE INDEX "_hubs_v_blocks_section_tabs_path_idx" ON "_hubs_v_blocks_section_tabs" USING btree ("_path");
  CREATE INDEX "_hubs_v_blocks_rich_text_order_idx" ON "_hubs_v_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_rich_text_parent_id_idx" ON "_hubs_v_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "_hubs_v_blocks_rich_text_path_idx" ON "_hubs_v_blocks_rich_text" USING btree ("_path");
  CREATE UNIQUE INDEX "_hubs_v_blocks_rich_text_locales_locale_parent_id_unique" ON "_hubs_v_blocks_rich_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_card_grid_items_order_idx" ON "_hubs_v_blocks_card_grid_items" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_card_grid_items_parent_id_idx" ON "_hubs_v_blocks_card_grid_items" USING btree ("_parent_id");
  CREATE INDEX "_hubs_v_blocks_card_grid_items_icon_idx" ON "_hubs_v_blocks_card_grid_items" USING btree ("icon_id");
  CREATE UNIQUE INDEX "_hubs_v_blocks_card_grid_items_locales_locale_parent_id_uniq" ON "_hubs_v_blocks_card_grid_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_card_grid_order_idx" ON "_hubs_v_blocks_card_grid" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_card_grid_parent_id_idx" ON "_hubs_v_blocks_card_grid" USING btree ("_parent_id");
  CREATE INDEX "_hubs_v_blocks_card_grid_path_idx" ON "_hubs_v_blocks_card_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "_hubs_v_blocks_card_grid_locales_locale_parent_id_unique" ON "_hubs_v_blocks_card_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_quote_banner_order_idx" ON "_hubs_v_blocks_quote_banner" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_quote_banner_parent_id_idx" ON "_hubs_v_blocks_quote_banner" USING btree ("_parent_id");
  CREATE INDEX "_hubs_v_blocks_quote_banner_path_idx" ON "_hubs_v_blocks_quote_banner" USING btree ("_path");
  CREATE INDEX "_hubs_v_blocks_quote_banner_background_idx" ON "_hubs_v_blocks_quote_banner" USING btree ("background_id");
  CREATE INDEX "_hubs_v_blocks_quote_banner_watermark_idx" ON "_hubs_v_blocks_quote_banner" USING btree ("watermark_id");
  CREATE UNIQUE INDEX "_hubs_v_blocks_quote_banner_locales_locale_parent_id_unique" ON "_hubs_v_blocks_quote_banner_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_accelerators_items_order_idx" ON "_hubs_v_blocks_accelerators_items" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_accelerators_items_parent_id_idx" ON "_hubs_v_blocks_accelerators_items" USING btree ("_parent_id");
  CREATE INDEX "_hubs_v_blocks_accelerators_items_image_idx" ON "_hubs_v_blocks_accelerators_items" USING btree ("image_id");
  CREATE UNIQUE INDEX "_hubs_v_blocks_accelerators_items_locales_locale_parent_id_u" ON "_hubs_v_blocks_accelerators_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_accelerators_order_idx" ON "_hubs_v_blocks_accelerators" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_accelerators_parent_id_idx" ON "_hubs_v_blocks_accelerators" USING btree ("_parent_id");
  CREATE INDEX "_hubs_v_blocks_accelerators_path_idx" ON "_hubs_v_blocks_accelerators" USING btree ("_path");
  CREATE UNIQUE INDEX "_hubs_v_blocks_accelerators_locales_locale_parent_id_unique" ON "_hubs_v_blocks_accelerators_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_posts_feed_filter_items_order_idx" ON "_hubs_v_blocks_posts_feed_filter_items" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_posts_feed_filter_items_parent_id_idx" ON "_hubs_v_blocks_posts_feed_filter_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_hubs_v_blocks_posts_feed_filter_items_locales_locale_parent" ON "_hubs_v_blocks_posts_feed_filter_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_posts_feed_order_idx" ON "_hubs_v_blocks_posts_feed" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_posts_feed_parent_id_idx" ON "_hubs_v_blocks_posts_feed" USING btree ("_parent_id");
  CREATE INDEX "_hubs_v_blocks_posts_feed_path_idx" ON "_hubs_v_blocks_posts_feed" USING btree ("_path");
  CREATE UNIQUE INDEX "_hubs_v_blocks_posts_feed_locales_locale_parent_id_unique" ON "_hubs_v_blocks_posts_feed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_gallery_items_order_idx" ON "_hubs_v_blocks_gallery_items" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_gallery_items_parent_id_idx" ON "_hubs_v_blocks_gallery_items" USING btree ("_parent_id");
  CREATE INDEX "_hubs_v_blocks_gallery_items_image_idx" ON "_hubs_v_blocks_gallery_items" USING btree ("image_id");
  CREATE UNIQUE INDEX "_hubs_v_blocks_gallery_items_locales_locale_parent_id_unique" ON "_hubs_v_blocks_gallery_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_gallery_order_idx" ON "_hubs_v_blocks_gallery" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_gallery_parent_id_idx" ON "_hubs_v_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "_hubs_v_blocks_gallery_path_idx" ON "_hubs_v_blocks_gallery" USING btree ("_path");
  CREATE INDEX "_hubs_v_blocks_values_list_items_order_idx" ON "_hubs_v_blocks_values_list_items" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_values_list_items_parent_id_idx" ON "_hubs_v_blocks_values_list_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_hubs_v_blocks_values_list_items_locales_locale_parent_id_un" ON "_hubs_v_blocks_values_list_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_values_list_order_idx" ON "_hubs_v_blocks_values_list" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_values_list_parent_id_idx" ON "_hubs_v_blocks_values_list" USING btree ("_parent_id");
  CREATE INDEX "_hubs_v_blocks_values_list_path_idx" ON "_hubs_v_blocks_values_list" USING btree ("_path");
  CREATE UNIQUE INDEX "_hubs_v_blocks_values_list_locales_locale_parent_id_unique" ON "_hubs_v_blocks_values_list_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_history_grid_paragraphs_order_idx" ON "_hubs_v_blocks_history_grid_paragraphs" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_history_grid_paragraphs_parent_id_idx" ON "_hubs_v_blocks_history_grid_paragraphs" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_hubs_v_blocks_history_grid_paragraphs_locales_locale_parent" ON "_hubs_v_blocks_history_grid_paragraphs_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_history_grid_order_idx" ON "_hubs_v_blocks_history_grid" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_history_grid_parent_id_idx" ON "_hubs_v_blocks_history_grid" USING btree ("_parent_id");
  CREATE INDEX "_hubs_v_blocks_history_grid_path_idx" ON "_hubs_v_blocks_history_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "_hubs_v_blocks_history_grid_locales_locale_parent_id_unique" ON "_hubs_v_blocks_history_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_stats_row_items_order_idx" ON "_hubs_v_blocks_stats_row_items" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_stats_row_items_parent_id_idx" ON "_hubs_v_blocks_stats_row_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_hubs_v_blocks_stats_row_items_locales_locale_parent_id_uniq" ON "_hubs_v_blocks_stats_row_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_stats_row_order_idx" ON "_hubs_v_blocks_stats_row" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_stats_row_parent_id_idx" ON "_hubs_v_blocks_stats_row" USING btree ("_parent_id");
  CREATE INDEX "_hubs_v_blocks_stats_row_path_idx" ON "_hubs_v_blocks_stats_row" USING btree ("_path");
  CREATE INDEX "_hubs_v_blocks_highlighted_text_order_idx" ON "_hubs_v_blocks_highlighted_text" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_highlighted_text_parent_id_idx" ON "_hubs_v_blocks_highlighted_text" USING btree ("_parent_id");
  CREATE INDEX "_hubs_v_blocks_highlighted_text_path_idx" ON "_hubs_v_blocks_highlighted_text" USING btree ("_path");
  CREATE UNIQUE INDEX "_hubs_v_blocks_highlighted_text_locales_locale_parent_id_uni" ON "_hubs_v_blocks_highlighted_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_timeline_items_lines_order_idx" ON "_hubs_v_blocks_timeline_items_lines" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_timeline_items_lines_parent_id_idx" ON "_hubs_v_blocks_timeline_items_lines" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_hubs_v_blocks_timeline_items_lines_locales_locale_parent_id" ON "_hubs_v_blocks_timeline_items_lines_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_timeline_items_order_idx" ON "_hubs_v_blocks_timeline_items" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_timeline_items_parent_id_idx" ON "_hubs_v_blocks_timeline_items" USING btree ("_parent_id");
  CREATE INDEX "_hubs_v_blocks_timeline_order_idx" ON "_hubs_v_blocks_timeline" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_timeline_parent_id_idx" ON "_hubs_v_blocks_timeline" USING btree ("_parent_id");
  CREATE INDEX "_hubs_v_blocks_timeline_path_idx" ON "_hubs_v_blocks_timeline" USING btree ("_path");
  CREATE UNIQUE INDEX "_hubs_v_blocks_timeline_locales_locale_parent_id_unique" ON "_hubs_v_blocks_timeline_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_carousel_slides_order_idx" ON "_hubs_v_blocks_carousel_slides" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_carousel_slides_parent_id_idx" ON "_hubs_v_blocks_carousel_slides" USING btree ("_parent_id");
  CREATE INDEX "_hubs_v_blocks_carousel_slides_image_idx" ON "_hubs_v_blocks_carousel_slides" USING btree ("image_id");
  CREATE UNIQUE INDEX "_hubs_v_blocks_carousel_slides_locales_locale_parent_id_uniq" ON "_hubs_v_blocks_carousel_slides_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_carousel_order_idx" ON "_hubs_v_blocks_carousel" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_carousel_parent_id_idx" ON "_hubs_v_blocks_carousel" USING btree ("_parent_id");
  CREATE INDEX "_hubs_v_blocks_carousel_path_idx" ON "_hubs_v_blocks_carousel" USING btree ("_path");
  CREATE INDEX "_hubs_v_blocks_people_grid_order_idx" ON "_hubs_v_blocks_people_grid" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_people_grid_parent_id_idx" ON "_hubs_v_blocks_people_grid" USING btree ("_parent_id");
  CREATE INDEX "_hubs_v_blocks_people_grid_path_idx" ON "_hubs_v_blocks_people_grid" USING btree ("_path");
  CREATE INDEX "_hubs_v_blocks_people_grid_hub_idx" ON "_hubs_v_blocks_people_grid" USING btree ("hub_id");
  CREATE UNIQUE INDEX "_hubs_v_blocks_people_grid_locales_locale_parent_id_unique" ON "_hubs_v_blocks_people_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_creed_order_idx" ON "_hubs_v_blocks_creed" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_creed_parent_id_idx" ON "_hubs_v_blocks_creed" USING btree ("_parent_id");
  CREATE INDEX "_hubs_v_blocks_creed_path_idx" ON "_hubs_v_blocks_creed" USING btree ("_path");
  CREATE INDEX "_hubs_v_blocks_creed_background_idx" ON "_hubs_v_blocks_creed" USING btree ("background_id");
  CREATE UNIQUE INDEX "_hubs_v_blocks_creed_locales_locale_parent_id_unique" ON "_hubs_v_blocks_creed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_section_intro_order_idx" ON "_hubs_v_blocks_section_intro" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_section_intro_parent_id_idx" ON "_hubs_v_blocks_section_intro" USING btree ("_parent_id");
  CREATE INDEX "_hubs_v_blocks_section_intro_path_idx" ON "_hubs_v_blocks_section_intro" USING btree ("_path");
  CREATE UNIQUE INDEX "_hubs_v_blocks_section_intro_locales_locale_parent_id_unique" ON "_hubs_v_blocks_section_intro_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_data_table_filters_order_idx" ON "_hubs_v_blocks_data_table_filters" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_data_table_filters_parent_id_idx" ON "_hubs_v_blocks_data_table_filters" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_hubs_v_blocks_data_table_filters_locales_locale_parent_id_u" ON "_hubs_v_blocks_data_table_filters_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_data_table_columns_order_idx" ON "_hubs_v_blocks_data_table_columns" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_data_table_columns_parent_id_idx" ON "_hubs_v_blocks_data_table_columns" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_hubs_v_blocks_data_table_columns_locales_locale_parent_id_u" ON "_hubs_v_blocks_data_table_columns_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_data_table_rows_cells_order_idx" ON "_hubs_v_blocks_data_table_rows_cells" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_data_table_rows_cells_parent_id_idx" ON "_hubs_v_blocks_data_table_rows_cells" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_hubs_v_blocks_data_table_rows_cells_locales_locale_parent_i" ON "_hubs_v_blocks_data_table_rows_cells_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_data_table_rows_order_idx" ON "_hubs_v_blocks_data_table_rows" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_data_table_rows_parent_id_idx" ON "_hubs_v_blocks_data_table_rows" USING btree ("_parent_id");
  CREATE INDEX "_hubs_v_blocks_data_table_order_idx" ON "_hubs_v_blocks_data_table" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_data_table_parent_id_idx" ON "_hubs_v_blocks_data_table" USING btree ("_parent_id");
  CREATE INDEX "_hubs_v_blocks_data_table_path_idx" ON "_hubs_v_blocks_data_table" USING btree ("_path");
  CREATE UNIQUE INDEX "_hubs_v_blocks_data_table_locales_locale_parent_id_unique" ON "_hubs_v_blocks_data_table_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_media_card_order_idx" ON "_hubs_v_blocks_media_card" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_media_card_parent_id_idx" ON "_hubs_v_blocks_media_card" USING btree ("_parent_id");
  CREATE INDEX "_hubs_v_blocks_media_card_path_idx" ON "_hubs_v_blocks_media_card" USING btree ("_path");
  CREATE INDEX "_hubs_v_blocks_media_card_image_idx" ON "_hubs_v_blocks_media_card" USING btree ("image_id");
  CREATE UNIQUE INDEX "_hubs_v_blocks_media_card_locales_locale_parent_id_unique" ON "_hubs_v_blocks_media_card_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_department_grid_order_idx" ON "_hubs_v_blocks_department_grid" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_department_grid_parent_id_idx" ON "_hubs_v_blocks_department_grid" USING btree ("_parent_id");
  CREATE INDEX "_hubs_v_blocks_department_grid_path_idx" ON "_hubs_v_blocks_department_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "_hubs_v_blocks_department_grid_locales_locale_parent_id_uniq" ON "_hubs_v_blocks_department_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_contact_box_order_idx" ON "_hubs_v_blocks_contact_box" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_contact_box_parent_id_idx" ON "_hubs_v_blocks_contact_box" USING btree ("_parent_id");
  CREATE INDEX "_hubs_v_blocks_contact_box_path_idx" ON "_hubs_v_blocks_contact_box" USING btree ("_path");
  CREATE UNIQUE INDEX "_hubs_v_blocks_contact_box_locales_locale_parent_id_unique" ON "_hubs_v_blocks_contact_box_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_contact_form_details_items_order_idx" ON "_hubs_v_blocks_contact_form_details_items" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_contact_form_details_items_parent_id_idx" ON "_hubs_v_blocks_contact_form_details_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_hubs_v_blocks_contact_form_details_items_locales_locale_par" ON "_hubs_v_blocks_contact_form_details_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_contact_form_details_order_idx" ON "_hubs_v_blocks_contact_form_details" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_contact_form_details_parent_id_idx" ON "_hubs_v_blocks_contact_form_details" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_hubs_v_blocks_contact_form_details_locales_locale_parent_id" ON "_hubs_v_blocks_contact_form_details_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_contact_form_order_idx" ON "_hubs_v_blocks_contact_form" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_contact_form_parent_id_idx" ON "_hubs_v_blocks_contact_form" USING btree ("_parent_id");
  CREATE INDEX "_hubs_v_blocks_contact_form_path_idx" ON "_hubs_v_blocks_contact_form" USING btree ("_path");
  CREATE UNIQUE INDEX "_hubs_v_blocks_contact_form_locales_locale_parent_id_unique" ON "_hubs_v_blocks_contact_form_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_process_steps_items_order_idx" ON "_hubs_v_blocks_process_steps_items" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_process_steps_items_parent_id_idx" ON "_hubs_v_blocks_process_steps_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_hubs_v_blocks_process_steps_items_locales_locale_parent_id_" ON "_hubs_v_blocks_process_steps_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_process_steps_order_idx" ON "_hubs_v_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_process_steps_parent_id_idx" ON "_hubs_v_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "_hubs_v_blocks_process_steps_path_idx" ON "_hubs_v_blocks_process_steps" USING btree ("_path");
  CREATE UNIQUE INDEX "_hubs_v_blocks_process_steps_locales_locale_parent_id_unique" ON "_hubs_v_blocks_process_steps_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_figure_order_idx" ON "_hubs_v_blocks_figure" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_figure_parent_id_idx" ON "_hubs_v_blocks_figure" USING btree ("_parent_id");
  CREATE INDEX "_hubs_v_blocks_figure_path_idx" ON "_hubs_v_blocks_figure" USING btree ("_path");
  CREATE INDEX "_hubs_v_blocks_figure_image_idx" ON "_hubs_v_blocks_figure" USING btree ("image_id");
  CREATE UNIQUE INDEX "_hubs_v_blocks_figure_locales_locale_parent_id_unique" ON "_hubs_v_blocks_figure_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_region_map_regions_order_idx" ON "_hubs_v_blocks_region_map_regions" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_region_map_regions_parent_id_idx" ON "_hubs_v_blocks_region_map_regions" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_hubs_v_blocks_region_map_regions_locales_locale_parent_id_u" ON "_hubs_v_blocks_region_map_regions_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_blocks_region_map_order_idx" ON "_hubs_v_blocks_region_map" USING btree ("_order");
  CREATE INDEX "_hubs_v_blocks_region_map_parent_id_idx" ON "_hubs_v_blocks_region_map" USING btree ("_parent_id");
  CREATE INDEX "_hubs_v_blocks_region_map_path_idx" ON "_hubs_v_blocks_region_map" USING btree ("_path");
  CREATE UNIQUE INDEX "_hubs_v_blocks_region_map_locales_locale_parent_id_unique" ON "_hubs_v_blocks_region_map_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_parent_idx" ON "_hubs_v" USING btree ("parent_id");
  CREATE INDEX "_hubs_v_version_version_slug_idx" ON "_hubs_v" USING btree ("version_slug");
  CREATE INDEX "_hubs_v_version_version_updated_at_idx" ON "_hubs_v" USING btree ("version_updated_at");
  CREATE INDEX "_hubs_v_version_version_created_at_idx" ON "_hubs_v" USING btree ("version_created_at");
  CREATE INDEX "_hubs_v_version_version__status_idx" ON "_hubs_v" USING btree ("version__status");
  CREATE INDEX "_hubs_v_created_at_idx" ON "_hubs_v" USING btree ("created_at");
  CREATE INDEX "_hubs_v_updated_at_idx" ON "_hubs_v" USING btree ("updated_at");
  CREATE INDEX "_hubs_v_snapshot_idx" ON "_hubs_v" USING btree ("snapshot");
  CREATE INDEX "_hubs_v_published_locale_idx" ON "_hubs_v" USING btree ("published_locale");
  CREATE INDEX "_hubs_v_latest_idx" ON "_hubs_v" USING btree ("latest");
  CREATE UNIQUE INDEX "_hubs_v_locales_locale_parent_id_unique" ON "_hubs_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_hubs_v_rels_order_idx" ON "_hubs_v_rels" USING btree ("order");
  CREATE INDEX "_hubs_v_rels_parent_idx" ON "_hubs_v_rels" USING btree ("parent_id");
  CREATE INDEX "_hubs_v_rels_path_idx" ON "_hubs_v_rels" USING btree ("path");
  CREATE INDEX "_hubs_v_rels_pages_id_idx" ON "_hubs_v_rels" USING btree ("pages_id");
  CREATE INDEX "_hubs_v_rels_posts_id_idx" ON "_hubs_v_rels" USING btree ("posts_id");
  CREATE INDEX "_hubs_v_rels_departments_id_idx" ON "_hubs_v_rels" USING btree ("departments_id");
  CREATE INDEX "_hubs_v_rels_hubs_id_idx" ON "_hubs_v_rels" USING btree ("hubs_id");
  CREATE INDEX "_hubs_v_rels_membership_tiers_id_idx" ON "_hubs_v_rels" USING btree ("membership_tiers_id");
  CREATE INDEX "_hubs_v_rels_board_members_id_idx" ON "_hubs_v_rels" USING btree ("board_members_id");
  CREATE INDEX "board_members_photo_idx" ON "board_members" USING btree ("photo_id");
  CREATE INDEX "board_members_department_idx" ON "board_members" USING btree ("department_id");
  CREATE INDEX "board_members_hub_idx" ON "board_members" USING btree ("hub_id");
  CREATE INDEX "board_members_updated_at_idx" ON "board_members" USING btree ("updated_at");
  CREATE INDEX "board_members_created_at_idx" ON "board_members" USING btree ("created_at");
  CREATE UNIQUE INDEX "board_members_locales_locale_parent_id_unique" ON "board_members_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_benefits_order_idx" ON "membership_tiers_benefits" USING btree ("_order");
  CREATE INDEX "membership_tiers_benefits_parent_id_idx" ON "membership_tiers_benefits" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "membership_tiers_benefits_locales_locale_parent_id_unique" ON "membership_tiers_benefits_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_requirements_order_idx" ON "membership_tiers_requirements" USING btree ("_order");
  CREATE INDEX "membership_tiers_requirements_parent_id_idx" ON "membership_tiers_requirements" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "membership_tiers_requirements_locales_locale_parent_id_uniqu" ON "membership_tiers_requirements_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_page_banner_links_order_idx" ON "membership_tiers_blocks_page_banner_links" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_page_banner_links_parent_id_idx" ON "membership_tiers_blocks_page_banner_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "membership_tiers_blocks_page_banner_links_locales_locale_par" ON "membership_tiers_blocks_page_banner_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_page_banner_order_idx" ON "membership_tiers_blocks_page_banner" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_page_banner_parent_id_idx" ON "membership_tiers_blocks_page_banner" USING btree ("_parent_id");
  CREATE INDEX "membership_tiers_blocks_page_banner_path_idx" ON "membership_tiers_blocks_page_banner" USING btree ("_path");
  CREATE INDEX "membership_tiers_blocks_page_banner_background_idx" ON "membership_tiers_blocks_page_banner" USING btree ("background_id");
  CREATE INDEX "membership_tiers_blocks_page_banner_watermark_idx" ON "membership_tiers_blocks_page_banner" USING btree ("watermark_id");
  CREATE UNIQUE INDEX "membership_tiers_blocks_page_banner_locales_locale_parent_id" ON "membership_tiers_blocks_page_banner_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_section_tabs_items_order_idx" ON "membership_tiers_blocks_section_tabs_items" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_section_tabs_items_parent_id_idx" ON "membership_tiers_blocks_section_tabs_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "membership_tiers_blocks_section_tabs_items_locales_locale_pa" ON "membership_tiers_blocks_section_tabs_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_section_tabs_order_idx" ON "membership_tiers_blocks_section_tabs" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_section_tabs_parent_id_idx" ON "membership_tiers_blocks_section_tabs" USING btree ("_parent_id");
  CREATE INDEX "membership_tiers_blocks_section_tabs_path_idx" ON "membership_tiers_blocks_section_tabs" USING btree ("_path");
  CREATE INDEX "membership_tiers_blocks_rich_text_order_idx" ON "membership_tiers_blocks_rich_text" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_rich_text_parent_id_idx" ON "membership_tiers_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX "membership_tiers_blocks_rich_text_path_idx" ON "membership_tiers_blocks_rich_text" USING btree ("_path");
  CREATE UNIQUE INDEX "membership_tiers_blocks_rich_text_locales_locale_parent_id_u" ON "membership_tiers_blocks_rich_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_card_grid_items_order_idx" ON "membership_tiers_blocks_card_grid_items" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_card_grid_items_parent_id_idx" ON "membership_tiers_blocks_card_grid_items" USING btree ("_parent_id");
  CREATE INDEX "membership_tiers_blocks_card_grid_items_icon_idx" ON "membership_tiers_blocks_card_grid_items" USING btree ("icon_id");
  CREATE UNIQUE INDEX "membership_tiers_blocks_card_grid_items_locales_locale_paren" ON "membership_tiers_blocks_card_grid_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_card_grid_order_idx" ON "membership_tiers_blocks_card_grid" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_card_grid_parent_id_idx" ON "membership_tiers_blocks_card_grid" USING btree ("_parent_id");
  CREATE INDEX "membership_tiers_blocks_card_grid_path_idx" ON "membership_tiers_blocks_card_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "membership_tiers_blocks_card_grid_locales_locale_parent_id_u" ON "membership_tiers_blocks_card_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_quote_banner_order_idx" ON "membership_tiers_blocks_quote_banner" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_quote_banner_parent_id_idx" ON "membership_tiers_blocks_quote_banner" USING btree ("_parent_id");
  CREATE INDEX "membership_tiers_blocks_quote_banner_path_idx" ON "membership_tiers_blocks_quote_banner" USING btree ("_path");
  CREATE INDEX "membership_tiers_blocks_quote_banner_background_idx" ON "membership_tiers_blocks_quote_banner" USING btree ("background_id");
  CREATE INDEX "membership_tiers_blocks_quote_banner_watermark_idx" ON "membership_tiers_blocks_quote_banner" USING btree ("watermark_id");
  CREATE UNIQUE INDEX "membership_tiers_blocks_quote_banner_locales_locale_parent_i" ON "membership_tiers_blocks_quote_banner_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_accelerators_items_order_idx" ON "membership_tiers_blocks_accelerators_items" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_accelerators_items_parent_id_idx" ON "membership_tiers_blocks_accelerators_items" USING btree ("_parent_id");
  CREATE INDEX "membership_tiers_blocks_accelerators_items_image_idx" ON "membership_tiers_blocks_accelerators_items" USING btree ("image_id");
  CREATE UNIQUE INDEX "membership_tiers_blocks_accelerators_items_locales_locale_pa" ON "membership_tiers_blocks_accelerators_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_accelerators_order_idx" ON "membership_tiers_blocks_accelerators" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_accelerators_parent_id_idx" ON "membership_tiers_blocks_accelerators" USING btree ("_parent_id");
  CREATE INDEX "membership_tiers_blocks_accelerators_path_idx" ON "membership_tiers_blocks_accelerators" USING btree ("_path");
  CREATE UNIQUE INDEX "membership_tiers_blocks_accelerators_locales_locale_parent_i" ON "membership_tiers_blocks_accelerators_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_posts_feed_filter_items_order_idx" ON "membership_tiers_blocks_posts_feed_filter_items" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_posts_feed_filter_items_parent_id_idx" ON "membership_tiers_blocks_posts_feed_filter_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "membership_tiers_blocks_posts_feed_filter_items_locales_loca" ON "membership_tiers_blocks_posts_feed_filter_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_posts_feed_order_idx" ON "membership_tiers_blocks_posts_feed" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_posts_feed_parent_id_idx" ON "membership_tiers_blocks_posts_feed" USING btree ("_parent_id");
  CREATE INDEX "membership_tiers_blocks_posts_feed_path_idx" ON "membership_tiers_blocks_posts_feed" USING btree ("_path");
  CREATE UNIQUE INDEX "membership_tiers_blocks_posts_feed_locales_locale_parent_id_" ON "membership_tiers_blocks_posts_feed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_gallery_items_order_idx" ON "membership_tiers_blocks_gallery_items" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_gallery_items_parent_id_idx" ON "membership_tiers_blocks_gallery_items" USING btree ("_parent_id");
  CREATE INDEX "membership_tiers_blocks_gallery_items_image_idx" ON "membership_tiers_blocks_gallery_items" USING btree ("image_id");
  CREATE UNIQUE INDEX "membership_tiers_blocks_gallery_items_locales_locale_parent_" ON "membership_tiers_blocks_gallery_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_gallery_order_idx" ON "membership_tiers_blocks_gallery" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_gallery_parent_id_idx" ON "membership_tiers_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX "membership_tiers_blocks_gallery_path_idx" ON "membership_tiers_blocks_gallery" USING btree ("_path");
  CREATE INDEX "membership_tiers_blocks_values_list_items_order_idx" ON "membership_tiers_blocks_values_list_items" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_values_list_items_parent_id_idx" ON "membership_tiers_blocks_values_list_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "membership_tiers_blocks_values_list_items_locales_locale_par" ON "membership_tiers_blocks_values_list_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_values_list_order_idx" ON "membership_tiers_blocks_values_list" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_values_list_parent_id_idx" ON "membership_tiers_blocks_values_list" USING btree ("_parent_id");
  CREATE INDEX "membership_tiers_blocks_values_list_path_idx" ON "membership_tiers_blocks_values_list" USING btree ("_path");
  CREATE UNIQUE INDEX "membership_tiers_blocks_values_list_locales_locale_parent_id" ON "membership_tiers_blocks_values_list_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_history_grid_paragraphs_order_idx" ON "membership_tiers_blocks_history_grid_paragraphs" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_history_grid_paragraphs_parent_id_idx" ON "membership_tiers_blocks_history_grid_paragraphs" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "membership_tiers_blocks_history_grid_paragraphs_locales_loca" ON "membership_tiers_blocks_history_grid_paragraphs_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_history_grid_order_idx" ON "membership_tiers_blocks_history_grid" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_history_grid_parent_id_idx" ON "membership_tiers_blocks_history_grid" USING btree ("_parent_id");
  CREATE INDEX "membership_tiers_blocks_history_grid_path_idx" ON "membership_tiers_blocks_history_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "membership_tiers_blocks_history_grid_locales_locale_parent_i" ON "membership_tiers_blocks_history_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_stats_row_items_order_idx" ON "membership_tiers_blocks_stats_row_items" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_stats_row_items_parent_id_idx" ON "membership_tiers_blocks_stats_row_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "membership_tiers_blocks_stats_row_items_locales_locale_paren" ON "membership_tiers_blocks_stats_row_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_stats_row_order_idx" ON "membership_tiers_blocks_stats_row" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_stats_row_parent_id_idx" ON "membership_tiers_blocks_stats_row" USING btree ("_parent_id");
  CREATE INDEX "membership_tiers_blocks_stats_row_path_idx" ON "membership_tiers_blocks_stats_row" USING btree ("_path");
  CREATE INDEX "membership_tiers_blocks_highlighted_text_order_idx" ON "membership_tiers_blocks_highlighted_text" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_highlighted_text_parent_id_idx" ON "membership_tiers_blocks_highlighted_text" USING btree ("_parent_id");
  CREATE INDEX "membership_tiers_blocks_highlighted_text_path_idx" ON "membership_tiers_blocks_highlighted_text" USING btree ("_path");
  CREATE UNIQUE INDEX "membership_tiers_blocks_highlighted_text_locales_locale_pare" ON "membership_tiers_blocks_highlighted_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_timeline_items_lines_order_idx" ON "membership_tiers_blocks_timeline_items_lines" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_timeline_items_lines_parent_id_idx" ON "membership_tiers_blocks_timeline_items_lines" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "membership_tiers_blocks_timeline_items_lines_locales_locale_" ON "membership_tiers_blocks_timeline_items_lines_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_timeline_items_order_idx" ON "membership_tiers_blocks_timeline_items" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_timeline_items_parent_id_idx" ON "membership_tiers_blocks_timeline_items" USING btree ("_parent_id");
  CREATE INDEX "membership_tiers_blocks_timeline_order_idx" ON "membership_tiers_blocks_timeline" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_timeline_parent_id_idx" ON "membership_tiers_blocks_timeline" USING btree ("_parent_id");
  CREATE INDEX "membership_tiers_blocks_timeline_path_idx" ON "membership_tiers_blocks_timeline" USING btree ("_path");
  CREATE UNIQUE INDEX "membership_tiers_blocks_timeline_locales_locale_parent_id_un" ON "membership_tiers_blocks_timeline_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_carousel_slides_order_idx" ON "membership_tiers_blocks_carousel_slides" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_carousel_slides_parent_id_idx" ON "membership_tiers_blocks_carousel_slides" USING btree ("_parent_id");
  CREATE INDEX "membership_tiers_blocks_carousel_slides_image_idx" ON "membership_tiers_blocks_carousel_slides" USING btree ("image_id");
  CREATE UNIQUE INDEX "membership_tiers_blocks_carousel_slides_locales_locale_paren" ON "membership_tiers_blocks_carousel_slides_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_carousel_order_idx" ON "membership_tiers_blocks_carousel" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_carousel_parent_id_idx" ON "membership_tiers_blocks_carousel" USING btree ("_parent_id");
  CREATE INDEX "membership_tiers_blocks_carousel_path_idx" ON "membership_tiers_blocks_carousel" USING btree ("_path");
  CREATE INDEX "membership_tiers_blocks_people_grid_order_idx" ON "membership_tiers_blocks_people_grid" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_people_grid_parent_id_idx" ON "membership_tiers_blocks_people_grid" USING btree ("_parent_id");
  CREATE INDEX "membership_tiers_blocks_people_grid_path_idx" ON "membership_tiers_blocks_people_grid" USING btree ("_path");
  CREATE INDEX "membership_tiers_blocks_people_grid_hub_idx" ON "membership_tiers_blocks_people_grid" USING btree ("hub_id");
  CREATE UNIQUE INDEX "membership_tiers_blocks_people_grid_locales_locale_parent_id" ON "membership_tiers_blocks_people_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_creed_order_idx" ON "membership_tiers_blocks_creed" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_creed_parent_id_idx" ON "membership_tiers_blocks_creed" USING btree ("_parent_id");
  CREATE INDEX "membership_tiers_blocks_creed_path_idx" ON "membership_tiers_blocks_creed" USING btree ("_path");
  CREATE INDEX "membership_tiers_blocks_creed_background_idx" ON "membership_tiers_blocks_creed" USING btree ("background_id");
  CREATE UNIQUE INDEX "membership_tiers_blocks_creed_locales_locale_parent_id_uniqu" ON "membership_tiers_blocks_creed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_section_intro_order_idx" ON "membership_tiers_blocks_section_intro" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_section_intro_parent_id_idx" ON "membership_tiers_blocks_section_intro" USING btree ("_parent_id");
  CREATE INDEX "membership_tiers_blocks_section_intro_path_idx" ON "membership_tiers_blocks_section_intro" USING btree ("_path");
  CREATE UNIQUE INDEX "membership_tiers_blocks_section_intro_locales_locale_parent_" ON "membership_tiers_blocks_section_intro_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_data_table_filters_order_idx" ON "membership_tiers_blocks_data_table_filters" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_data_table_filters_parent_id_idx" ON "membership_tiers_blocks_data_table_filters" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "membership_tiers_blocks_data_table_filters_locales_locale_pa" ON "membership_tiers_blocks_data_table_filters_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_data_table_columns_order_idx" ON "membership_tiers_blocks_data_table_columns" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_data_table_columns_parent_id_idx" ON "membership_tiers_blocks_data_table_columns" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "membership_tiers_blocks_data_table_columns_locales_locale_pa" ON "membership_tiers_blocks_data_table_columns_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_data_table_rows_cells_order_idx" ON "membership_tiers_blocks_data_table_rows_cells" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_data_table_rows_cells_parent_id_idx" ON "membership_tiers_blocks_data_table_rows_cells" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "membership_tiers_blocks_data_table_rows_cells_locales_locale" ON "membership_tiers_blocks_data_table_rows_cells_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_data_table_rows_order_idx" ON "membership_tiers_blocks_data_table_rows" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_data_table_rows_parent_id_idx" ON "membership_tiers_blocks_data_table_rows" USING btree ("_parent_id");
  CREATE INDEX "membership_tiers_blocks_data_table_order_idx" ON "membership_tiers_blocks_data_table" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_data_table_parent_id_idx" ON "membership_tiers_blocks_data_table" USING btree ("_parent_id");
  CREATE INDEX "membership_tiers_blocks_data_table_path_idx" ON "membership_tiers_blocks_data_table" USING btree ("_path");
  CREATE UNIQUE INDEX "membership_tiers_blocks_data_table_locales_locale_parent_id_" ON "membership_tiers_blocks_data_table_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_media_card_order_idx" ON "membership_tiers_blocks_media_card" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_media_card_parent_id_idx" ON "membership_tiers_blocks_media_card" USING btree ("_parent_id");
  CREATE INDEX "membership_tiers_blocks_media_card_path_idx" ON "membership_tiers_blocks_media_card" USING btree ("_path");
  CREATE INDEX "membership_tiers_blocks_media_card_image_idx" ON "membership_tiers_blocks_media_card" USING btree ("image_id");
  CREATE UNIQUE INDEX "membership_tiers_blocks_media_card_locales_locale_parent_id_" ON "membership_tiers_blocks_media_card_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_department_grid_order_idx" ON "membership_tiers_blocks_department_grid" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_department_grid_parent_id_idx" ON "membership_tiers_blocks_department_grid" USING btree ("_parent_id");
  CREATE INDEX "membership_tiers_blocks_department_grid_path_idx" ON "membership_tiers_blocks_department_grid" USING btree ("_path");
  CREATE UNIQUE INDEX "membership_tiers_blocks_department_grid_locales_locale_paren" ON "membership_tiers_blocks_department_grid_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_contact_box_order_idx" ON "membership_tiers_blocks_contact_box" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_contact_box_parent_id_idx" ON "membership_tiers_blocks_contact_box" USING btree ("_parent_id");
  CREATE INDEX "membership_tiers_blocks_contact_box_path_idx" ON "membership_tiers_blocks_contact_box" USING btree ("_path");
  CREATE UNIQUE INDEX "membership_tiers_blocks_contact_box_locales_locale_parent_id" ON "membership_tiers_blocks_contact_box_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_contact_form_details_items_order_idx" ON "membership_tiers_blocks_contact_form_details_items" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_contact_form_details_items_parent_id_idx" ON "membership_tiers_blocks_contact_form_details_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "membership_tiers_blocks_contact_form_details_items_locales_l" ON "membership_tiers_blocks_contact_form_details_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_contact_form_details_order_idx" ON "membership_tiers_blocks_contact_form_details" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_contact_form_details_parent_id_idx" ON "membership_tiers_blocks_contact_form_details" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "membership_tiers_blocks_contact_form_details_locales_locale_" ON "membership_tiers_blocks_contact_form_details_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_contact_form_order_idx" ON "membership_tiers_blocks_contact_form" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_contact_form_parent_id_idx" ON "membership_tiers_blocks_contact_form" USING btree ("_parent_id");
  CREATE INDEX "membership_tiers_blocks_contact_form_path_idx" ON "membership_tiers_blocks_contact_form" USING btree ("_path");
  CREATE UNIQUE INDEX "membership_tiers_blocks_contact_form_locales_locale_parent_i" ON "membership_tiers_blocks_contact_form_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_process_steps_items_order_idx" ON "membership_tiers_blocks_process_steps_items" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_process_steps_items_parent_id_idx" ON "membership_tiers_blocks_process_steps_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "membership_tiers_blocks_process_steps_items_locales_locale_p" ON "membership_tiers_blocks_process_steps_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_process_steps_order_idx" ON "membership_tiers_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_process_steps_parent_id_idx" ON "membership_tiers_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "membership_tiers_blocks_process_steps_path_idx" ON "membership_tiers_blocks_process_steps" USING btree ("_path");
  CREATE UNIQUE INDEX "membership_tiers_blocks_process_steps_locales_locale_parent_" ON "membership_tiers_blocks_process_steps_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_figure_order_idx" ON "membership_tiers_blocks_figure" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_figure_parent_id_idx" ON "membership_tiers_blocks_figure" USING btree ("_parent_id");
  CREATE INDEX "membership_tiers_blocks_figure_path_idx" ON "membership_tiers_blocks_figure" USING btree ("_path");
  CREATE INDEX "membership_tiers_blocks_figure_image_idx" ON "membership_tiers_blocks_figure" USING btree ("image_id");
  CREATE UNIQUE INDEX "membership_tiers_blocks_figure_locales_locale_parent_id_uniq" ON "membership_tiers_blocks_figure_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_region_map_regions_order_idx" ON "membership_tiers_blocks_region_map_regions" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_region_map_regions_parent_id_idx" ON "membership_tiers_blocks_region_map_regions" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "membership_tiers_blocks_region_map_regions_locales_locale_pa" ON "membership_tiers_blocks_region_map_regions_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_blocks_region_map_order_idx" ON "membership_tiers_blocks_region_map" USING btree ("_order");
  CREATE INDEX "membership_tiers_blocks_region_map_parent_id_idx" ON "membership_tiers_blocks_region_map" USING btree ("_parent_id");
  CREATE INDEX "membership_tiers_blocks_region_map_path_idx" ON "membership_tiers_blocks_region_map" USING btree ("_path");
  CREATE UNIQUE INDEX "membership_tiers_blocks_region_map_locales_locale_parent_id_" ON "membership_tiers_blocks_region_map_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "membership_tiers_slug_idx" ON "membership_tiers" USING btree ("slug");
  CREATE INDEX "membership_tiers_updated_at_idx" ON "membership_tiers" USING btree ("updated_at");
  CREATE INDEX "membership_tiers_created_at_idx" ON "membership_tiers" USING btree ("created_at");
  CREATE UNIQUE INDEX "membership_tiers_locales_locale_parent_id_unique" ON "membership_tiers_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "membership_tiers_rels_order_idx" ON "membership_tiers_rels" USING btree ("order");
  CREATE INDEX "membership_tiers_rels_parent_idx" ON "membership_tiers_rels" USING btree ("parent_id");
  CREATE INDEX "membership_tiers_rels_path_idx" ON "membership_tiers_rels" USING btree ("path");
  CREATE INDEX "membership_tiers_rels_pages_id_idx" ON "membership_tiers_rels" USING btree ("pages_id");
  CREATE INDEX "membership_tiers_rels_posts_id_idx" ON "membership_tiers_rels" USING btree ("posts_id");
  CREATE INDEX "membership_tiers_rels_departments_id_idx" ON "membership_tiers_rels" USING btree ("departments_id");
  CREATE INDEX "membership_tiers_rels_hubs_id_idx" ON "membership_tiers_rels" USING btree ("hubs_id");
  CREATE INDEX "membership_tiers_rels_membership_tiers_id_idx" ON "membership_tiers_rels" USING btree ("membership_tiers_id");
  CREATE INDEX "membership_tiers_rels_board_members_id_idx" ON "membership_tiers_rels" USING btree ("board_members_id");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_card_sizes_card_filename_idx" ON "media" USING btree ("sizes_card_filename");
  CREATE INDEX "media_sizes_wide_sizes_wide_filename_idx" ON "media" USING btree ("sizes_wide_filename");
  CREATE UNIQUE INDEX "media_locales_locale_parent_id_unique" ON "media_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "members_sessions_order_idx" ON "members_sessions" USING btree ("_order");
  CREATE INDEX "members_sessions_parent_id_idx" ON "members_sessions" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "members_phone_idx" ON "members" USING btree ("phone");
  CREATE INDEX "members_tier_idx" ON "members" USING btree ("tier_id");
  CREATE INDEX "members_updated_at_idx" ON "members" USING btree ("updated_at");
  CREATE INDEX "members_created_at_idx" ON "members" USING btree ("created_at");
  CREATE UNIQUE INDEX "members_email_idx" ON "members" USING btree ("email");
  CREATE INDEX "feedback_updated_at_idx" ON "feedback" USING btree ("updated_at");
  CREATE INDEX "feedback_created_at_idx" ON "feedback" USING btree ("created_at");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("posts_id");
  CREATE INDEX "payload_locked_documents_rels_departments_id_idx" ON "payload_locked_documents_rels" USING btree ("departments_id");
  CREATE INDEX "payload_locked_documents_rels_hubs_id_idx" ON "payload_locked_documents_rels" USING btree ("hubs_id");
  CREATE INDEX "payload_locked_documents_rels_board_members_id_idx" ON "payload_locked_documents_rels" USING btree ("board_members_id");
  CREATE INDEX "payload_locked_documents_rels_membership_tiers_id_idx" ON "payload_locked_documents_rels" USING btree ("membership_tiers_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_members_id_idx" ON "payload_locked_documents_rels" USING btree ("members_id");
  CREATE INDEX "payload_locked_documents_rels_feedback_id_idx" ON "payload_locked_documents_rels" USING btree ("feedback_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_members_id_idx" ON "payload_preferences_rels" USING btree ("members_id");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "site_settings_announcement_links_order_idx" ON "site_settings_announcement_links" USING btree ("_order");
  CREATE INDEX "site_settings_announcement_links_parent_id_idx" ON "site_settings_announcement_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "site_settings_announcement_links_locales_locale_parent_id_un" ON "site_settings_announcement_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "site_settings_header_nav_order_idx" ON "site_settings_header_nav" USING btree ("_order");
  CREATE INDEX "site_settings_header_nav_parent_id_idx" ON "site_settings_header_nav" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "site_settings_header_nav_locales_locale_parent_id_unique" ON "site_settings_header_nav_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "site_settings_footer_top_links_order_idx" ON "site_settings_footer_top_links" USING btree ("_order");
  CREATE INDEX "site_settings_footer_top_links_parent_id_idx" ON "site_settings_footer_top_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "site_settings_footer_top_links_locales_locale_parent_id_uniq" ON "site_settings_footer_top_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "site_settings_footer_contact_items_order_idx" ON "site_settings_footer_contact_items" USING btree ("_order");
  CREATE INDEX "site_settings_footer_contact_items_parent_id_idx" ON "site_settings_footer_contact_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "site_settings_footer_contact_items_locales_locale_parent_id_" ON "site_settings_footer_contact_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "site_settings_footer_nav_groups_links_order_idx" ON "site_settings_footer_nav_groups_links" USING btree ("_order");
  CREATE INDEX "site_settings_footer_nav_groups_links_parent_id_idx" ON "site_settings_footer_nav_groups_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "site_settings_footer_nav_groups_links_locales_locale_parent_" ON "site_settings_footer_nav_groups_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "site_settings_footer_nav_groups_order_idx" ON "site_settings_footer_nav_groups" USING btree ("_order");
  CREATE INDEX "site_settings_footer_nav_groups_parent_id_idx" ON "site_settings_footer_nav_groups" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "site_settings_footer_nav_groups_locales_locale_parent_id_uni" ON "site_settings_footer_nav_groups_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "site_settings_footer_social_links_order_idx" ON "site_settings_footer_social_links" USING btree ("_order");
  CREATE INDEX "site_settings_footer_social_links_parent_id_idx" ON "site_settings_footer_social_links" USING btree ("_parent_id");
  CREATE INDEX "site_settings_footer_legal_links_order_idx" ON "site_settings_footer_legal_links" USING btree ("_order");
  CREATE INDEX "site_settings_footer_legal_links_parent_id_idx" ON "site_settings_footer_legal_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "site_settings_footer_legal_links_locales_locale_parent_id_un" ON "site_settings_footer_legal_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "site_settings_header_header_logo_idx" ON "site_settings" USING btree ("header_logo_id");
  CREATE INDEX "site_settings_footer_footer_logo_idx" ON "site_settings" USING btree ("footer_logo_id");
  CREATE UNIQUE INDEX "site_settings_locales_locale_parent_id_unique" ON "site_settings_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "site_settings_rels_order_idx" ON "site_settings_rels" USING btree ("order");
  CREATE INDEX "site_settings_rels_parent_idx" ON "site_settings_rels" USING btree ("parent_id");
  CREATE INDEX "site_settings_rels_path_idx" ON "site_settings_rels" USING btree ("path");
  CREATE INDEX "site_settings_rels_pages_id_idx" ON "site_settings_rels" USING btree ("pages_id");
  CREATE INDEX "site_settings_rels_posts_id_idx" ON "site_settings_rels" USING btree ("posts_id");
  CREATE INDEX "site_settings_rels_departments_id_idx" ON "site_settings_rels" USING btree ("departments_id");
  CREATE INDEX "site_settings_rels_hubs_id_idx" ON "site_settings_rels" USING btree ("hubs_id");
  CREATE INDEX "site_settings_rels_membership_tiers_id_idx" ON "site_settings_rels" USING btree ("membership_tiers_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_page_banner_links" CASCADE;
  DROP TABLE "pages_blocks_page_banner_links_locales" CASCADE;
  DROP TABLE "pages_blocks_page_banner" CASCADE;
  DROP TABLE "pages_blocks_page_banner_locales" CASCADE;
  DROP TABLE "pages_blocks_section_tabs_items" CASCADE;
  DROP TABLE "pages_blocks_section_tabs_items_locales" CASCADE;
  DROP TABLE "pages_blocks_section_tabs" CASCADE;
  DROP TABLE "pages_blocks_rich_text" CASCADE;
  DROP TABLE "pages_blocks_rich_text_locales" CASCADE;
  DROP TABLE "pages_blocks_card_grid_items" CASCADE;
  DROP TABLE "pages_blocks_card_grid_items_locales" CASCADE;
  DROP TABLE "pages_blocks_card_grid" CASCADE;
  DROP TABLE "pages_blocks_card_grid_locales" CASCADE;
  DROP TABLE "pages_blocks_quote_banner" CASCADE;
  DROP TABLE "pages_blocks_quote_banner_locales" CASCADE;
  DROP TABLE "pages_blocks_accelerators_items" CASCADE;
  DROP TABLE "pages_blocks_accelerators_items_locales" CASCADE;
  DROP TABLE "pages_blocks_accelerators" CASCADE;
  DROP TABLE "pages_blocks_accelerators_locales" CASCADE;
  DROP TABLE "pages_blocks_posts_feed_filter_items" CASCADE;
  DROP TABLE "pages_blocks_posts_feed_filter_items_locales" CASCADE;
  DROP TABLE "pages_blocks_posts_feed" CASCADE;
  DROP TABLE "pages_blocks_posts_feed_locales" CASCADE;
  DROP TABLE "pages_blocks_gallery_items" CASCADE;
  DROP TABLE "pages_blocks_gallery_items_locales" CASCADE;
  DROP TABLE "pages_blocks_gallery" CASCADE;
  DROP TABLE "pages_blocks_values_list_items" CASCADE;
  DROP TABLE "pages_blocks_values_list_items_locales" CASCADE;
  DROP TABLE "pages_blocks_values_list" CASCADE;
  DROP TABLE "pages_blocks_values_list_locales" CASCADE;
  DROP TABLE "pages_blocks_history_grid_paragraphs" CASCADE;
  DROP TABLE "pages_blocks_history_grid_paragraphs_locales" CASCADE;
  DROP TABLE "pages_blocks_history_grid" CASCADE;
  DROP TABLE "pages_blocks_history_grid_locales" CASCADE;
  DROP TABLE "pages_blocks_stats_row_items" CASCADE;
  DROP TABLE "pages_blocks_stats_row_items_locales" CASCADE;
  DROP TABLE "pages_blocks_stats_row" CASCADE;
  DROP TABLE "pages_blocks_highlighted_text" CASCADE;
  DROP TABLE "pages_blocks_highlighted_text_locales" CASCADE;
  DROP TABLE "pages_blocks_timeline_items_lines" CASCADE;
  DROP TABLE "pages_blocks_timeline_items_lines_locales" CASCADE;
  DROP TABLE "pages_blocks_timeline_items" CASCADE;
  DROP TABLE "pages_blocks_timeline" CASCADE;
  DROP TABLE "pages_blocks_timeline_locales" CASCADE;
  DROP TABLE "pages_blocks_carousel_slides" CASCADE;
  DROP TABLE "pages_blocks_carousel_slides_locales" CASCADE;
  DROP TABLE "pages_blocks_carousel" CASCADE;
  DROP TABLE "pages_blocks_people_grid" CASCADE;
  DROP TABLE "pages_blocks_people_grid_locales" CASCADE;
  DROP TABLE "pages_blocks_creed" CASCADE;
  DROP TABLE "pages_blocks_creed_locales" CASCADE;
  DROP TABLE "pages_blocks_section_intro" CASCADE;
  DROP TABLE "pages_blocks_section_intro_locales" CASCADE;
  DROP TABLE "pages_blocks_data_table_filters" CASCADE;
  DROP TABLE "pages_blocks_data_table_filters_locales" CASCADE;
  DROP TABLE "pages_blocks_data_table_columns" CASCADE;
  DROP TABLE "pages_blocks_data_table_columns_locales" CASCADE;
  DROP TABLE "pages_blocks_data_table_rows_cells" CASCADE;
  DROP TABLE "pages_blocks_data_table_rows_cells_locales" CASCADE;
  DROP TABLE "pages_blocks_data_table_rows" CASCADE;
  DROP TABLE "pages_blocks_data_table" CASCADE;
  DROP TABLE "pages_blocks_data_table_locales" CASCADE;
  DROP TABLE "pages_blocks_media_card" CASCADE;
  DROP TABLE "pages_blocks_media_card_locales" CASCADE;
  DROP TABLE "pages_blocks_department_grid" CASCADE;
  DROP TABLE "pages_blocks_department_grid_locales" CASCADE;
  DROP TABLE "pages_blocks_contact_box" CASCADE;
  DROP TABLE "pages_blocks_contact_box_locales" CASCADE;
  DROP TABLE "pages_blocks_contact_form_details_items" CASCADE;
  DROP TABLE "pages_blocks_contact_form_details_items_locales" CASCADE;
  DROP TABLE "pages_blocks_contact_form_details" CASCADE;
  DROP TABLE "pages_blocks_contact_form_details_locales" CASCADE;
  DROP TABLE "pages_blocks_contact_form" CASCADE;
  DROP TABLE "pages_blocks_contact_form_locales" CASCADE;
  DROP TABLE "pages_blocks_process_steps_items" CASCADE;
  DROP TABLE "pages_blocks_process_steps_items_locales" CASCADE;
  DROP TABLE "pages_blocks_process_steps" CASCADE;
  DROP TABLE "pages_blocks_process_steps_locales" CASCADE;
  DROP TABLE "pages_blocks_figure" CASCADE;
  DROP TABLE "pages_blocks_figure_locales" CASCADE;
  DROP TABLE "pages_blocks_region_map_regions" CASCADE;
  DROP TABLE "pages_blocks_region_map_regions_locales" CASCADE;
  DROP TABLE "pages_blocks_region_map" CASCADE;
  DROP TABLE "pages_blocks_region_map_locales" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_locales" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_blocks_page_banner_links" CASCADE;
  DROP TABLE "_pages_v_blocks_page_banner_links_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_page_banner" CASCADE;
  DROP TABLE "_pages_v_blocks_page_banner_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_section_tabs_items" CASCADE;
  DROP TABLE "_pages_v_blocks_section_tabs_items_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_section_tabs" CASCADE;
  DROP TABLE "_pages_v_blocks_rich_text" CASCADE;
  DROP TABLE "_pages_v_blocks_rich_text_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_card_grid_items" CASCADE;
  DROP TABLE "_pages_v_blocks_card_grid_items_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_card_grid" CASCADE;
  DROP TABLE "_pages_v_blocks_card_grid_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_quote_banner" CASCADE;
  DROP TABLE "_pages_v_blocks_quote_banner_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_accelerators_items" CASCADE;
  DROP TABLE "_pages_v_blocks_accelerators_items_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_accelerators" CASCADE;
  DROP TABLE "_pages_v_blocks_accelerators_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_posts_feed_filter_items" CASCADE;
  DROP TABLE "_pages_v_blocks_posts_feed_filter_items_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_posts_feed" CASCADE;
  DROP TABLE "_pages_v_blocks_posts_feed_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery_items" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery_items_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery" CASCADE;
  DROP TABLE "_pages_v_blocks_values_list_items" CASCADE;
  DROP TABLE "_pages_v_blocks_values_list_items_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_values_list" CASCADE;
  DROP TABLE "_pages_v_blocks_values_list_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_history_grid_paragraphs" CASCADE;
  DROP TABLE "_pages_v_blocks_history_grid_paragraphs_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_history_grid" CASCADE;
  DROP TABLE "_pages_v_blocks_history_grid_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_stats_row_items" CASCADE;
  DROP TABLE "_pages_v_blocks_stats_row_items_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_stats_row" CASCADE;
  DROP TABLE "_pages_v_blocks_highlighted_text" CASCADE;
  DROP TABLE "_pages_v_blocks_highlighted_text_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline_items_lines" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline_items_lines_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline_items" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_carousel_slides" CASCADE;
  DROP TABLE "_pages_v_blocks_carousel_slides_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_carousel" CASCADE;
  DROP TABLE "_pages_v_blocks_people_grid" CASCADE;
  DROP TABLE "_pages_v_blocks_people_grid_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_creed" CASCADE;
  DROP TABLE "_pages_v_blocks_creed_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_section_intro" CASCADE;
  DROP TABLE "_pages_v_blocks_section_intro_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_data_table_filters" CASCADE;
  DROP TABLE "_pages_v_blocks_data_table_filters_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_data_table_columns" CASCADE;
  DROP TABLE "_pages_v_blocks_data_table_columns_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_data_table_rows_cells" CASCADE;
  DROP TABLE "_pages_v_blocks_data_table_rows_cells_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_data_table_rows" CASCADE;
  DROP TABLE "_pages_v_blocks_data_table" CASCADE;
  DROP TABLE "_pages_v_blocks_data_table_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_media_card" CASCADE;
  DROP TABLE "_pages_v_blocks_media_card_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_department_grid" CASCADE;
  DROP TABLE "_pages_v_blocks_department_grid_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_contact_box" CASCADE;
  DROP TABLE "_pages_v_blocks_contact_box_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_contact_form_details_items" CASCADE;
  DROP TABLE "_pages_v_blocks_contact_form_details_items_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_contact_form_details" CASCADE;
  DROP TABLE "_pages_v_blocks_contact_form_details_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_contact_form" CASCADE;
  DROP TABLE "_pages_v_blocks_contact_form_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_process_steps_items" CASCADE;
  DROP TABLE "_pages_v_blocks_process_steps_items_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_process_steps" CASCADE;
  DROP TABLE "_pages_v_blocks_process_steps_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_figure" CASCADE;
  DROP TABLE "_pages_v_blocks_figure_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_region_map_regions" CASCADE;
  DROP TABLE "_pages_v_blocks_region_map_regions_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_region_map" CASCADE;
  DROP TABLE "_pages_v_blocks_region_map_locales" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_locales" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "posts_blocks_page_banner_links" CASCADE;
  DROP TABLE "posts_blocks_page_banner_links_locales" CASCADE;
  DROP TABLE "posts_blocks_page_banner" CASCADE;
  DROP TABLE "posts_blocks_page_banner_locales" CASCADE;
  DROP TABLE "posts_blocks_section_tabs_items" CASCADE;
  DROP TABLE "posts_blocks_section_tabs_items_locales" CASCADE;
  DROP TABLE "posts_blocks_section_tabs" CASCADE;
  DROP TABLE "posts_blocks_rich_text" CASCADE;
  DROP TABLE "posts_blocks_rich_text_locales" CASCADE;
  DROP TABLE "posts_blocks_card_grid_items" CASCADE;
  DROP TABLE "posts_blocks_card_grid_items_locales" CASCADE;
  DROP TABLE "posts_blocks_card_grid" CASCADE;
  DROP TABLE "posts_blocks_card_grid_locales" CASCADE;
  DROP TABLE "posts_blocks_quote_banner" CASCADE;
  DROP TABLE "posts_blocks_quote_banner_locales" CASCADE;
  DROP TABLE "posts_blocks_accelerators_items" CASCADE;
  DROP TABLE "posts_blocks_accelerators_items_locales" CASCADE;
  DROP TABLE "posts_blocks_accelerators" CASCADE;
  DROP TABLE "posts_blocks_accelerators_locales" CASCADE;
  DROP TABLE "posts_blocks_posts_feed_filter_items" CASCADE;
  DROP TABLE "posts_blocks_posts_feed_filter_items_locales" CASCADE;
  DROP TABLE "posts_blocks_posts_feed" CASCADE;
  DROP TABLE "posts_blocks_posts_feed_locales" CASCADE;
  DROP TABLE "posts_blocks_gallery_items" CASCADE;
  DROP TABLE "posts_blocks_gallery_items_locales" CASCADE;
  DROP TABLE "posts_blocks_gallery" CASCADE;
  DROP TABLE "posts_blocks_values_list_items" CASCADE;
  DROP TABLE "posts_blocks_values_list_items_locales" CASCADE;
  DROP TABLE "posts_blocks_values_list" CASCADE;
  DROP TABLE "posts_blocks_values_list_locales" CASCADE;
  DROP TABLE "posts_blocks_history_grid_paragraphs" CASCADE;
  DROP TABLE "posts_blocks_history_grid_paragraphs_locales" CASCADE;
  DROP TABLE "posts_blocks_history_grid" CASCADE;
  DROP TABLE "posts_blocks_history_grid_locales" CASCADE;
  DROP TABLE "posts_blocks_stats_row_items" CASCADE;
  DROP TABLE "posts_blocks_stats_row_items_locales" CASCADE;
  DROP TABLE "posts_blocks_stats_row" CASCADE;
  DROP TABLE "posts_blocks_highlighted_text" CASCADE;
  DROP TABLE "posts_blocks_highlighted_text_locales" CASCADE;
  DROP TABLE "posts_blocks_timeline_items_lines" CASCADE;
  DROP TABLE "posts_blocks_timeline_items_lines_locales" CASCADE;
  DROP TABLE "posts_blocks_timeline_items" CASCADE;
  DROP TABLE "posts_blocks_timeline" CASCADE;
  DROP TABLE "posts_blocks_timeline_locales" CASCADE;
  DROP TABLE "posts_blocks_carousel_slides" CASCADE;
  DROP TABLE "posts_blocks_carousel_slides_locales" CASCADE;
  DROP TABLE "posts_blocks_carousel" CASCADE;
  DROP TABLE "posts_blocks_people_grid" CASCADE;
  DROP TABLE "posts_blocks_people_grid_locales" CASCADE;
  DROP TABLE "posts_blocks_creed" CASCADE;
  DROP TABLE "posts_blocks_creed_locales" CASCADE;
  DROP TABLE "posts_blocks_section_intro" CASCADE;
  DROP TABLE "posts_blocks_section_intro_locales" CASCADE;
  DROP TABLE "posts_blocks_data_table_filters" CASCADE;
  DROP TABLE "posts_blocks_data_table_filters_locales" CASCADE;
  DROP TABLE "posts_blocks_data_table_columns" CASCADE;
  DROP TABLE "posts_blocks_data_table_columns_locales" CASCADE;
  DROP TABLE "posts_blocks_data_table_rows_cells" CASCADE;
  DROP TABLE "posts_blocks_data_table_rows_cells_locales" CASCADE;
  DROP TABLE "posts_blocks_data_table_rows" CASCADE;
  DROP TABLE "posts_blocks_data_table" CASCADE;
  DROP TABLE "posts_blocks_data_table_locales" CASCADE;
  DROP TABLE "posts_blocks_media_card" CASCADE;
  DROP TABLE "posts_blocks_media_card_locales" CASCADE;
  DROP TABLE "posts_blocks_department_grid" CASCADE;
  DROP TABLE "posts_blocks_department_grid_locales" CASCADE;
  DROP TABLE "posts_blocks_contact_box" CASCADE;
  DROP TABLE "posts_blocks_contact_box_locales" CASCADE;
  DROP TABLE "posts_blocks_contact_form_details_items" CASCADE;
  DROP TABLE "posts_blocks_contact_form_details_items_locales" CASCADE;
  DROP TABLE "posts_blocks_contact_form_details" CASCADE;
  DROP TABLE "posts_blocks_contact_form_details_locales" CASCADE;
  DROP TABLE "posts_blocks_contact_form" CASCADE;
  DROP TABLE "posts_blocks_contact_form_locales" CASCADE;
  DROP TABLE "posts_blocks_process_steps_items" CASCADE;
  DROP TABLE "posts_blocks_process_steps_items_locales" CASCADE;
  DROP TABLE "posts_blocks_process_steps" CASCADE;
  DROP TABLE "posts_blocks_process_steps_locales" CASCADE;
  DROP TABLE "posts_blocks_figure" CASCADE;
  DROP TABLE "posts_blocks_figure_locales" CASCADE;
  DROP TABLE "posts_blocks_region_map_regions" CASCADE;
  DROP TABLE "posts_blocks_region_map_regions_locales" CASCADE;
  DROP TABLE "posts_blocks_region_map" CASCADE;
  DROP TABLE "posts_blocks_region_map_locales" CASCADE;
  DROP TABLE "posts" CASCADE;
  DROP TABLE "posts_locales" CASCADE;
  DROP TABLE "posts_rels" CASCADE;
  DROP TABLE "_posts_v_blocks_page_banner_links" CASCADE;
  DROP TABLE "_posts_v_blocks_page_banner_links_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_page_banner" CASCADE;
  DROP TABLE "_posts_v_blocks_page_banner_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_section_tabs_items" CASCADE;
  DROP TABLE "_posts_v_blocks_section_tabs_items_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_section_tabs" CASCADE;
  DROP TABLE "_posts_v_blocks_rich_text" CASCADE;
  DROP TABLE "_posts_v_blocks_rich_text_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_card_grid_items" CASCADE;
  DROP TABLE "_posts_v_blocks_card_grid_items_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_card_grid" CASCADE;
  DROP TABLE "_posts_v_blocks_card_grid_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_quote_banner" CASCADE;
  DROP TABLE "_posts_v_blocks_quote_banner_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_accelerators_items" CASCADE;
  DROP TABLE "_posts_v_blocks_accelerators_items_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_accelerators" CASCADE;
  DROP TABLE "_posts_v_blocks_accelerators_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_posts_feed_filter_items" CASCADE;
  DROP TABLE "_posts_v_blocks_posts_feed_filter_items_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_posts_feed" CASCADE;
  DROP TABLE "_posts_v_blocks_posts_feed_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_gallery_items" CASCADE;
  DROP TABLE "_posts_v_blocks_gallery_items_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_gallery" CASCADE;
  DROP TABLE "_posts_v_blocks_values_list_items" CASCADE;
  DROP TABLE "_posts_v_blocks_values_list_items_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_values_list" CASCADE;
  DROP TABLE "_posts_v_blocks_values_list_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_history_grid_paragraphs" CASCADE;
  DROP TABLE "_posts_v_blocks_history_grid_paragraphs_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_history_grid" CASCADE;
  DROP TABLE "_posts_v_blocks_history_grid_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_stats_row_items" CASCADE;
  DROP TABLE "_posts_v_blocks_stats_row_items_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_stats_row" CASCADE;
  DROP TABLE "_posts_v_blocks_highlighted_text" CASCADE;
  DROP TABLE "_posts_v_blocks_highlighted_text_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_timeline_items_lines" CASCADE;
  DROP TABLE "_posts_v_blocks_timeline_items_lines_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_timeline_items" CASCADE;
  DROP TABLE "_posts_v_blocks_timeline" CASCADE;
  DROP TABLE "_posts_v_blocks_timeline_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_carousel_slides" CASCADE;
  DROP TABLE "_posts_v_blocks_carousel_slides_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_carousel" CASCADE;
  DROP TABLE "_posts_v_blocks_people_grid" CASCADE;
  DROP TABLE "_posts_v_blocks_people_grid_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_creed" CASCADE;
  DROP TABLE "_posts_v_blocks_creed_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_section_intro" CASCADE;
  DROP TABLE "_posts_v_blocks_section_intro_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_data_table_filters" CASCADE;
  DROP TABLE "_posts_v_blocks_data_table_filters_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_data_table_columns" CASCADE;
  DROP TABLE "_posts_v_blocks_data_table_columns_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_data_table_rows_cells" CASCADE;
  DROP TABLE "_posts_v_blocks_data_table_rows_cells_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_data_table_rows" CASCADE;
  DROP TABLE "_posts_v_blocks_data_table" CASCADE;
  DROP TABLE "_posts_v_blocks_data_table_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_media_card" CASCADE;
  DROP TABLE "_posts_v_blocks_media_card_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_department_grid" CASCADE;
  DROP TABLE "_posts_v_blocks_department_grid_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_contact_box" CASCADE;
  DROP TABLE "_posts_v_blocks_contact_box_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_contact_form_details_items" CASCADE;
  DROP TABLE "_posts_v_blocks_contact_form_details_items_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_contact_form_details" CASCADE;
  DROP TABLE "_posts_v_blocks_contact_form_details_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_contact_form" CASCADE;
  DROP TABLE "_posts_v_blocks_contact_form_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_process_steps_items" CASCADE;
  DROP TABLE "_posts_v_blocks_process_steps_items_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_process_steps" CASCADE;
  DROP TABLE "_posts_v_blocks_process_steps_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_figure" CASCADE;
  DROP TABLE "_posts_v_blocks_figure_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_region_map_regions" CASCADE;
  DROP TABLE "_posts_v_blocks_region_map_regions_locales" CASCADE;
  DROP TABLE "_posts_v_blocks_region_map" CASCADE;
  DROP TABLE "_posts_v_blocks_region_map_locales" CASCADE;
  DROP TABLE "_posts_v" CASCADE;
  DROP TABLE "_posts_v_locales" CASCADE;
  DROP TABLE "_posts_v_rels" CASCADE;
  DROP TABLE "departments_blocks_page_banner_links" CASCADE;
  DROP TABLE "departments_blocks_page_banner_links_locales" CASCADE;
  DROP TABLE "departments_blocks_page_banner" CASCADE;
  DROP TABLE "departments_blocks_page_banner_locales" CASCADE;
  DROP TABLE "departments_blocks_section_tabs_items" CASCADE;
  DROP TABLE "departments_blocks_section_tabs_items_locales" CASCADE;
  DROP TABLE "departments_blocks_section_tabs" CASCADE;
  DROP TABLE "departments_blocks_rich_text" CASCADE;
  DROP TABLE "departments_blocks_rich_text_locales" CASCADE;
  DROP TABLE "departments_blocks_card_grid_items" CASCADE;
  DROP TABLE "departments_blocks_card_grid_items_locales" CASCADE;
  DROP TABLE "departments_blocks_card_grid" CASCADE;
  DROP TABLE "departments_blocks_card_grid_locales" CASCADE;
  DROP TABLE "departments_blocks_quote_banner" CASCADE;
  DROP TABLE "departments_blocks_quote_banner_locales" CASCADE;
  DROP TABLE "departments_blocks_accelerators_items" CASCADE;
  DROP TABLE "departments_blocks_accelerators_items_locales" CASCADE;
  DROP TABLE "departments_blocks_accelerators" CASCADE;
  DROP TABLE "departments_blocks_accelerators_locales" CASCADE;
  DROP TABLE "departments_blocks_posts_feed_filter_items" CASCADE;
  DROP TABLE "departments_blocks_posts_feed_filter_items_locales" CASCADE;
  DROP TABLE "departments_blocks_posts_feed" CASCADE;
  DROP TABLE "departments_blocks_posts_feed_locales" CASCADE;
  DROP TABLE "departments_blocks_gallery_items" CASCADE;
  DROP TABLE "departments_blocks_gallery_items_locales" CASCADE;
  DROP TABLE "departments_blocks_gallery" CASCADE;
  DROP TABLE "departments_blocks_values_list_items" CASCADE;
  DROP TABLE "departments_blocks_values_list_items_locales" CASCADE;
  DROP TABLE "departments_blocks_values_list" CASCADE;
  DROP TABLE "departments_blocks_values_list_locales" CASCADE;
  DROP TABLE "departments_blocks_history_grid_paragraphs" CASCADE;
  DROP TABLE "departments_blocks_history_grid_paragraphs_locales" CASCADE;
  DROP TABLE "departments_blocks_history_grid" CASCADE;
  DROP TABLE "departments_blocks_history_grid_locales" CASCADE;
  DROP TABLE "departments_blocks_stats_row_items" CASCADE;
  DROP TABLE "departments_blocks_stats_row_items_locales" CASCADE;
  DROP TABLE "departments_blocks_stats_row" CASCADE;
  DROP TABLE "departments_blocks_highlighted_text" CASCADE;
  DROP TABLE "departments_blocks_highlighted_text_locales" CASCADE;
  DROP TABLE "departments_blocks_timeline_items_lines" CASCADE;
  DROP TABLE "departments_blocks_timeline_items_lines_locales" CASCADE;
  DROP TABLE "departments_blocks_timeline_items" CASCADE;
  DROP TABLE "departments_blocks_timeline" CASCADE;
  DROP TABLE "departments_blocks_timeline_locales" CASCADE;
  DROP TABLE "departments_blocks_carousel_slides" CASCADE;
  DROP TABLE "departments_blocks_carousel_slides_locales" CASCADE;
  DROP TABLE "departments_blocks_carousel" CASCADE;
  DROP TABLE "departments_blocks_people_grid" CASCADE;
  DROP TABLE "departments_blocks_people_grid_locales" CASCADE;
  DROP TABLE "departments_blocks_creed" CASCADE;
  DROP TABLE "departments_blocks_creed_locales" CASCADE;
  DROP TABLE "departments_blocks_section_intro" CASCADE;
  DROP TABLE "departments_blocks_section_intro_locales" CASCADE;
  DROP TABLE "departments_blocks_data_table_filters" CASCADE;
  DROP TABLE "departments_blocks_data_table_filters_locales" CASCADE;
  DROP TABLE "departments_blocks_data_table_columns" CASCADE;
  DROP TABLE "departments_blocks_data_table_columns_locales" CASCADE;
  DROP TABLE "departments_blocks_data_table_rows_cells" CASCADE;
  DROP TABLE "departments_blocks_data_table_rows_cells_locales" CASCADE;
  DROP TABLE "departments_blocks_data_table_rows" CASCADE;
  DROP TABLE "departments_blocks_data_table" CASCADE;
  DROP TABLE "departments_blocks_data_table_locales" CASCADE;
  DROP TABLE "departments_blocks_media_card" CASCADE;
  DROP TABLE "departments_blocks_media_card_locales" CASCADE;
  DROP TABLE "departments_blocks_department_grid" CASCADE;
  DROP TABLE "departments_blocks_department_grid_locales" CASCADE;
  DROP TABLE "departments_blocks_contact_box" CASCADE;
  DROP TABLE "departments_blocks_contact_box_locales" CASCADE;
  DROP TABLE "departments_blocks_contact_form_details_items" CASCADE;
  DROP TABLE "departments_blocks_contact_form_details_items_locales" CASCADE;
  DROP TABLE "departments_blocks_contact_form_details" CASCADE;
  DROP TABLE "departments_blocks_contact_form_details_locales" CASCADE;
  DROP TABLE "departments_blocks_contact_form" CASCADE;
  DROP TABLE "departments_blocks_contact_form_locales" CASCADE;
  DROP TABLE "departments_blocks_process_steps_items" CASCADE;
  DROP TABLE "departments_blocks_process_steps_items_locales" CASCADE;
  DROP TABLE "departments_blocks_process_steps" CASCADE;
  DROP TABLE "departments_blocks_process_steps_locales" CASCADE;
  DROP TABLE "departments_blocks_figure" CASCADE;
  DROP TABLE "departments_blocks_figure_locales" CASCADE;
  DROP TABLE "departments_blocks_region_map_regions" CASCADE;
  DROP TABLE "departments_blocks_region_map_regions_locales" CASCADE;
  DROP TABLE "departments_blocks_region_map" CASCADE;
  DROP TABLE "departments_blocks_region_map_locales" CASCADE;
  DROP TABLE "departments" CASCADE;
  DROP TABLE "departments_locales" CASCADE;
  DROP TABLE "departments_rels" CASCADE;
  DROP TABLE "_departments_v_blocks_page_banner_links" CASCADE;
  DROP TABLE "_departments_v_blocks_page_banner_links_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_page_banner" CASCADE;
  DROP TABLE "_departments_v_blocks_page_banner_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_section_tabs_items" CASCADE;
  DROP TABLE "_departments_v_blocks_section_tabs_items_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_section_tabs" CASCADE;
  DROP TABLE "_departments_v_blocks_rich_text" CASCADE;
  DROP TABLE "_departments_v_blocks_rich_text_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_card_grid_items" CASCADE;
  DROP TABLE "_departments_v_blocks_card_grid_items_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_card_grid" CASCADE;
  DROP TABLE "_departments_v_blocks_card_grid_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_quote_banner" CASCADE;
  DROP TABLE "_departments_v_blocks_quote_banner_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_accelerators_items" CASCADE;
  DROP TABLE "_departments_v_blocks_accelerators_items_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_accelerators" CASCADE;
  DROP TABLE "_departments_v_blocks_accelerators_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_posts_feed_filter_items" CASCADE;
  DROP TABLE "_departments_v_blocks_posts_feed_filter_items_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_posts_feed" CASCADE;
  DROP TABLE "_departments_v_blocks_posts_feed_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_gallery_items" CASCADE;
  DROP TABLE "_departments_v_blocks_gallery_items_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_gallery" CASCADE;
  DROP TABLE "_departments_v_blocks_values_list_items" CASCADE;
  DROP TABLE "_departments_v_blocks_values_list_items_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_values_list" CASCADE;
  DROP TABLE "_departments_v_blocks_values_list_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_history_grid_paragraphs" CASCADE;
  DROP TABLE "_departments_v_blocks_history_grid_paragraphs_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_history_grid" CASCADE;
  DROP TABLE "_departments_v_blocks_history_grid_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_stats_row_items" CASCADE;
  DROP TABLE "_departments_v_blocks_stats_row_items_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_stats_row" CASCADE;
  DROP TABLE "_departments_v_blocks_highlighted_text" CASCADE;
  DROP TABLE "_departments_v_blocks_highlighted_text_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_timeline_items_lines" CASCADE;
  DROP TABLE "_departments_v_blocks_timeline_items_lines_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_timeline_items" CASCADE;
  DROP TABLE "_departments_v_blocks_timeline" CASCADE;
  DROP TABLE "_departments_v_blocks_timeline_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_carousel_slides" CASCADE;
  DROP TABLE "_departments_v_blocks_carousel_slides_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_carousel" CASCADE;
  DROP TABLE "_departments_v_blocks_people_grid" CASCADE;
  DROP TABLE "_departments_v_blocks_people_grid_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_creed" CASCADE;
  DROP TABLE "_departments_v_blocks_creed_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_section_intro" CASCADE;
  DROP TABLE "_departments_v_blocks_section_intro_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_data_table_filters" CASCADE;
  DROP TABLE "_departments_v_blocks_data_table_filters_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_data_table_columns" CASCADE;
  DROP TABLE "_departments_v_blocks_data_table_columns_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_data_table_rows_cells" CASCADE;
  DROP TABLE "_departments_v_blocks_data_table_rows_cells_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_data_table_rows" CASCADE;
  DROP TABLE "_departments_v_blocks_data_table" CASCADE;
  DROP TABLE "_departments_v_blocks_data_table_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_media_card" CASCADE;
  DROP TABLE "_departments_v_blocks_media_card_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_department_grid" CASCADE;
  DROP TABLE "_departments_v_blocks_department_grid_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_contact_box" CASCADE;
  DROP TABLE "_departments_v_blocks_contact_box_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_contact_form_details_items" CASCADE;
  DROP TABLE "_departments_v_blocks_contact_form_details_items_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_contact_form_details" CASCADE;
  DROP TABLE "_departments_v_blocks_contact_form_details_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_contact_form" CASCADE;
  DROP TABLE "_departments_v_blocks_contact_form_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_process_steps_items" CASCADE;
  DROP TABLE "_departments_v_blocks_process_steps_items_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_process_steps" CASCADE;
  DROP TABLE "_departments_v_blocks_process_steps_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_figure" CASCADE;
  DROP TABLE "_departments_v_blocks_figure_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_region_map_regions" CASCADE;
  DROP TABLE "_departments_v_blocks_region_map_regions_locales" CASCADE;
  DROP TABLE "_departments_v_blocks_region_map" CASCADE;
  DROP TABLE "_departments_v_blocks_region_map_locales" CASCADE;
  DROP TABLE "_departments_v" CASCADE;
  DROP TABLE "_departments_v_locales" CASCADE;
  DROP TABLE "_departments_v_rels" CASCADE;
  DROP TABLE "hubs_blocks_page_banner_links" CASCADE;
  DROP TABLE "hubs_blocks_page_banner_links_locales" CASCADE;
  DROP TABLE "hubs_blocks_page_banner" CASCADE;
  DROP TABLE "hubs_blocks_page_banner_locales" CASCADE;
  DROP TABLE "hubs_blocks_section_tabs_items" CASCADE;
  DROP TABLE "hubs_blocks_section_tabs_items_locales" CASCADE;
  DROP TABLE "hubs_blocks_section_tabs" CASCADE;
  DROP TABLE "hubs_blocks_rich_text" CASCADE;
  DROP TABLE "hubs_blocks_rich_text_locales" CASCADE;
  DROP TABLE "hubs_blocks_card_grid_items" CASCADE;
  DROP TABLE "hubs_blocks_card_grid_items_locales" CASCADE;
  DROP TABLE "hubs_blocks_card_grid" CASCADE;
  DROP TABLE "hubs_blocks_card_grid_locales" CASCADE;
  DROP TABLE "hubs_blocks_quote_banner" CASCADE;
  DROP TABLE "hubs_blocks_quote_banner_locales" CASCADE;
  DROP TABLE "hubs_blocks_accelerators_items" CASCADE;
  DROP TABLE "hubs_blocks_accelerators_items_locales" CASCADE;
  DROP TABLE "hubs_blocks_accelerators" CASCADE;
  DROP TABLE "hubs_blocks_accelerators_locales" CASCADE;
  DROP TABLE "hubs_blocks_posts_feed_filter_items" CASCADE;
  DROP TABLE "hubs_blocks_posts_feed_filter_items_locales" CASCADE;
  DROP TABLE "hubs_blocks_posts_feed" CASCADE;
  DROP TABLE "hubs_blocks_posts_feed_locales" CASCADE;
  DROP TABLE "hubs_blocks_gallery_items" CASCADE;
  DROP TABLE "hubs_blocks_gallery_items_locales" CASCADE;
  DROP TABLE "hubs_blocks_gallery" CASCADE;
  DROP TABLE "hubs_blocks_values_list_items" CASCADE;
  DROP TABLE "hubs_blocks_values_list_items_locales" CASCADE;
  DROP TABLE "hubs_blocks_values_list" CASCADE;
  DROP TABLE "hubs_blocks_values_list_locales" CASCADE;
  DROP TABLE "hubs_blocks_history_grid_paragraphs" CASCADE;
  DROP TABLE "hubs_blocks_history_grid_paragraphs_locales" CASCADE;
  DROP TABLE "hubs_blocks_history_grid" CASCADE;
  DROP TABLE "hubs_blocks_history_grid_locales" CASCADE;
  DROP TABLE "hubs_blocks_stats_row_items" CASCADE;
  DROP TABLE "hubs_blocks_stats_row_items_locales" CASCADE;
  DROP TABLE "hubs_blocks_stats_row" CASCADE;
  DROP TABLE "hubs_blocks_highlighted_text" CASCADE;
  DROP TABLE "hubs_blocks_highlighted_text_locales" CASCADE;
  DROP TABLE "hubs_blocks_timeline_items_lines" CASCADE;
  DROP TABLE "hubs_blocks_timeline_items_lines_locales" CASCADE;
  DROP TABLE "hubs_blocks_timeline_items" CASCADE;
  DROP TABLE "hubs_blocks_timeline" CASCADE;
  DROP TABLE "hubs_blocks_timeline_locales" CASCADE;
  DROP TABLE "hubs_blocks_carousel_slides" CASCADE;
  DROP TABLE "hubs_blocks_carousel_slides_locales" CASCADE;
  DROP TABLE "hubs_blocks_carousel" CASCADE;
  DROP TABLE "hubs_blocks_people_grid" CASCADE;
  DROP TABLE "hubs_blocks_people_grid_locales" CASCADE;
  DROP TABLE "hubs_blocks_creed" CASCADE;
  DROP TABLE "hubs_blocks_creed_locales" CASCADE;
  DROP TABLE "hubs_blocks_section_intro" CASCADE;
  DROP TABLE "hubs_blocks_section_intro_locales" CASCADE;
  DROP TABLE "hubs_blocks_data_table_filters" CASCADE;
  DROP TABLE "hubs_blocks_data_table_filters_locales" CASCADE;
  DROP TABLE "hubs_blocks_data_table_columns" CASCADE;
  DROP TABLE "hubs_blocks_data_table_columns_locales" CASCADE;
  DROP TABLE "hubs_blocks_data_table_rows_cells" CASCADE;
  DROP TABLE "hubs_blocks_data_table_rows_cells_locales" CASCADE;
  DROP TABLE "hubs_blocks_data_table_rows" CASCADE;
  DROP TABLE "hubs_blocks_data_table" CASCADE;
  DROP TABLE "hubs_blocks_data_table_locales" CASCADE;
  DROP TABLE "hubs_blocks_media_card" CASCADE;
  DROP TABLE "hubs_blocks_media_card_locales" CASCADE;
  DROP TABLE "hubs_blocks_department_grid" CASCADE;
  DROP TABLE "hubs_blocks_department_grid_locales" CASCADE;
  DROP TABLE "hubs_blocks_contact_box" CASCADE;
  DROP TABLE "hubs_blocks_contact_box_locales" CASCADE;
  DROP TABLE "hubs_blocks_contact_form_details_items" CASCADE;
  DROP TABLE "hubs_blocks_contact_form_details_items_locales" CASCADE;
  DROP TABLE "hubs_blocks_contact_form_details" CASCADE;
  DROP TABLE "hubs_blocks_contact_form_details_locales" CASCADE;
  DROP TABLE "hubs_blocks_contact_form" CASCADE;
  DROP TABLE "hubs_blocks_contact_form_locales" CASCADE;
  DROP TABLE "hubs_blocks_process_steps_items" CASCADE;
  DROP TABLE "hubs_blocks_process_steps_items_locales" CASCADE;
  DROP TABLE "hubs_blocks_process_steps" CASCADE;
  DROP TABLE "hubs_blocks_process_steps_locales" CASCADE;
  DROP TABLE "hubs_blocks_figure" CASCADE;
  DROP TABLE "hubs_blocks_figure_locales" CASCADE;
  DROP TABLE "hubs_blocks_region_map_regions" CASCADE;
  DROP TABLE "hubs_blocks_region_map_regions_locales" CASCADE;
  DROP TABLE "hubs_blocks_region_map" CASCADE;
  DROP TABLE "hubs_blocks_region_map_locales" CASCADE;
  DROP TABLE "hubs" CASCADE;
  DROP TABLE "hubs_locales" CASCADE;
  DROP TABLE "hubs_rels" CASCADE;
  DROP TABLE "_hubs_v_blocks_page_banner_links" CASCADE;
  DROP TABLE "_hubs_v_blocks_page_banner_links_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_page_banner" CASCADE;
  DROP TABLE "_hubs_v_blocks_page_banner_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_section_tabs_items" CASCADE;
  DROP TABLE "_hubs_v_blocks_section_tabs_items_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_section_tabs" CASCADE;
  DROP TABLE "_hubs_v_blocks_rich_text" CASCADE;
  DROP TABLE "_hubs_v_blocks_rich_text_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_card_grid_items" CASCADE;
  DROP TABLE "_hubs_v_blocks_card_grid_items_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_card_grid" CASCADE;
  DROP TABLE "_hubs_v_blocks_card_grid_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_quote_banner" CASCADE;
  DROP TABLE "_hubs_v_blocks_quote_banner_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_accelerators_items" CASCADE;
  DROP TABLE "_hubs_v_blocks_accelerators_items_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_accelerators" CASCADE;
  DROP TABLE "_hubs_v_blocks_accelerators_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_posts_feed_filter_items" CASCADE;
  DROP TABLE "_hubs_v_blocks_posts_feed_filter_items_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_posts_feed" CASCADE;
  DROP TABLE "_hubs_v_blocks_posts_feed_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_gallery_items" CASCADE;
  DROP TABLE "_hubs_v_blocks_gallery_items_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_gallery" CASCADE;
  DROP TABLE "_hubs_v_blocks_values_list_items" CASCADE;
  DROP TABLE "_hubs_v_blocks_values_list_items_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_values_list" CASCADE;
  DROP TABLE "_hubs_v_blocks_values_list_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_history_grid_paragraphs" CASCADE;
  DROP TABLE "_hubs_v_blocks_history_grid_paragraphs_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_history_grid" CASCADE;
  DROP TABLE "_hubs_v_blocks_history_grid_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_stats_row_items" CASCADE;
  DROP TABLE "_hubs_v_blocks_stats_row_items_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_stats_row" CASCADE;
  DROP TABLE "_hubs_v_blocks_highlighted_text" CASCADE;
  DROP TABLE "_hubs_v_blocks_highlighted_text_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_timeline_items_lines" CASCADE;
  DROP TABLE "_hubs_v_blocks_timeline_items_lines_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_timeline_items" CASCADE;
  DROP TABLE "_hubs_v_blocks_timeline" CASCADE;
  DROP TABLE "_hubs_v_blocks_timeline_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_carousel_slides" CASCADE;
  DROP TABLE "_hubs_v_blocks_carousel_slides_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_carousel" CASCADE;
  DROP TABLE "_hubs_v_blocks_people_grid" CASCADE;
  DROP TABLE "_hubs_v_blocks_people_grid_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_creed" CASCADE;
  DROP TABLE "_hubs_v_blocks_creed_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_section_intro" CASCADE;
  DROP TABLE "_hubs_v_blocks_section_intro_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_data_table_filters" CASCADE;
  DROP TABLE "_hubs_v_blocks_data_table_filters_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_data_table_columns" CASCADE;
  DROP TABLE "_hubs_v_blocks_data_table_columns_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_data_table_rows_cells" CASCADE;
  DROP TABLE "_hubs_v_blocks_data_table_rows_cells_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_data_table_rows" CASCADE;
  DROP TABLE "_hubs_v_blocks_data_table" CASCADE;
  DROP TABLE "_hubs_v_blocks_data_table_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_media_card" CASCADE;
  DROP TABLE "_hubs_v_blocks_media_card_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_department_grid" CASCADE;
  DROP TABLE "_hubs_v_blocks_department_grid_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_contact_box" CASCADE;
  DROP TABLE "_hubs_v_blocks_contact_box_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_contact_form_details_items" CASCADE;
  DROP TABLE "_hubs_v_blocks_contact_form_details_items_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_contact_form_details" CASCADE;
  DROP TABLE "_hubs_v_blocks_contact_form_details_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_contact_form" CASCADE;
  DROP TABLE "_hubs_v_blocks_contact_form_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_process_steps_items" CASCADE;
  DROP TABLE "_hubs_v_blocks_process_steps_items_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_process_steps" CASCADE;
  DROP TABLE "_hubs_v_blocks_process_steps_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_figure" CASCADE;
  DROP TABLE "_hubs_v_blocks_figure_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_region_map_regions" CASCADE;
  DROP TABLE "_hubs_v_blocks_region_map_regions_locales" CASCADE;
  DROP TABLE "_hubs_v_blocks_region_map" CASCADE;
  DROP TABLE "_hubs_v_blocks_region_map_locales" CASCADE;
  DROP TABLE "_hubs_v" CASCADE;
  DROP TABLE "_hubs_v_locales" CASCADE;
  DROP TABLE "_hubs_v_rels" CASCADE;
  DROP TABLE "board_members" CASCADE;
  DROP TABLE "board_members_locales" CASCADE;
  DROP TABLE "membership_tiers_benefits" CASCADE;
  DROP TABLE "membership_tiers_benefits_locales" CASCADE;
  DROP TABLE "membership_tiers_requirements" CASCADE;
  DROP TABLE "membership_tiers_requirements_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_page_banner_links" CASCADE;
  DROP TABLE "membership_tiers_blocks_page_banner_links_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_page_banner" CASCADE;
  DROP TABLE "membership_tiers_blocks_page_banner_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_section_tabs_items" CASCADE;
  DROP TABLE "membership_tiers_blocks_section_tabs_items_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_section_tabs" CASCADE;
  DROP TABLE "membership_tiers_blocks_rich_text" CASCADE;
  DROP TABLE "membership_tiers_blocks_rich_text_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_card_grid_items" CASCADE;
  DROP TABLE "membership_tiers_blocks_card_grid_items_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_card_grid" CASCADE;
  DROP TABLE "membership_tiers_blocks_card_grid_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_quote_banner" CASCADE;
  DROP TABLE "membership_tiers_blocks_quote_banner_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_accelerators_items" CASCADE;
  DROP TABLE "membership_tiers_blocks_accelerators_items_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_accelerators" CASCADE;
  DROP TABLE "membership_tiers_blocks_accelerators_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_posts_feed_filter_items" CASCADE;
  DROP TABLE "membership_tiers_blocks_posts_feed_filter_items_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_posts_feed" CASCADE;
  DROP TABLE "membership_tiers_blocks_posts_feed_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_gallery_items" CASCADE;
  DROP TABLE "membership_tiers_blocks_gallery_items_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_gallery" CASCADE;
  DROP TABLE "membership_tiers_blocks_values_list_items" CASCADE;
  DROP TABLE "membership_tiers_blocks_values_list_items_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_values_list" CASCADE;
  DROP TABLE "membership_tiers_blocks_values_list_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_history_grid_paragraphs" CASCADE;
  DROP TABLE "membership_tiers_blocks_history_grid_paragraphs_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_history_grid" CASCADE;
  DROP TABLE "membership_tiers_blocks_history_grid_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_stats_row_items" CASCADE;
  DROP TABLE "membership_tiers_blocks_stats_row_items_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_stats_row" CASCADE;
  DROP TABLE "membership_tiers_blocks_highlighted_text" CASCADE;
  DROP TABLE "membership_tiers_blocks_highlighted_text_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_timeline_items_lines" CASCADE;
  DROP TABLE "membership_tiers_blocks_timeline_items_lines_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_timeline_items" CASCADE;
  DROP TABLE "membership_tiers_blocks_timeline" CASCADE;
  DROP TABLE "membership_tiers_blocks_timeline_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_carousel_slides" CASCADE;
  DROP TABLE "membership_tiers_blocks_carousel_slides_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_carousel" CASCADE;
  DROP TABLE "membership_tiers_blocks_people_grid" CASCADE;
  DROP TABLE "membership_tiers_blocks_people_grid_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_creed" CASCADE;
  DROP TABLE "membership_tiers_blocks_creed_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_section_intro" CASCADE;
  DROP TABLE "membership_tiers_blocks_section_intro_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_data_table_filters" CASCADE;
  DROP TABLE "membership_tiers_blocks_data_table_filters_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_data_table_columns" CASCADE;
  DROP TABLE "membership_tiers_blocks_data_table_columns_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_data_table_rows_cells" CASCADE;
  DROP TABLE "membership_tiers_blocks_data_table_rows_cells_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_data_table_rows" CASCADE;
  DROP TABLE "membership_tiers_blocks_data_table" CASCADE;
  DROP TABLE "membership_tiers_blocks_data_table_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_media_card" CASCADE;
  DROP TABLE "membership_tiers_blocks_media_card_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_department_grid" CASCADE;
  DROP TABLE "membership_tiers_blocks_department_grid_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_contact_box" CASCADE;
  DROP TABLE "membership_tiers_blocks_contact_box_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_contact_form_details_items" CASCADE;
  DROP TABLE "membership_tiers_blocks_contact_form_details_items_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_contact_form_details" CASCADE;
  DROP TABLE "membership_tiers_blocks_contact_form_details_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_contact_form" CASCADE;
  DROP TABLE "membership_tiers_blocks_contact_form_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_process_steps_items" CASCADE;
  DROP TABLE "membership_tiers_blocks_process_steps_items_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_process_steps" CASCADE;
  DROP TABLE "membership_tiers_blocks_process_steps_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_figure" CASCADE;
  DROP TABLE "membership_tiers_blocks_figure_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_region_map_regions" CASCADE;
  DROP TABLE "membership_tiers_blocks_region_map_regions_locales" CASCADE;
  DROP TABLE "membership_tiers_blocks_region_map" CASCADE;
  DROP TABLE "membership_tiers_blocks_region_map_locales" CASCADE;
  DROP TABLE "membership_tiers" CASCADE;
  DROP TABLE "membership_tiers_locales" CASCADE;
  DROP TABLE "membership_tiers_rels" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "media_locales" CASCADE;
  DROP TABLE "members_sessions" CASCADE;
  DROP TABLE "members" CASCADE;
  DROP TABLE "feedback" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "theme" CASCADE;
  DROP TABLE "site_settings_announcement_links" CASCADE;
  DROP TABLE "site_settings_announcement_links_locales" CASCADE;
  DROP TABLE "site_settings_header_nav" CASCADE;
  DROP TABLE "site_settings_header_nav_locales" CASCADE;
  DROP TABLE "site_settings_footer_top_links" CASCADE;
  DROP TABLE "site_settings_footer_top_links_locales" CASCADE;
  DROP TABLE "site_settings_footer_contact_items" CASCADE;
  DROP TABLE "site_settings_footer_contact_items_locales" CASCADE;
  DROP TABLE "site_settings_footer_nav_groups_links" CASCADE;
  DROP TABLE "site_settings_footer_nav_groups_links_locales" CASCADE;
  DROP TABLE "site_settings_footer_nav_groups" CASCADE;
  DROP TABLE "site_settings_footer_nav_groups_locales" CASCADE;
  DROP TABLE "site_settings_footer_social_links" CASCADE;
  DROP TABLE "site_settings_footer_legal_links" CASCADE;
  DROP TABLE "site_settings_footer_legal_links_locales" CASCADE;
  DROP TABLE "site_settings" CASCADE;
  DROP TABLE "site_settings_locales" CASCADE;
  DROP TABLE "site_settings_rels" CASCADE;
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."enum_pages_blocks_page_banner_links_type";
  DROP TYPE "public"."enum_pages_blocks_page_banner_links_appearance";
  DROP TYPE "public"."enum_pages_blocks_page_banner_variant";
  DROP TYPE "public"."enum_pages_blocks_page_banner_align";
  DROP TYPE "public"."enum_pages_blocks_section_tabs_items_type";
  DROP TYPE "public"."enum_pages_blocks_section_tabs_variant";
  DROP TYPE "public"."enum_pages_blocks_section_tabs_align";
  DROP TYPE "public"."enum_pages_blocks_rich_text_header_align";
  DROP TYPE "public"."enum_pages_blocks_rich_text_width";
  DROP TYPE "public"."enum_pages_blocks_rich_text_background";
  DROP TYPE "public"."enum_pages_blocks_card_grid_items_link_type";
  DROP TYPE "public"."enum_pages_blocks_card_grid_variant";
  DROP TYPE "public"."enum_pages_blocks_card_grid_header_align";
  DROP TYPE "public"."enum_pages_blocks_card_grid_background";
  DROP TYPE "public"."enum_pages_blocks_quote_banner_variant";
  DROP TYPE "public"."enum_pages_blocks_quote_banner_cta_type";
  DROP TYPE "public"."enum_pages_blocks_quote_banner_cta_appearance";
  DROP TYPE "public"."enum_pages_blocks_accelerators_items_link_type";
  DROP TYPE "public"."enum_pages_blocks_accelerators_header_align";
  DROP TYPE "public"."enum_pages_blocks_posts_feed_filter_items_kind";
  DROP TYPE "public"."enum_pages_blocks_posts_feed_variant";
  DROP TYPE "public"."enum_pages_blocks_posts_feed_header_align";
  DROP TYPE "public"."enum_pages_blocks_posts_feed_source";
  DROP TYPE "public"."enum_pages_blocks_posts_feed_kind";
  DROP TYPE "public"."enum_pages_blocks_posts_feed_filter_style";
  DROP TYPE "public"."enum_pages_blocks_posts_feed_more_link_type";
  DROP TYPE "public"."enum_pages_blocks_gallery_variant";
  DROP TYPE "public"."enum_pages_blocks_history_grid_title_tone";
  DROP TYPE "public"."enum_pages_blocks_people_grid_variant";
  DROP TYPE "public"."enum_pages_blocks_people_grid_source";
  DROP TYPE "public"."enum_pages_blocks_people_grid_group";
  DROP TYPE "public"."enum_pages_blocks_data_table_header_align";
  DROP TYPE "public"."enum_pages_blocks_data_table_variant";
  DROP TYPE "public"."enum_pages_blocks_department_grid_header_align";
  DROP TYPE "public"."enum_pages_blocks_department_grid_source";
  DROP TYPE "public"."enum_pages_blocks_process_steps_header_align";
  DROP TYPE "public"."enum_pages_blocks_figure_variant";
  DROP TYPE "public"."enum_pages_blocks_region_map_header_align";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_blocks_page_banner_links_type";
  DROP TYPE "public"."enum__pages_v_blocks_page_banner_links_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_page_banner_variant";
  DROP TYPE "public"."enum__pages_v_blocks_page_banner_align";
  DROP TYPE "public"."enum__pages_v_blocks_section_tabs_items_type";
  DROP TYPE "public"."enum__pages_v_blocks_section_tabs_variant";
  DROP TYPE "public"."enum__pages_v_blocks_section_tabs_align";
  DROP TYPE "public"."enum__pages_v_blocks_rich_text_header_align";
  DROP TYPE "public"."enum__pages_v_blocks_rich_text_width";
  DROP TYPE "public"."enum__pages_v_blocks_rich_text_background";
  DROP TYPE "public"."enum__pages_v_blocks_card_grid_items_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_card_grid_variant";
  DROP TYPE "public"."enum__pages_v_blocks_card_grid_header_align";
  DROP TYPE "public"."enum__pages_v_blocks_card_grid_background";
  DROP TYPE "public"."enum__pages_v_blocks_quote_banner_variant";
  DROP TYPE "public"."enum__pages_v_blocks_quote_banner_cta_type";
  DROP TYPE "public"."enum__pages_v_blocks_quote_banner_cta_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_accelerators_items_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_accelerators_header_align";
  DROP TYPE "public"."enum__pages_v_blocks_posts_feed_filter_items_kind";
  DROP TYPE "public"."enum__pages_v_blocks_posts_feed_variant";
  DROP TYPE "public"."enum__pages_v_blocks_posts_feed_header_align";
  DROP TYPE "public"."enum__pages_v_blocks_posts_feed_source";
  DROP TYPE "public"."enum__pages_v_blocks_posts_feed_kind";
  DROP TYPE "public"."enum__pages_v_blocks_posts_feed_filter_style";
  DROP TYPE "public"."enum__pages_v_blocks_posts_feed_more_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_variant";
  DROP TYPE "public"."enum__pages_v_blocks_history_grid_title_tone";
  DROP TYPE "public"."enum__pages_v_blocks_people_grid_variant";
  DROP TYPE "public"."enum__pages_v_blocks_people_grid_source";
  DROP TYPE "public"."enum__pages_v_blocks_people_grid_group";
  DROP TYPE "public"."enum__pages_v_blocks_data_table_header_align";
  DROP TYPE "public"."enum__pages_v_blocks_data_table_variant";
  DROP TYPE "public"."enum__pages_v_blocks_department_grid_header_align";
  DROP TYPE "public"."enum__pages_v_blocks_department_grid_source";
  DROP TYPE "public"."enum__pages_v_blocks_process_steps_header_align";
  DROP TYPE "public"."enum__pages_v_blocks_figure_variant";
  DROP TYPE "public"."enum__pages_v_blocks_region_map_header_align";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum__pages_v_published_locale";
  DROP TYPE "public"."enum_posts_blocks_page_banner_links_type";
  DROP TYPE "public"."enum_posts_blocks_page_banner_links_appearance";
  DROP TYPE "public"."enum_posts_blocks_page_banner_variant";
  DROP TYPE "public"."enum_posts_blocks_page_banner_align";
  DROP TYPE "public"."enum_posts_blocks_section_tabs_items_type";
  DROP TYPE "public"."enum_posts_blocks_section_tabs_variant";
  DROP TYPE "public"."enum_posts_blocks_section_tabs_align";
  DROP TYPE "public"."enum_posts_blocks_rich_text_header_align";
  DROP TYPE "public"."enum_posts_blocks_rich_text_width";
  DROP TYPE "public"."enum_posts_blocks_rich_text_background";
  DROP TYPE "public"."enum_posts_blocks_card_grid_items_link_type";
  DROP TYPE "public"."enum_posts_blocks_card_grid_variant";
  DROP TYPE "public"."enum_posts_blocks_card_grid_header_align";
  DROP TYPE "public"."enum_posts_blocks_card_grid_background";
  DROP TYPE "public"."enum_posts_blocks_quote_banner_variant";
  DROP TYPE "public"."enum_posts_blocks_quote_banner_cta_type";
  DROP TYPE "public"."enum_posts_blocks_quote_banner_cta_appearance";
  DROP TYPE "public"."enum_posts_blocks_accelerators_items_link_type";
  DROP TYPE "public"."enum_posts_blocks_accelerators_header_align";
  DROP TYPE "public"."enum_posts_blocks_posts_feed_filter_items_kind";
  DROP TYPE "public"."enum_posts_blocks_posts_feed_variant";
  DROP TYPE "public"."enum_posts_blocks_posts_feed_header_align";
  DROP TYPE "public"."enum_posts_blocks_posts_feed_source";
  DROP TYPE "public"."enum_posts_blocks_posts_feed_kind";
  DROP TYPE "public"."enum_posts_blocks_posts_feed_filter_style";
  DROP TYPE "public"."enum_posts_blocks_posts_feed_more_link_type";
  DROP TYPE "public"."enum_posts_blocks_gallery_variant";
  DROP TYPE "public"."enum_posts_blocks_history_grid_title_tone";
  DROP TYPE "public"."enum_posts_blocks_people_grid_variant";
  DROP TYPE "public"."enum_posts_blocks_people_grid_source";
  DROP TYPE "public"."enum_posts_blocks_people_grid_group";
  DROP TYPE "public"."enum_posts_blocks_data_table_header_align";
  DROP TYPE "public"."enum_posts_blocks_data_table_variant";
  DROP TYPE "public"."enum_posts_blocks_department_grid_header_align";
  DROP TYPE "public"."enum_posts_blocks_department_grid_source";
  DROP TYPE "public"."enum_posts_blocks_process_steps_header_align";
  DROP TYPE "public"."enum_posts_blocks_figure_variant";
  DROP TYPE "public"."enum_posts_blocks_region_map_header_align";
  DROP TYPE "public"."enum_posts_kind";
  DROP TYPE "public"."enum_posts_status";
  DROP TYPE "public"."enum__posts_v_blocks_page_banner_links_type";
  DROP TYPE "public"."enum__posts_v_blocks_page_banner_links_appearance";
  DROP TYPE "public"."enum__posts_v_blocks_page_banner_variant";
  DROP TYPE "public"."enum__posts_v_blocks_page_banner_align";
  DROP TYPE "public"."enum__posts_v_blocks_section_tabs_items_type";
  DROP TYPE "public"."enum__posts_v_blocks_section_tabs_variant";
  DROP TYPE "public"."enum__posts_v_blocks_section_tabs_align";
  DROP TYPE "public"."enum__posts_v_blocks_rich_text_header_align";
  DROP TYPE "public"."enum__posts_v_blocks_rich_text_width";
  DROP TYPE "public"."enum__posts_v_blocks_rich_text_background";
  DROP TYPE "public"."enum__posts_v_blocks_card_grid_items_link_type";
  DROP TYPE "public"."enum__posts_v_blocks_card_grid_variant";
  DROP TYPE "public"."enum__posts_v_blocks_card_grid_header_align";
  DROP TYPE "public"."enum__posts_v_blocks_card_grid_background";
  DROP TYPE "public"."enum__posts_v_blocks_quote_banner_variant";
  DROP TYPE "public"."enum__posts_v_blocks_quote_banner_cta_type";
  DROP TYPE "public"."enum__posts_v_blocks_quote_banner_cta_appearance";
  DROP TYPE "public"."enum__posts_v_blocks_accelerators_items_link_type";
  DROP TYPE "public"."enum__posts_v_blocks_accelerators_header_align";
  DROP TYPE "public"."enum__posts_v_blocks_posts_feed_filter_items_kind";
  DROP TYPE "public"."enum__posts_v_blocks_posts_feed_variant";
  DROP TYPE "public"."enum__posts_v_blocks_posts_feed_header_align";
  DROP TYPE "public"."enum__posts_v_blocks_posts_feed_source";
  DROP TYPE "public"."enum__posts_v_blocks_posts_feed_kind";
  DROP TYPE "public"."enum__posts_v_blocks_posts_feed_filter_style";
  DROP TYPE "public"."enum__posts_v_blocks_posts_feed_more_link_type";
  DROP TYPE "public"."enum__posts_v_blocks_gallery_variant";
  DROP TYPE "public"."enum__posts_v_blocks_history_grid_title_tone";
  DROP TYPE "public"."enum__posts_v_blocks_people_grid_variant";
  DROP TYPE "public"."enum__posts_v_blocks_people_grid_source";
  DROP TYPE "public"."enum__posts_v_blocks_people_grid_group";
  DROP TYPE "public"."enum__posts_v_blocks_data_table_header_align";
  DROP TYPE "public"."enum__posts_v_blocks_data_table_variant";
  DROP TYPE "public"."enum__posts_v_blocks_department_grid_header_align";
  DROP TYPE "public"."enum__posts_v_blocks_department_grid_source";
  DROP TYPE "public"."enum__posts_v_blocks_process_steps_header_align";
  DROP TYPE "public"."enum__posts_v_blocks_figure_variant";
  DROP TYPE "public"."enum__posts_v_blocks_region_map_header_align";
  DROP TYPE "public"."enum__posts_v_version_kind";
  DROP TYPE "public"."enum__posts_v_version_status";
  DROP TYPE "public"."enum__posts_v_published_locale";
  DROP TYPE "public"."enum_departments_blocks_page_banner_links_type";
  DROP TYPE "public"."enum_departments_blocks_page_banner_links_appearance";
  DROP TYPE "public"."enum_departments_blocks_page_banner_variant";
  DROP TYPE "public"."enum_departments_blocks_page_banner_align";
  DROP TYPE "public"."enum_departments_blocks_section_tabs_items_type";
  DROP TYPE "public"."enum_departments_blocks_section_tabs_variant";
  DROP TYPE "public"."enum_departments_blocks_section_tabs_align";
  DROP TYPE "public"."enum_departments_blocks_rich_text_header_align";
  DROP TYPE "public"."enum_departments_blocks_rich_text_width";
  DROP TYPE "public"."enum_departments_blocks_rich_text_background";
  DROP TYPE "public"."enum_departments_blocks_card_grid_items_link_type";
  DROP TYPE "public"."enum_departments_blocks_card_grid_variant";
  DROP TYPE "public"."enum_departments_blocks_card_grid_header_align";
  DROP TYPE "public"."enum_departments_blocks_card_grid_background";
  DROP TYPE "public"."enum_departments_blocks_quote_banner_variant";
  DROP TYPE "public"."enum_departments_blocks_quote_banner_cta_type";
  DROP TYPE "public"."enum_departments_blocks_quote_banner_cta_appearance";
  DROP TYPE "public"."enum_departments_blocks_accelerators_items_link_type";
  DROP TYPE "public"."enum_departments_blocks_accelerators_header_align";
  DROP TYPE "public"."enum_departments_blocks_posts_feed_filter_items_kind";
  DROP TYPE "public"."enum_departments_blocks_posts_feed_variant";
  DROP TYPE "public"."enum_departments_blocks_posts_feed_header_align";
  DROP TYPE "public"."enum_departments_blocks_posts_feed_source";
  DROP TYPE "public"."enum_departments_blocks_posts_feed_kind";
  DROP TYPE "public"."enum_departments_blocks_posts_feed_filter_style";
  DROP TYPE "public"."enum_departments_blocks_posts_feed_more_link_type";
  DROP TYPE "public"."enum_departments_blocks_gallery_variant";
  DROP TYPE "public"."enum_departments_blocks_history_grid_title_tone";
  DROP TYPE "public"."enum_departments_blocks_people_grid_variant";
  DROP TYPE "public"."enum_departments_blocks_people_grid_source";
  DROP TYPE "public"."enum_departments_blocks_people_grid_group";
  DROP TYPE "public"."enum_departments_blocks_data_table_header_align";
  DROP TYPE "public"."enum_departments_blocks_data_table_variant";
  DROP TYPE "public"."enum_departments_blocks_department_grid_header_align";
  DROP TYPE "public"."enum_departments_blocks_department_grid_source";
  DROP TYPE "public"."enum_departments_blocks_process_steps_header_align";
  DROP TYPE "public"."enum_departments_blocks_figure_variant";
  DROP TYPE "public"."enum_departments_blocks_region_map_header_align";
  DROP TYPE "public"."enum_departments_status";
  DROP TYPE "public"."enum__departments_v_blocks_page_banner_links_type";
  DROP TYPE "public"."enum__departments_v_blocks_page_banner_links_appearance";
  DROP TYPE "public"."enum__departments_v_blocks_page_banner_variant";
  DROP TYPE "public"."enum__departments_v_blocks_page_banner_align";
  DROP TYPE "public"."enum__departments_v_blocks_section_tabs_items_type";
  DROP TYPE "public"."enum__departments_v_blocks_section_tabs_variant";
  DROP TYPE "public"."enum__departments_v_blocks_section_tabs_align";
  DROP TYPE "public"."enum__departments_v_blocks_rich_text_header_align";
  DROP TYPE "public"."enum__departments_v_blocks_rich_text_width";
  DROP TYPE "public"."enum__departments_v_blocks_rich_text_background";
  DROP TYPE "public"."enum__departments_v_blocks_card_grid_items_link_type";
  DROP TYPE "public"."enum__departments_v_blocks_card_grid_variant";
  DROP TYPE "public"."enum__departments_v_blocks_card_grid_header_align";
  DROP TYPE "public"."enum__departments_v_blocks_card_grid_background";
  DROP TYPE "public"."enum__departments_v_blocks_quote_banner_variant";
  DROP TYPE "public"."enum__departments_v_blocks_quote_banner_cta_type";
  DROP TYPE "public"."enum__departments_v_blocks_quote_banner_cta_appearance";
  DROP TYPE "public"."enum__departments_v_blocks_accelerators_items_link_type";
  DROP TYPE "public"."enum__departments_v_blocks_accelerators_header_align";
  DROP TYPE "public"."enum__departments_v_blocks_posts_feed_filter_items_kind";
  DROP TYPE "public"."enum__departments_v_blocks_posts_feed_variant";
  DROP TYPE "public"."enum__departments_v_blocks_posts_feed_header_align";
  DROP TYPE "public"."enum__departments_v_blocks_posts_feed_source";
  DROP TYPE "public"."enum__departments_v_blocks_posts_feed_kind";
  DROP TYPE "public"."enum__departments_v_blocks_posts_feed_filter_style";
  DROP TYPE "public"."enum__departments_v_blocks_posts_feed_more_link_type";
  DROP TYPE "public"."enum__departments_v_blocks_gallery_variant";
  DROP TYPE "public"."enum__departments_v_blocks_history_grid_title_tone";
  DROP TYPE "public"."enum__departments_v_blocks_people_grid_variant";
  DROP TYPE "public"."enum__departments_v_blocks_people_grid_source";
  DROP TYPE "public"."enum__departments_v_blocks_people_grid_group";
  DROP TYPE "public"."enum__departments_v_blocks_data_table_header_align";
  DROP TYPE "public"."enum__departments_v_blocks_data_table_variant";
  DROP TYPE "public"."enum__departments_v_blocks_department_grid_header_align";
  DROP TYPE "public"."enum__departments_v_blocks_department_grid_source";
  DROP TYPE "public"."enum__departments_v_blocks_process_steps_header_align";
  DROP TYPE "public"."enum__departments_v_blocks_figure_variant";
  DROP TYPE "public"."enum__departments_v_blocks_region_map_header_align";
  DROP TYPE "public"."enum__departments_v_version_status";
  DROP TYPE "public"."enum__departments_v_published_locale";
  DROP TYPE "public"."enum_hubs_blocks_page_banner_links_type";
  DROP TYPE "public"."enum_hubs_blocks_page_banner_links_appearance";
  DROP TYPE "public"."enum_hubs_blocks_page_banner_variant";
  DROP TYPE "public"."enum_hubs_blocks_page_banner_align";
  DROP TYPE "public"."enum_hubs_blocks_section_tabs_items_type";
  DROP TYPE "public"."enum_hubs_blocks_section_tabs_variant";
  DROP TYPE "public"."enum_hubs_blocks_section_tabs_align";
  DROP TYPE "public"."enum_hubs_blocks_rich_text_header_align";
  DROP TYPE "public"."enum_hubs_blocks_rich_text_width";
  DROP TYPE "public"."enum_hubs_blocks_rich_text_background";
  DROP TYPE "public"."enum_hubs_blocks_card_grid_items_link_type";
  DROP TYPE "public"."enum_hubs_blocks_card_grid_variant";
  DROP TYPE "public"."enum_hubs_blocks_card_grid_header_align";
  DROP TYPE "public"."enum_hubs_blocks_card_grid_background";
  DROP TYPE "public"."enum_hubs_blocks_quote_banner_variant";
  DROP TYPE "public"."enum_hubs_blocks_quote_banner_cta_type";
  DROP TYPE "public"."enum_hubs_blocks_quote_banner_cta_appearance";
  DROP TYPE "public"."enum_hubs_blocks_accelerators_items_link_type";
  DROP TYPE "public"."enum_hubs_blocks_accelerators_header_align";
  DROP TYPE "public"."enum_hubs_blocks_posts_feed_filter_items_kind";
  DROP TYPE "public"."enum_hubs_blocks_posts_feed_variant";
  DROP TYPE "public"."enum_hubs_blocks_posts_feed_header_align";
  DROP TYPE "public"."enum_hubs_blocks_posts_feed_source";
  DROP TYPE "public"."enum_hubs_blocks_posts_feed_kind";
  DROP TYPE "public"."enum_hubs_blocks_posts_feed_filter_style";
  DROP TYPE "public"."enum_hubs_blocks_posts_feed_more_link_type";
  DROP TYPE "public"."enum_hubs_blocks_gallery_variant";
  DROP TYPE "public"."enum_hubs_blocks_history_grid_title_tone";
  DROP TYPE "public"."enum_hubs_blocks_people_grid_variant";
  DROP TYPE "public"."enum_hubs_blocks_people_grid_source";
  DROP TYPE "public"."enum_hubs_blocks_people_grid_group";
  DROP TYPE "public"."enum_hubs_blocks_data_table_header_align";
  DROP TYPE "public"."enum_hubs_blocks_data_table_variant";
  DROP TYPE "public"."enum_hubs_blocks_department_grid_header_align";
  DROP TYPE "public"."enum_hubs_blocks_department_grid_source";
  DROP TYPE "public"."enum_hubs_blocks_process_steps_header_align";
  DROP TYPE "public"."enum_hubs_blocks_figure_variant";
  DROP TYPE "public"."enum_hubs_blocks_region_map_header_align";
  DROP TYPE "public"."enum_hubs_status";
  DROP TYPE "public"."enum__hubs_v_blocks_page_banner_links_type";
  DROP TYPE "public"."enum__hubs_v_blocks_page_banner_links_appearance";
  DROP TYPE "public"."enum__hubs_v_blocks_page_banner_variant";
  DROP TYPE "public"."enum__hubs_v_blocks_page_banner_align";
  DROP TYPE "public"."enum__hubs_v_blocks_section_tabs_items_type";
  DROP TYPE "public"."enum__hubs_v_blocks_section_tabs_variant";
  DROP TYPE "public"."enum__hubs_v_blocks_section_tabs_align";
  DROP TYPE "public"."enum__hubs_v_blocks_rich_text_header_align";
  DROP TYPE "public"."enum__hubs_v_blocks_rich_text_width";
  DROP TYPE "public"."enum__hubs_v_blocks_rich_text_background";
  DROP TYPE "public"."enum__hubs_v_blocks_card_grid_items_link_type";
  DROP TYPE "public"."enum__hubs_v_blocks_card_grid_variant";
  DROP TYPE "public"."enum__hubs_v_blocks_card_grid_header_align";
  DROP TYPE "public"."enum__hubs_v_blocks_card_grid_background";
  DROP TYPE "public"."enum__hubs_v_blocks_quote_banner_variant";
  DROP TYPE "public"."enum__hubs_v_blocks_quote_banner_cta_type";
  DROP TYPE "public"."enum__hubs_v_blocks_quote_banner_cta_appearance";
  DROP TYPE "public"."enum__hubs_v_blocks_accelerators_items_link_type";
  DROP TYPE "public"."enum__hubs_v_blocks_accelerators_header_align";
  DROP TYPE "public"."enum__hubs_v_blocks_posts_feed_filter_items_kind";
  DROP TYPE "public"."enum__hubs_v_blocks_posts_feed_variant";
  DROP TYPE "public"."enum__hubs_v_blocks_posts_feed_header_align";
  DROP TYPE "public"."enum__hubs_v_blocks_posts_feed_source";
  DROP TYPE "public"."enum__hubs_v_blocks_posts_feed_kind";
  DROP TYPE "public"."enum__hubs_v_blocks_posts_feed_filter_style";
  DROP TYPE "public"."enum__hubs_v_blocks_posts_feed_more_link_type";
  DROP TYPE "public"."enum__hubs_v_blocks_gallery_variant";
  DROP TYPE "public"."enum__hubs_v_blocks_history_grid_title_tone";
  DROP TYPE "public"."enum__hubs_v_blocks_people_grid_variant";
  DROP TYPE "public"."enum__hubs_v_blocks_people_grid_source";
  DROP TYPE "public"."enum__hubs_v_blocks_people_grid_group";
  DROP TYPE "public"."enum__hubs_v_blocks_data_table_header_align";
  DROP TYPE "public"."enum__hubs_v_blocks_data_table_variant";
  DROP TYPE "public"."enum__hubs_v_blocks_department_grid_header_align";
  DROP TYPE "public"."enum__hubs_v_blocks_department_grid_source";
  DROP TYPE "public"."enum__hubs_v_blocks_process_steps_header_align";
  DROP TYPE "public"."enum__hubs_v_blocks_figure_variant";
  DROP TYPE "public"."enum__hubs_v_blocks_region_map_header_align";
  DROP TYPE "public"."enum__hubs_v_version_status";
  DROP TYPE "public"."enum__hubs_v_published_locale";
  DROP TYPE "public"."enum_board_members_group";
  DROP TYPE "public"."enum_membership_tiers_blocks_page_banner_links_type";
  DROP TYPE "public"."enum_membership_tiers_blocks_page_banner_links_appearance";
  DROP TYPE "public"."enum_membership_tiers_blocks_page_banner_variant";
  DROP TYPE "public"."enum_membership_tiers_blocks_page_banner_align";
  DROP TYPE "public"."enum_membership_tiers_blocks_section_tabs_items_type";
  DROP TYPE "public"."enum_membership_tiers_blocks_section_tabs_variant";
  DROP TYPE "public"."enum_membership_tiers_blocks_section_tabs_align";
  DROP TYPE "public"."enum_membership_tiers_blocks_rich_text_header_align";
  DROP TYPE "public"."enum_membership_tiers_blocks_rich_text_width";
  DROP TYPE "public"."enum_membership_tiers_blocks_rich_text_background";
  DROP TYPE "public"."enum_membership_tiers_blocks_card_grid_items_link_type";
  DROP TYPE "public"."enum_membership_tiers_blocks_card_grid_variant";
  DROP TYPE "public"."enum_membership_tiers_blocks_card_grid_header_align";
  DROP TYPE "public"."enum_membership_tiers_blocks_card_grid_background";
  DROP TYPE "public"."enum_membership_tiers_blocks_quote_banner_variant";
  DROP TYPE "public"."enum_membership_tiers_blocks_quote_banner_cta_type";
  DROP TYPE "public"."enum_membership_tiers_blocks_quote_banner_cta_appearance";
  DROP TYPE "public"."enum_membership_tiers_blocks_accelerators_items_link_type";
  DROP TYPE "public"."enum_membership_tiers_blocks_accelerators_header_align";
  DROP TYPE "public"."enum_membership_tiers_blocks_posts_feed_filter_items_kind";
  DROP TYPE "public"."enum_membership_tiers_blocks_posts_feed_variant";
  DROP TYPE "public"."enum_membership_tiers_blocks_posts_feed_header_align";
  DROP TYPE "public"."enum_membership_tiers_blocks_posts_feed_source";
  DROP TYPE "public"."enum_membership_tiers_blocks_posts_feed_kind";
  DROP TYPE "public"."enum_membership_tiers_blocks_posts_feed_filter_style";
  DROP TYPE "public"."enum_membership_tiers_blocks_posts_feed_more_link_type";
  DROP TYPE "public"."enum_membership_tiers_blocks_gallery_variant";
  DROP TYPE "public"."enum_membership_tiers_blocks_history_grid_title_tone";
  DROP TYPE "public"."enum_membership_tiers_blocks_people_grid_variant";
  DROP TYPE "public"."enum_membership_tiers_blocks_people_grid_source";
  DROP TYPE "public"."enum_membership_tiers_blocks_people_grid_group";
  DROP TYPE "public"."enum_membership_tiers_blocks_data_table_header_align";
  DROP TYPE "public"."enum_membership_tiers_blocks_data_table_variant";
  DROP TYPE "public"."enum_membership_tiers_blocks_department_grid_header_align";
  DROP TYPE "public"."enum_membership_tiers_blocks_department_grid_source";
  DROP TYPE "public"."enum_membership_tiers_blocks_process_steps_header_align";
  DROP TYPE "public"."enum_membership_tiers_blocks_figure_variant";
  DROP TYPE "public"."enum_membership_tiers_blocks_region_map_header_align";
  DROP TYPE "public"."enum_members_status";
  DROP TYPE "public"."enum_feedback_status";
  DROP TYPE "public"."enum_theme_font_display";
  DROP TYPE "public"."enum_theme_font_body";
  DROP TYPE "public"."enum_theme_font_ui";
  DROP TYPE "public"."enum_site_settings_announcement_links_type";
  DROP TYPE "public"."enum_site_settings_header_nav_type";
  DROP TYPE "public"."enum_site_settings_footer_top_links_type";
  DROP TYPE "public"."enum_site_settings_footer_nav_groups_links_type";
  DROP TYPE "public"."enum_site_settings_footer_social_links_platform";
  DROP TYPE "public"."enum_site_settings_footer_legal_links_type";
  DROP TYPE "public"."enum_site_settings_announcement_cta_type";
  DROP TYPE "public"."enum_site_settings_header_login_link_type";
  DROP TYPE "public"."enum_site_settings_auth_login_forgot_link_type";
  DROP TYPE "public"."enum_site_settings_auth_login_register_link_type";
  DROP TYPE "public"."enum_site_settings_auth_login_back_link_type";`)
}
