(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{234:function(e,t,n){"use strict";n.r(t);var a={name:"Project: Bitbot",meta:[{name:"description",content:"Outline of the bitbot cryptocurrency trading deep learning system."}]},i=n(43),r=Object(i.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",{attrs:{navbarTitle:"Project: Bitbot"}},[n("h1",[e._v("Bit "),n("small",[e._v("(coin)")]),e._v(" bot")]),n("p",[e._v("An end to end machine learning system for:")]),n("ul",[n("li",[e._v("Training and Serving Cryptocurrency Price time series and heuristic forecasting models")]),n("li",[e._v("Backtesting said deep learning models with different strategies and configurations")]),n("li",[e._v("Deployment of trading solutions as trading signals, automated paper-trading or live-trading bots")]),n("li",[e._v("Dashboarding and Visualizing model forecasting, signals, backtrading or live trading results")])]),n("br"),n("br"),n("h2",[e._v("Deep Learning Model Training and Deployment")]),n("br"),n("p",[e._v("\n      The system allows for both interactive notebook-based local development and cloud-native ML E2E pipeline execution.\n  ")]),n("p",[n("a",{attrs:{href:"https://www.tensorflow.org/tfx"}},[e._v("Tensorflow Extended (TFX)")]),e._v(" \n      with the "),n("a",{attrs:{href:"https://github.com/ntakouris/fluent-tfx"}},[e._v("Fluent TFX")]),e._v(" API layer is used extensively\n      to orchestrate such pipelines that can either be executed locally, or on a cloud-based environment such as\n       "),n("a",{attrs:{href:"https://cloud.google.com/dataflow"}},[e._v("GCP Dataflow")]),e._v(", "),n("a",{attrs:{href:"https://www.kubeflow.org/"}},[e._v("Kubeflow")]),e._v(", "),n("a",{attrs:{href:"https://azure.microsoft.com/en-us/free/databricks/"}},[e._v("Azure Databricks")]),e._v(" and others. \n  ")]),n("p",[e._v("\n      For the pipelines and the online realtime prediction services, the runtime is abstracted away either with\n      "),n("a",{attrs:{href:"https://beam.apache.org/"}},[e._v("Apache Beam")]),e._v(" pipelines or through docker containers,\n          with the usage of "),n("a",{attrs:{href:"https://www.tensorflow.org/tfx/guide/serving"}},[e._v("Tensorflow Serving")]),e._v(" to enable\n      "),n("b",[e._v("0 downtime")]),e._v(" new model deployments after sophisticated input data validation, \n      model evaluation and infrastructure validation for each model trained.\n  ")]),n("p",[e._v("\n      Every pipeline step execution, experiment run, prediction or other artifacts/data produced in this system is logged,\n      either on a "),n("a",{attrs:{href:"https://www.tensorflow.org/tfx/guide/mlmd"}},[e._v("ML Metadata Store (MLMD)")]),e._v(" or custom solutions. \n      Status reports, alerts and notifications from selected parts of the system are reproted to our discord server (slack-like alternative).\n  ")]),n("br"),n("h2",[e._v("Backtrading and Live Trading")]),n("br"),n("p",[e._v("\n      Trading Strategies have been developed that co-operate with the trained models,\n      along with some in-house state keeping components that are used for online trading activities.\n      These components include but are not limited to:\n  ")]),n("ul",[n("li",[e._v("Trailing Stop-Loss and Take Profit Orders")]),n("li",[e._v("Vendor (e.g. Binance DEX) connectivity, order services and fee models")]),n("li",[e._v("Paper (or real) money allowance, per namespace")]),n("li",[e._v("Various ways of deep learning model prediction service invocation")])]),n("br"),n("p",[e._v("\n      Our backtrading system of choice is "),n("a",{attrs:{href:"https://github.com/kernc/backtesting.py"}},[e._v("Backtesting.py")]),e._v(", but realtime deployment is handled a bit differently.\n  ")])])}),[],!1,null,null,null);t.default=r.exports}}]);