export default {
  parserPreset: {
    parserOpts: {
      headerPattern: /^(.*?)(?:\((.*)\))?:?\s(.*)$/,
      headerCorrespondence: ['type', 'scope', 'subject']
    }
  },
  rules: {
    'type-case': [0],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', ['build', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test', 'chore']],
    'scope-empty': [2, 'never'],
    'subject-empty': [2, 'never']
  },
  prompt: {
    settings: {},
    skip: ['body', 'footer', 'issues'],
    messages: {
      skip: '回车直接跳过',
      max: '最大%d字符',
      min: '%d chars at least',
      emptyWarning: '内容不能为空，重新输入',
      upperLimitWarning: 'over limit',
      lowerLimitWarning: 'below limit'
    },
    questions: {
      type: {
        description: '请选择提交类型',
        enum: {
          feat: {
            description: '增加新功能',
            title: 'feat'
          },
          fix: {
            description: '修复bug',
            title: 'fix'
          },
          docs: {
            description: '文档修改',
            title: 'docs'
          },
          perf: {
            description: '性能优化',
            title: 'perf'
          },
          revert: {
            description: '版本回退',
            title: 'reverts'
          },
          ci: {
            description: 'CICD 集成相关',
            title: 'ci'
          },
          style: {
            description: '不影响程序逻辑的代码修改',
            title: 'style'
          },
          refactor: {
            description: '功能/代码重构',
            title: 'refactor'
          },
          test: {
            description: '添加测试代码',
            title: 'test'
          },
          build: {
            description: '影响项目构建或依赖修改',
            title: 'build'
          },
          chore: {
            description: '不属于以上类型的其他类型(日常事务)',
            title: 'chore'
          }
        }
      },
      scope: {
        description: '请输入修改的范围（必填）'
      },
      subject: {
        description: '请简要描述提交（必填）'
      },
      body: {
        description: '请输入详细描述（可选）'
      },
      isBreaking: {
        description: '有什么突破性的变化吗?'
      },
      breakingBody: {
        description: '一个破坏性的变更提交需要一个主体。 请输入提交本身的更长的描述  '
      },
      breaking: {
        description: 'Describe the breaking changes'
      },
      isIssueAffected: {
        description: '是否有未解决的问题?'
      },
      issuesBody: {
        description: 'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself'
      },
      issues: {
        description: '请输入问题说明'
      }
    }
  }
};
