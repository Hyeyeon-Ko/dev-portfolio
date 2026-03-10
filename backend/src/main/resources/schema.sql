CREATE TABLE IF NOT EXISTS blog_posts (
    id             BIGSERIAL PRIMARY KEY,
    title          VARCHAR(200)        NOT NULL,
    content_md     TEXT                NOT NULL,
    excerpt        VARCHAR(300)        NOT NULL,
    category       VARCHAR(20)         NOT NULL,
    status         VARCHAR(20)         NOT NULL DEFAULT 'DRAFT',
    published_at   TIMESTAMPTZ,
    cover_image_url TEXT,
    read_time_min  INTEGER,
    like_count     INTEGER             NOT NULL DEFAULT 0,
    comment_count  INTEGER             NOT NULL DEFAULT 0,
    created_at     TIMESTAMPTZ         NOT NULL DEFAULT NOW(),
    updated_at     TIMESTAMPTZ         NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS post_comments (
    id           BIGSERIAL PRIMARY KEY,
    post_id      BIGINT      NOT NULL REFERENCES blog_posts(id) ON DELETE CASCADE,
    author_name  VARCHAR(50),
    content      TEXT        NOT NULL,
    created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS post_likes (
    id           BIGSERIAL PRIMARY KEY,
    post_id      BIGINT      NOT NULL REFERENCES blog_posts(id) ON DELETE CASCADE,
    visitor_key  VARCHAR(64) NOT NULL,
    created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (post_id, visitor_key)
);
