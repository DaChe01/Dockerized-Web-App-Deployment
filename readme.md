# Dockerized Web App Deployment using Ansible Playbook on Kubernetes Cluster

This project demonstrates a complete CI/CD workflow for deploying a React application using Docker, Ansible, and Minikube (Kubernetes).

---

## 🚀 Project Structure

```
project/
├── ansible/
│   ├── inventory.ini
│   ├── playbooks/
│   │   ├── install_docker.yaml
│   │   ├── install_k8s.yaml
│   │   ├── build_push_image.yaml
│   │   └── deploy_k8s.yaml
│   └── roles/
│       ├── deployment.yaml
│       └── service.yaml
├── app/
│   ├── Dockerfile
│   └── public/
│   └── src/
│       ├── components/
│       │   ├── App.jsx
│       │   └── dict.jsx
│       ├── emojipedia.js
│       ├── index.jsx
│       ├── package.json
│       └── vite.config.js
```

---

## 🔧 Technologies Used

* React.js
* Docker
* Ansible
* Kubernetes (Minikube)
* Nginx

---

## 📜 Ansible Playbooks

### `install.yaml`

* Installs Docker and Minikube on the remote host.

### `start.yaml`

* Starts Minikube with Docker driver and cleans any previous clusters.

### `deploy.yaml`

* Builds the React app image locally.
* Transfers the Docker image to the remote server.
* Loads the image into Minikube's Docker.
* Applies Kubernetes manifests (`deployment.yaml`, `service.yaml`).

---

## 📦 Docker Setup

A multi-stage Dockerfile is used:

1. **Build Stage**: Compiles the React app using `node:latest`.
2. **Run Stage**: Serves the compiled files using `nginx:alpine`.

---

## ☸️ Kubernetes Configuration

### `deployment.yaml`

* Deploys a single replica pod for `react-app:v1`.
* Exposes port 80.

### `service.yaml`

* Exposes the deployment using `LoadBalancer` on `nodePort: 30036`.

---

## 📱 React Application

This is a simple emoji dictionary app:

* `App.jsx` maps over `emojipedia.js` and renders entries.
* `dict.jsx` renders each emoji entry.

---

## 🔄 Deployment Flow

1. Run `install.yaml` to install Docker and Minikube.
2. Run `start.yaml` to start the Minikube cluster.
3. Run `deploy.yaml` to build, transfer, and deploy the app.
4. Access the app via `Minikube IP:30036`.

---

## 📌 Notes

* Make sure Docker and Ansible are installed on your local machine.
* Remote host should be accessible via SSH.
* Customize `inventory.ini` with your remote host details.

---

## 📧 Author

**Khangembam Alex D Nelson**

---

## 🏷️ Tags

`#React` `#Ansible` `#Docker` `#Kubernetes` `#Minikube` `#CI/CD`
