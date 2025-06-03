import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: 'postgresql',
  schema: "./utils/Schema.ts",
  dbCredentials:{
    url:"postgresql://infinitext_owner:npg_fH8XjU1LSKsw@ep-hidden-king-a9y8bgui-pooler.gwc.azure.neon.tech/ai-content-generator?sslmode=require"
  }
})