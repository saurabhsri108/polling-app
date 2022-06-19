Some learnings:

1. In MySQL query layer and data layer (data store - INNODB) are 2 separate things so one can replace the datalayer while keeping the query layer.
2. PostgreSQL has both of them together.
3. Planetscale is extremely scalable mysql datastore! It uses Vitess (for deployment, scaling, and managing large cluster) and MySQL. Has built-in connection pooling meaning never run into connection limits for database. Non-blocking schema changes makes it easy to deploy changes to production.
4. Prisma is an ORM with some typescript ability!? It basically translates between mysql and typescript.

