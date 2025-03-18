call pnpm init
call pnpm install touch-cli -g
call mkdir src
call touch src/server.ts
call pnpm install typescript -D
call npx tsc --init
call pnpm i zod
call pnpm i vitest -D
call pnpm i tsup -D
call pnpm i tsx -D
call pnpm install express
call pnpm install --save-dev @types/express