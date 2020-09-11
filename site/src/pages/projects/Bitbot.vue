<template>
  <Layout navbarTitle="Project: Bitbot">
    <h1>Bit <small>(coin)</small> bot</h1>
    <p>An end to end machine learning system for:</p>
    <ul>
        <li>Training and Serving Cryptocurrency Price time series and heuristic forecasting models</li>
        <li>Backtesting said deep learning models with different strategies and configurations</li>
        <li>Deployment of trading solutions as trading signals, automated paper-trading or live-trading bots</li>
        <li>Dashboarding and Visualizing model forecasting, signals, backtrading or live trading results</li>
    </ul>
    <br /><br />
    <h2>Deep Learning Model Training and Deployment</h2>
    <br />
    <p>
        The system allows for both interactive notebook-based local development and cloud-native ML E2E pipeline execution.
    </p>
    <p>
        <a href="https://www.tensorflow.org/tfx">Tensorflow Extended (TFX)</a> 
        with the <a href="https://github.com/ntakouris/fluent-tfx">Fluent TFX</a> API layer is used extensively
        to orchestrate such pipelines that can either be executed locally, or on a cloud-based environment such as
         <a href="https://cloud.google.com/dataflow">GCP Dataflow</a>, <a href="https://www.kubeflow.org/">Kubeflow Pipelines</a>, <a href="https://azure.microsoft.com/en-us/free/databricks/">Azure Databricks</a> and others. 
    </p>
    <p>
        For the pipelines and the online realtime prediction services, the runtime is abstracted away either with
        <a href="https://beam.apache.org/">Apache Beam</a> pipelines or through docker containers,
            with the usage of <a href="https://www.tensorflow.org/tfx/guide/serving">Tensorflow Serving</a> to enable
        <b>0 downtime</b> new model deployments after sophisticated input data validation, 
        model evaluation and infrastructure validation for each model trained.
    </p>
    <p>
        Every pipeline step execution, experiment run, prediction or other artifacts/data produced in this system is logged,
        either on a <a href="https://www.tensorflow.org/tfx/guide/mlmd">ML Metadata Store (MLMD)</a> or custom solutions. 
        Status reports, alerts and notifications from selected parts of the system are reproted to our discord server (slack-like alternative).
    </p>
    <br />
    <h2>Backtrading and Live Trading</h2>
    <br />
    <p>
        Trading Strategies have been developed that co-operate with the trained models,
        along with some in-house state keeping components that are used for online trading activities.
        These components include but are not limited to:
    </p>
    <ul>
        <li>Trailing Stop-Loss and Take Profit Orders</li>
        <li>Vendor (e.g. Binance DEX) connectivity, order services and fee models</li>
        <li>Paper (or real) money allowance, per namespace</li>
        <li>Various ways of deep learning model prediction service invocation</li>
    </ul>
    <br />
    <p>
        Our backtrading system of choice is <a href="https://github.com/kernc/backtesting.py">Backtesting.py</a>, but realtime deployment is handled a bit differently.
    </p>

    <br />
    <h2>Deployment and DevOps</h2>
    <p>
      Everything is packaged as self-contained docker containers. Those containers are deployed in a 
      on-premises (small) kubernetes cluster with kubeflow pipelines and knative installed. Jobs can be
      scheduled on their own. Results are published to the ML Metadata server.
    </p>
  </Layout>
</template>

<script>
export default {
  name: "Project: Bitbot",
    meta: [
      {
        name: "description",
        content: "Outline of the bitbot cryptocurrency trading deep learning system."
      }
    ]
};
</script>

<style>
</style>
