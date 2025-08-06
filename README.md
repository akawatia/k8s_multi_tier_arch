# Multi-tier architecture on Kubernetes
This repository is used to containerize, and deploy a multi-tier architecture on Kubernetes involving one microservice and one database.

# Code Repository
[GitHub Repository](https://github.com/akawatia/k8s_multi_tier_arch)

# Docker Images
- **Node.js API**: [Docker Hub - node-app-service](https://hub.docker.com/r/ankitkawtia/node-app-service)
- **MySQL**: Using the official MySQL Docker Hub image.

# API Endpoint(Service Tier)
Once deployed to GKE with Ingress, the Node.js API is available at:

**URL**: [http://34.60.243.164/employees](http://34.60.243.164/employees)
This endpoint returns data from the MySQL backend tier.
