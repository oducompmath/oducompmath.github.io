// Add new talks by appending another object to this array.
// Keep date as YYYY-MM-DD so automatic sorting works.
window.SEMINAR_TALKS = [
  {
    semester: "Fall 2026",
    date: "2026-09-08",
    title: "Integrating Physics into AI Surrogate Models for Complex Systems",
    speaker: "Prof. Xuping Xie",
    affiliation: "",
    bio: "",
    time: "12:30 PM",
    location: "ECSB 2120",
    format: "Seminar",
    abstract:
      "Machine learned surrogates promise large speedups for multiscale simulation, but purely black box ML/AI models struggle with stiffness, chaos, and physical consistency. This talk presents a general framework that combines autoencoders with latent neural differential equations, embedding known physical structure such as conserved quantities, timescale separation, and stability constraints into the learned representation and its dynamics. Rather than replacing physics with data, the approach uses each where it is strongest: exact structure is enforced by construction, while the remaining dynamics is learned. We will demonstrate the framework on two application problems: a stiff kinetic system and a chaotic wall-bounded turbulent flow, and discuss what physics is worth building in, what a latent space can and cannot simplify, and open challenges for surrogate modeling of nonstationary multiscale systems.",
    slides:
      "https://drive.google.com/file/d/1I3M28VXHxnEqgFctlnwequa01SeGpbUh/view?usp=sharing",
  },
  {
    semester: "Fall 2026",
    date: "2026-09-15",
    title:
      "Multi-Grade Deep Learning for Numerical Solutions of Operator Equations",
    speaker: "Prof. Yuesheng Xu",
    affiliation: "",
    bio: "",
    time: "12:30 PM",
    location: "ECSB 2120",
    format: "Seminar",
    abstract:
      "Traditional deep learning frameworks rely on end-to-end training to solve large-scale, non-convex optimization problems. Consequently, they often suffer from spectral bias, training instability, and static architecture constraints. To address these fundamental challenges, we recently introduced the multi-grade deep learning (MGDL) framework. In this talk, we present the MGDL methodology specifically developed for solving operator equations and demonstrate its mathematical performance across several challenging benchmark problems, including oscillatory integral equations, the Helmholtz equation, and the Navier-Stokes equations.",
    slides: "",
  },
];
