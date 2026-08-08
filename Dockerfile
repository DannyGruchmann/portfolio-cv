# ---- Build stage ----
FROM node:22.12-alpine AS builder

WORKDIR /app

# Copy manifests first so this layer stays cached while only sources change
COPY package.json package-lock.json ./

# npm install instead of npm ci: the lockfile omits the linux-only optional
# deps @emnapi/* (pulled in by @napi-rs/wasm-runtime), because npm does not
# record them when the lockfile is generated on macOS. npm ci fails on those.
RUN npm install --no-audit --no-fund

COPY . .

RUN npm run build

# ---- Runtime stage ----
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/portfolio-developer-akademie/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
