# test

```mermaid
graph TD;
    master(Main) -- Merge -- develop(Develop);
    develop -- Merge -- feature/branch1(Feature 1);
    develop -- Merge -- feature/branch2(Feature 2);
    develop -- Merge -- feature/branch3(Feature 3);
    develop -- Merge -- feature/branch4(Feature 4);
    feature/branch1 -- Pull request -- develop;
    feature/branch2 -- Pull request -- develop;
    feature/branch3 -- Pull request -- develop;
    feature/branch4 -- Pull request -- develop;
    develop -- Merge -- release(Release);
    release -- Merge -- master;
    release -- Merge -- develop;
    release -- Merge -- hotfix/branch5(Hotfix 1);
    hotfix/branch5 -- Pull request -- master;
    hotfix/branch5 -- Pull request -- develop;

```
