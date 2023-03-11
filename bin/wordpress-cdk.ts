#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { WordpressDBAndEC2Stack } from "../lib/WordpressSimpleStack";

const app = new cdk.App();
new WordpressDBAndEC2Stack(app, 'WordpressCdkStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});