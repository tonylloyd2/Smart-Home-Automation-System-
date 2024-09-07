"""Add token blacklist

Revision ID: 8f6599d9f2eb
Revises: da6e2f1b6cb6
Create Date: 2024-09-07 03:01:49.232742

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8f6599d9f2eb'
down_revision = 'da6e2f1b6cb6'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('token_blacklist',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('jti', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('token_blacklist')
    # ### end Alembic commands ###
