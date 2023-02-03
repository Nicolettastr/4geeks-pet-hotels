"""empty message

Revision ID: eec68777a157
Revises: ce06612991f0
Create Date: 2023-02-02 14:53:11.802244

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'eec68777a157'
down_revision = 'ce06612991f0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('confirm_password', sa.String(length=32), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'confirm_password')
    # ### end Alembic commands ###