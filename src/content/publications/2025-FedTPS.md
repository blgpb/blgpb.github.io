---
title: "FedTPS: traffic pattern sharing for personalized federated traffic flow prediction"
venue: "KAIS"
year: 2025
authors:
  - "Hang Zhou"
  - "Wentao Yu"
  - "Sheng Wan"
  - "Yongxin Tong"
  - "Tianlong Gu"
  - "Chen Gong"
summary: "A FL framework termed “personalized Federated learning with Traffic Pattern Sharing” (FedTPS) to solve federated Traffic Flow Prediction problem."
abstract: "Traffic flow prediction plays a critical role in ensuring the efficiency of transportation systems, which has motivated extensive research into capturing spatial-temporal dependencies within road networks. However, most existing approaches depend on centralized data, potentially raising privacy concerns as traffic data is often managed by different traffic administration departments and restricted from distribution. To address this issue, federated learning (FL) allows collaborative model training without exchanging raw data. Nevertheless, traditional FL methods are designed to optimize a model that performs well globally, making them inadequate for handling the naturally non-independent and identically distributed traffic data across different regions. To overcome this limitation, we propose a new framework termed “personalized Federated learning with Traffic Pattern Sharing” (FedTPS), which exploits the sharing of underlying common traffic patterns across regions while preserving region-specific characteristics in a personalized manner. Specifically, discrete wavelet transform is employed to decompose the traffic data and extract low-frequency components in each client that reflect stable traffic dynamics. The clients then learn representative traffic patterns from these stable traffic dynamics and store them in traffic pattern repositories. Afterward, these repositories are shared with a central server, which enables the identification and integration of common traffic patterns to improve global learning. Meanwhile, the model components capturing spatial-temporal dependencies are retained for local training, ensuring adaptation to regionspecific data. Intensive experiments on four real-world traffic datasets firmly demonstrate the superiority of our proposed FedTPS over traditional FL methods across various estimation errors."
topics:
  - "Graph Federated Learning"
  - "Federated Traffic Prediction"
featured: false
links:
  pdf: "https://link.springer.com/article/10.1007/s10115-025-02393-7"
  # arxiv: "https://arxiv.org/abs/2310.12345"
  # project: "https://trustworthy-fl.ai"
  # slides: "https://example.com/slides/trustworthy-fl.pdf"
  code: "https://github.com/lichuan210/FedTPS"
  # video: "https://youtu.be/example-trust"
badges:
  - "artifact-evaluated"
  - "code-release"

---