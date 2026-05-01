---
title: "Heterogeneity-Aware Knowledge Sharing for Graph Federated Learning"
venue: "ICML"
year: 2026
authors:
  - "Wentao Yu"
  - "Sheng Wan"
  - "Shuo Chen"
  - "Bo Han"
  - "Chen Gong"
summary: "A novel Graph Federated Learning method via semantic and structural alignment."
abstract: "Graph Federated Learning (GFL) enables distributed graph representation learning while protecting the privacy of graph data. However, GFL suffers from heterogeneity arising from diverse node features and structural topologies across multiple clients. To address both types of heterogeneity, we propose a novel graph Federated learning method via Semantic and Structural Alignment (FedSSA), which shares the knowledge of both node features and structural topologies. For node feature heterogeneity, we propose a novel variational model to infer class-wise node distributions, so that we can cluster clients based on inferred distributions and construct cluster-level representative distributions. We then minimize the divergence between local and cluster-level distributions to facilitate semantic knowledge sharing. For structural heterogeneity, we employ spectral Graph Neural Networks (GNNs) and propose a spectral energy measure to characterize structural information, so that we can cluster clients based on spectral energy and build cluster-level spectral GNNs. We then align the spectral characteristics of local spectral GNNs with those of cluster-level spectral GNNs to enable structural knowledge sharing. Experiments on six homophilic and five heterophilic graph datasets under both non-overlapping and overlapping partitioning settings demonstrate that FedSSA consistently outperforms eleven state-of-the-art methods."
topics:
  - "Graph Federated Learning"
  - "Personalized Federated Learning"
awards:
  - "Poster"
featured: true
links:
  # pdf: "https://ojs.aaai.org/index.php/AAAI/article/view/34378/36533"
  arxiv: "https://arxiv.org/abs/2601.21589"
#   project: "https://stream-gnn.ai"
#   slides: "https://example.com/slides"
  code: "https://github.com/blgpb/Fed"
#   video: "https://youtu.be/example-gnn"
badges:
  - "dataset-release"
  - "code-release"

---
Extended experimental appendix and datasets accompany the paper.
