# Dockerized Web App Deployment using Ansible Playbook on Kubernetes Cluster

This project demonstrates a complete CI/CD workflow for deploying a React application using Docker, Ansible, and Minikube (Kubernetes).

---

## 🚀 Project Structure

```
project/
├── ansible/
│   ├── inventory.ini
│   ├── playbooks/
│   │   ├── install.yaml
│   │   ├── start.yaml
│   │   └── deploy.yaml
│   └── roles/
│       ├── deployment.yaml
│       └── service.yaml
├── app/
│   ├── Dockerfile
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── App.jsx
│   │   │   └── dict.jsx
│   │   ├── emojipedia.js
│   │   ├── index.jsx
│   │   ├── package.json
│   │   └── vite.config.js
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

## ☘️ Kubernetes Configuration

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

## 🛠️ How to Run (Execution Steps)

> ⚠️ Ensure your local system has Docker and Ansible installed. SSH must be enabled on the remote host.

### 1. Update Inventory File

Edit `ansible/inventory.ini` with the IP address or hostname of your remote server:

```
[web]
192.168.1.X ansible_user=your_user ansible_ssh_private_key_file=~/.ssh/id_rsa ansible_port=2222
```

---

### 2. Install Dependencies on Remote Host

```bash
cd ansible/playbooks
ansible-playbook -i ../inventory.ini install.yaml
```

---

### 3. Start Minikube on Remote Host

```bash
ansible-playbook -i ../inventory.ini start.yaml
```

---

### 4. Deploy the App

```bash
ansible-playbook -i ../inventory.ini deploy.yaml
```

---

### 5. Access the App

Get the Minikube IP:

```bash
minikube ip
```

Access the app in your browser at:
`http://<Minikube-IP>:30036`

---

## 📌 Notes

* The Docker image is built on your local system and transferred to the remote host.
* Kubernetes manifests are applied from the `roles/` directory.
* Vite + Nginx is used for blazing-fast frontend delivery.

---

## 📧 Author

**Khangembam Alex D Nelson**

---

## 🏷️ Tags

`#React` `#Ansible` `#Docker` `#Kubernetes` `#Minikube` `#CI/CD`
