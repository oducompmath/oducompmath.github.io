// Add new talks by appending another object to this array.
// Keep date as YYYY-MM-DD so automatic sorting works.
// For multiple abstract paragraphs, use backticks and separate paragraphs with a blank line.
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
    slides:
      "https://drive.google.com/file/d/12FtxNnV8Jn4VzvVuOLYXWKYUSt9B3WcM/view?usp=sharing",
  },
  {
    semester: "Fall 2026",
    date: "2026-09-22",
    title:
      "Finite-Difference Multi-Grade Deep Learning for Incompressible Navier-Stokes Equations",
    speaker: "Yuning Zhang",
    affiliation: "",
    bio: "",
    time: "12:30 PM",
    location: "ECSB 2120",
    format: "Seminar",
    abstract:
      "We present a finite-difference multi-grade deep learning (FD-MGDL) method for solving incompressible Navier-Stokes Equations. The governing equations are enforced through finite-difference residuals, while the neural network is constructed progressively through a sequence of corrections. Each grade improves the solution obtained from the preceding grades while retaining previously learned features. Numerical experiments on several steady and unsteady incompressible flows demonstrate that FD-MGDL can achieve accurate solutions with substantially reduced training time and GPU memory compared with conventional single-network training.",
    slides:
      "https://drive.google.com/file/d/1cNA0hQCNDSYIQOduWSRqo9EwMrlEL6Yo/view?usp=sharing",
  },
  {
    semester: "Fall 2026",
    date: "2026-10-22",
    title: "A Hands-On Tutorial on Neural Networks",
    speaker: "Prof. Xuping Xie",
    affiliation: "",
    bio: "",
    time: "12:30 PM",
    location: "ECSB 2120",
    format: "Seminar",
    abstract:
      "In this tutorial, we will cover the basics of neural networks (NNs), including network architecture, activation functions, training, and backpropagation. As two short illustrative demos, we will build an NN to approximate a function, and a physics-informed neural network (PINN) to solve the 1D Burgers equation.",
  },
  {
    semester: "Fall 2026",
    date: "2026-11-10",
    title:
      "Entropy stable high-order schemes for the compressible Navier–Stokes equations with isothermal no-slip wall boundary conditions",
    speaker: "Dr. Mohammed Sayyari",
    affiliation: "",
    bio: "",
    time: "12:30 PM",
    location: "ECSB 2120",
    format: "Seminar",
    abstract:
      "Entropy-stable boundary conditions are critical for ensuring that the corresponding numerical scheme satisfies the discrete entropy inequality, thus mimicking the second law of thermodynamics for the compressible Navier-Stokes equations. Entropy-stable adiabatic wall boundary conditions were introduced by Parsani (2014). Then, further generalized by Dalcin (2019) to a moving adiabatic solid wall or a wall with a prescribed heat flux using summation-by-parts (SBP) operators. Also, a similar approach was used in Chan (2022) to impose adiabatic and isothermal no-slip wall boundary conditions for the modal Discontinuous Galerkin method. While the proposed isothermal no-slip wall boundary conditions in Chan (2022) mimic the continuous entropy inequality, they are not entropy-stable and invariably lead to positive entropy production. This talk presents a new isothermal no-slip wall boundary condition that: 1) enforces the T(y=0)=T_wall and v(y=0)=v_wall conditions with design-order accuracy while maintaining stability, 2) provides the correct sign of entropy production, and 3) mimics the entropy balance of the Navier-Stokes equations at the discrete level. The structure-preserving and design-order properties of the proposed methodology are demonstrated on standard benchmark problems for compressible flows.",
  },
  {
    semester: "Fall 2026",
    date: "2026-11-19",
    title:
      "A Neural-network-based multiscale Hybridizable Discontinuous Galerkin method for solving PDEs in porous media",
    speaker: "Dr. Tony Haines",
    affiliation: "",
    bio: "",
    time: "12:30 PM",
    location: "ECSB 2120",
    format: "Seminar",
    abstract: `Multiscale hybridizable discontinuous Galerkin (MsHDG) methods provide a flexible framework for solving flow problems in heterogeneous media. Their key feature is a local-to-global decomposition: fine-scale problems are solved independently on coarse subdomains, while the global coupling is carried only by trace unknowns on the coarse skeleton. From this viewpoint, each local HDG solver defines a Dirichlet-to-Neumann (DtN) map that converts prescribed trace data into numerical fluxes. This interpretation can be applied to a wide range of linear and nonlinear PDEs.

      The main computational bottleneck is the repeated construction of these local DtN operators when the coefficients or solution state vary. Motivated by the element-learning framework of Du and Stechmann, we replace the expensive local solver by a neural-network surrogate. Rather than learning element-level operators, however, we learn the DtN map associated with an entire MsHDG coarse block, which may contain many fine-scale elements.

      For Darcy flow in heterogeneous porous media, we present the resulting neural-network-based MsHDG method and numerical experiments for both moderate- and high-contrast permeability fields. In the moderate-contrast regime, the learned local operators reproduce the standard MsHDG solution with small additional modeling error while providing substantial online speedup. The high-contrast experiments reveal a more delicate picture: polynomial coarse trace spaces may themselves become inadequate, and relatively small local operator errors can be strongly amplified by the global coupling. We conclude with several possible directions for improving robustness in this regime, including coefficient-adapted spectral trace spaces, structure-preserving neural parameterizations, and loss functions tailored to solution-relevant trace directions.`,
  },
];
