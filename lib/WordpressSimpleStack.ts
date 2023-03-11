import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as rds from 'aws-cdk-lib/aws-rds';
import * as ec2 from 'aws-cdk-lib/aws-ec2';


export class WordpressDBAndEC2Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // VPC - default subnet configurations
    const vpc = new ec2.Vpc(this, 'WordpressVPC');

    // MySQL DB
    const db = new rds.DatabaseInstance(this, 'WordpressDB', {
      engine: rds.DatabaseInstanceEngine.mysql({
        version: rds.MysqlEngineVersion.VER_8_0_19
      }),
      vpc: vpc
    });
  }
}
