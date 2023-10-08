Installation

    Using pre-compiled binaries
    From source
    Using Docker
        Volumes & bind-mount
        Save your Prometheus data
        Custom image
    Using configuration management systems
        Ansible
        Chef
        Puppet
        SaltStack

Using pre-compiled binaries

We provide precompiled binaries for most official Prometheus components. Check out the download section for a list of all available versions.
From source

For building Prometheus components from source, see the Makefile targets in the respective repository.
Using Docker

All Prometheus services are available as Docker images on Quay.io or Docker Hub.

Running Prometheus on Docker is as simple as docker run -p 9090:9090 prom/prometheus. This starts Prometheus with a sample configuration and exposes it on port 9090.

The Prometheus image uses a volume to store the actual metrics. For production deployments it is highly recommended to use a named volume to ease managing the data on Prometheus upgrades.

To provide your own configuration, there are several options. Here are two examples.
Volumes & bind-mount

Bind-mount your prometheus.yml from the host by running:

#Executei no meu ambiente (WSL2 ubuntu-22.04)
docker run \
    -p 9090:9090 \
    -v /home/drjunior_br/dev/src/estudo-performance-tuning/apm/prometheus/prometheus.yaml:/etc/prometheus/prometheus.yml \
    --add-host host.docker.internal:host-gateway \
    prom/prometheus

Or bind-mount the directory containing prometheus.yml onto /etc/prometheus by running:

docker run \
    -p 9090:9090 \
    -v /home/drjunior_br/dev/src/estudo-performance-tuning/apm/prometheus/:/etc/prometheus \
    prom/prometheus

Save your Prometheus data

Prometheus data is stored in /prometheus dir inside the container, so the data is cleared every time the container gets restarted. To save your data, you need to set up persistent storage (or bind mounts) for your container.

Run Prometheus container with persistent storage:

# Create persistent volume for your data
docker volume create prometheus-data
# Start Prometheus container
docker run \
    -p 9090:9090 \
    -v /path/to/prometheus.yml:/etc/prometheus/prometheus.yml \
    -v prometheus-data:/prometheus \
    prom/prometheus

Custom image

To avoid managing a file on the host and bind-mount it, the configuration can be baked into the image. This works well if the configuration itself is rather static and the same across all environments.

For this, create a new directory with a Prometheus configuration and a Dockerfile like this:

FROM prom/prometheus
ADD prometheus.yml /etc/prometheus/

Now build and run it:

docker build -t my-prometheus .
docker run -p 9090:9090 my-prometheus

A more advanced option is to render the configuration dynamically on start with some tooling or even have a daemon update it periodically.