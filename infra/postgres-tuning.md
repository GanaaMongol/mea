# /etc/postgresql/16/main/postgresql.conf — өөрчилсөн утгууд

listen_addresses = 'localhost'
shared_buffers = 256MB
effective_cache_size = 512MB
work_mem = 8MB
maintenance_work_mem = 64MB
max_connections = 25
random_page_cost = 1.1

# OOM хамгаалалт: systemctl edit postgresql@16-main
# [Service]
# OOMScoreAdjust=-900
